import { Account } from "./models";

  const baseurl = process.env["REACT_APP_BACKEND_DOMAIN"];
  
  export async function createAccount(
    account: Account
  ) {
    try {
      const response = await fetch(
        `${baseurl}/account/create`,
        {
          method: "POST",
          body: JSON.stringify(account),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          return {
            success: true,
            error: "",
            id: data.id,
          };
        } else {
          return {
            success: false,
            error: data.error,
            id: null,
          };
        }
      } else {
        const error = await response.text();
        return {
          success: false,
          id: null,
          error: error,
        };
      }
    } catch (e) {
      return { success: false, id: null, error: e };
    }
  }
  
  export async function getAccountById(id: number) {
    try {
      const response = await fetch(`${baseurl}/account/${id}`);
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          return {
            success: data.success,
            account: data.account[0],
            error: data.error,
          };
        } else {
          return {
            success: false,
            account: {},
            error: "Error occured when getting employee data",
          };
        }
      } else {
        const error = await response.text();
        return { account: {}, success: false, error: error };
      }
    } catch (e) {
      return { account: {}, success: false, error: e };
    }
  }