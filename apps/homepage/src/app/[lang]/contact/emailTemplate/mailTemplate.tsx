import { LocFileType } from "../../../../lib/context/loc-context";
import { MailLayout } from "./mailLayout";

type Contact = {
  name: string,
  email: string,
  phone: string,
  message: string
}

type MailProps = {
  loc: LocFileType;
  contact: Contact;
}

export const MailTemplate = ({ loc, contact }: MailProps) => {
  return (
    <MailLayout>
      <div>
        <h1 style={{ fontFamily: "'Quicksand', -apple-system,'SF Pro Display','SF Pro Text','Helvetica',sans-serif", fontSize: "48px" }}>1xDev</h1>
        <p style={{ fontSize: "16px" }}>
          {loc.hello} {contact.name}. 
          <br/>
          {loc.emailMessage}
        </p>
        <div style={{ textAlign: "center", padding: "50px" }}>
          <a
            href={`https://1xdevelopers.com/`}
            style={{
              color: "#ffffff",
              padding: "20px",
              backgroundColor: "#bc03c0",
              borderRadius: "20px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
          {loc.pageLinkText}
          </a>
        </div>
        <br />
        <p>{loc.someLinksText}</p>
        <div>
          <ul style={{ padding: "20px" }}>
            <li style={{ paddingTop: "10px" }}>
              <a
                href="https://1xdevelopers.com/contact"
                style={{ color: "#bc03c0", textDecoration: "none" }}
              >
                {loc.contactUs}
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <br />
        <a href="https://1xdevelopers.com/" style={{ color: "black", textDecoration: "none" }}>
          1xDev
        </a>
      </div>
    </MailLayout>
  );
};