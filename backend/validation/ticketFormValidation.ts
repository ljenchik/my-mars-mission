import { Ticket } from "../models";

export function requestTicketValidation(request: Ticket) {
  const emailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!request.name && 
    !request.gender && 
    !request.dob && 
    !request.address && 
    !request.phone &&
    !request.email &&
    !request.flight_date) {
    return { success: false, error: "Enter all required details" };
  }

  if (!request.name) {
    return { success: false, error: "Enter name" };
  }

  if (!request.gender) {
    return { success: false, error: "Select gender" };
  }

  if (!request.dob) {
    return { success: false, error: "Select date of birth" };
  }

  if (!request.address) {
    return { success: false, error: "Enter address" };
  }

  if (!request.phone) {
    return { success: false, error: "Enter phone" };
  }

  if (!request.email) {
    return { success: false, error: "Enter email" };
  }

  if (!emailFormat.test(request.email)) {
    return { success: false, error: "Enter valid email" };
  }

  if (!request.flight_date) {
    return { success: false, error: "Select flight date" };
  }

  return { success: true, error: "" };
}
