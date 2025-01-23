"use server"
import { UiValidator } from "@uireact/validator";
import { schema as validatorSchema } from './validatorSchema';
import { headers } from 'next/headers'
import { getLocaleFromHeaders } from "../../../lib";
import { getDictionary } from "../../../lib";
import { Resend } from "resend";
import { MailTemplate } from "./emailTemplate/mailTemplate";
import { v4 as uuidv4 } from 'uuid';

const validator = new UiValidator();

type Contact = {
  name: string,
  email: string,
  phone: string,
  message: string
}

export const submitForm = async (previusState : unknown, formData : FormData) => {

  const requestHeaders = await headers();
  const locale = getLocaleFromHeaders(requestHeaders);
  const loc = await getDictionary(locale);

  const schema = validatorSchema(loc);

  const rawFormData : Contact= {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    message: formData.get('message') as string
  }

  const result = validator.validate(schema, rawFormData);

  if (!result.passed) {
    return{
      errors: result.errors
    }
  }

  try {
    await sendMail(rawFormData);
    return {
      success: true,
      message: loc.successMessageSendMail || "Your message has been sent successfully",
    };
  } catch (error) {
    console.error("Error sending mail:", error);
    return {
      success: false,
      message: loc.errorMessageSendMail || "There was an error sending your message. Please try again later.",
    };
  }  

};

const sendMail = async (contact: Contact) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_API_MAIL = process.env.RESEND_API_MAIL;

  if (!RESEND_API_KEY || !RESEND_API_MAIL) {
    throw new Error("Resend API key or email not configured.");
  }

  const resend = new Resend(RESEND_API_KEY);

  const requestHeaders = await headers();
  const locale = getLocaleFromHeaders(requestHeaders);
  const loc = await getDictionary(locale);

  const uniqueEntityId = uuidv4();

  const result = await resend.emails.send({
    from: RESEND_API_MAIL,
    to: contact.email,
    subject: "We got your information",
    react: MailTemplate({loc, contact}),
    headers: {
      'X-Entity-Ref-ID': uniqueEntityId
    }
  });

  if (!result?.data?.id) {
    console.error("Resend API response:", result);
    throw new Error("Failed to send email.");
  }
  console.log('Sent succesfully')
};