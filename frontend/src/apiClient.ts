import { Account, Login } from "./models";
const baseurl = process.env["REACT_APP_BACKEND_DOMAIN"];

export async function createAccount(account: Account) {
  try {
    const response = await fetch(`${baseurl}/account/create`, {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
      },
    });
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

export async function login(login: Login) {
  try {
    const response = await fetch(`${baseurl}/account/login`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      if (data.success) {
        return {
          success: data.success,
          error: data.message,
          id: data.id,
          accessToken: data.accessToken
        };
      } else {
        return {
          success: data.success,
          error: data.message,
          id: "",
        };
      }
    } else {
      const error = await response.text();
      return {
        succes: false,
        error: error,
        id: "",
      };
    }
  } catch (e) {
    return { succes: false, error: e, id: "" };
  }
}

export async function getAccountById(id: number) {
  try {
    const response = await fetch(
        `${baseurl}/account/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "BEARER " + localStorage.getItem('accessToken')
          },
        }
      );
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

export async function createTicket(ticket: any) {
  try {
    const response = await fetch(`${baseurl}/ticket/create`, {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          error: "",
          ticket_id: data.id,
        };
      } else {
        return {
          success: false,
          error: data.error,
          ticket_id: null,
        };
      }
    } else {
      const error = await response.text();
      return {
        success: false,
        ticket_id: null,
        error: error,
      };
    }
  } catch (e) {
    return { success: false, ticket_id: null, error: e };
  }
}
