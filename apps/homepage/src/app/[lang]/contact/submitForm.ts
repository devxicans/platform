"use server"
import { UiValidator } from "@uireact/validator";
import { schema as validatorSchema } from './validatorSchema';
import { headers } from 'next/headers'
import { getLocaleFromHeaders } from "../../../lib";
import { getDictionary } from "../../../lib";

const validator = new UiValidator();

export const submitForm = async (previusState : unknown, formData : FormData) => {

  const requestHeaders = await headers();
  const locale = getLocaleFromHeaders(requestHeaders);
  const loc = await getDictionary(locale);

  const schema = validatorSchema(loc);

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message')
  }

  const result = validator.validate(schema, rawFormData);

  if (!result.passed) {
    return{
      errors: result.errors
    }
  }
  console.log("No errors");
  // Send mail function here
  return
};
