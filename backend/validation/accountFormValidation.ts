import { AccountForm } from "../models";

export function requestAccountValidation(request: AccountForm) {
  const emailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (
    !request.name &&
    !request.email &&
    !request.password 
  ) {
    return { success: false, error: "Enter name" };
  }

  if (!request.name) {
    return { success: false, error: "Enter name" };
  }

  if (!request.email) {
    return { success: false, error: "Enter email" };
  }

  if (!emailFormat.test(request.email)) {
    return { success: false, error: "Enter valid email" };
  }

  if (!request.password) {
    return { success: false, error: "Enter password" };
  }

  return { success: true, error: "" };
}


export function requestUpdateAccountValidation(request: AccountForm) {
  const emailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (
    !request.name &&
    !request.email
  ) {
    return { success: false, error: "Enter name" };
  }

  if (!request.name) {
    return { success: false, error: "Enter name" };
  }

  if (!request.email) {
    return { success: false, error: "Enter email" };
  }

  if (!emailFormat.test(request.email)) {
    return { success: false, error: "Enter valid email" };
  }
  return { success: true, error: "" };
}

