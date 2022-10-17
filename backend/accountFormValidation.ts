import { Account } from "./models";

export function requestValidation(request: Account) {
  const emailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (
    !request.name &&
    !request.username &&
    !request.address &&
    !request.email &&
    !request.hashed_password &&
    !request.salted_password
  ) {
    return { success: false, error: "Fill in all required information" };
  }

  if (!request.name) {
    return { success: false, error: "Enter name" };
  }

  if (!request.username) {
    return { success: false, error: "Enter username" };
  }

  if (!request.address) {
    return { success: false, error: "Empty address" };
  }

  if (!request.email) {
    return { success: false, error: "Empty email" };
  }

  if (!emailFormat.test(request.email)) {
    return { success: false, error: "Invalid email" };
  }

  if (!emailFormat.test(request.hashed_password)) {
    return { success: false, error: "Invalid password" };
  }

  if (!emailFormat.test(request.salted_password)) {
    return { success: false, error: "Invalid password" };
  }

  return { success: true, error: "" };
}
