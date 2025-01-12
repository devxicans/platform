import { UiValidator } from "@uireact/validator";
import { LocFileType } from "../../../lib/context/loc-context";

const validator = new UiValidator();


export const schema = ( loc : LocFileType) => ({
  name: validator.field("text").present(loc.nameInputError),
  email: validator
    .field("email", loc.emailInputError2)
    .present(loc.emailInputError1),
  phone: validator
    .field("numeric")
    .present(loc.phoneInputError1)
    .length(10, 12, loc.phoneInputError2),
  message: validator
    .field("text")
    .present(loc.messageInputError1)
    .length(0, 500, loc.messageInputError2),
});
