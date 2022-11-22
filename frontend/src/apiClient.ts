import { Account, Login, Ticket } from "./models";
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

export async function updateAccount(id: number, account: any) {
  try {
    const response = await fetch(`${baseurl}/account/${id}/update`, {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "BEARER " + localStorage.getItem('accessToken')
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          error: ""
        };
      } else {
        return {
          success: false,
          error: data.error,
        };
      }
    } else {
      const error = await response.text();
      return {
        success: false,
        error: error,
      };
    }
  } catch (e) {
    return { success: false,  error: e };
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
    console.log("api response", response)
    if (response.ok) {
      const data = await response.json();
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
          error: data.error,
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

export async function createTicket(ticket: Ticket) {
  ticket.flight_date = ticket.flight_date.split("/").reverse().join("-");
  try {
    const response = await fetch(`${baseurl}/account/${ticket.owner_id}/ticket`, {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "BEARER " + localStorage.getItem('accessToken')
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("data", data)
      if (data.success) {
        return {
          success: true,
          error: "",
          ticket_id: data.ticket_id,
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

export async function getTicketById(id: number | null) {
  try {
    const response = await fetch(
        `${baseurl}/ticket/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "BEARER " + localStorage.getItem('accessToken')
          },
        }
      );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.success) {
        return {
          success: true,
          ticket: data.ticket[0],
          error: data.error,
        };
      } else {
        return {
          success: false,
          ticket: {},
          error: "Error occured when getting ticket details"
        };
      }
    } else {
      const error = await response.text();
      return { ticket: {}, success: false, error: error };
    }
  } catch (e) {
    return { ticket: {}, success: false, error: e };
  }
}


export async function getTicketsByOwnerId(id: number) {
  try {
    const response = await fetch(
        `${baseurl}/account/${id}/tickets`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "BEARER " + localStorage.getItem('accessToken')
          },
        }
      );
      console.log(response)
    if (response.ok) {
      const data = await response.json();
      console.log("data", data)
      if (data.success) {
        return {
          success: true,
          tickets: data.tickets,
          error: data.error,
        };
      } else {
        return {
          success: false,
          tickets: [],
          error: "Error occured when getting ticket details"
        };
      }
    } else {
      const error = await response.text();
      return { ticket: [], success: false, error: error };
    }
  } catch (e) {
    return { ticket: [], success: false, error: e };
  }
}

export async function changePassword(id: number, 
  currentPassword: string, newPassword: string, email: string) {
  var passwords = {currentPassword: currentPassword, newPassword: newPassword, email: email}
  
  try {
    const response = await fetch(`${baseurl}/account/${id}/change-password`, {
      method: "POST",
      body: JSON.stringify(passwords),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "BEARER " + localStorage.getItem('accessToken')
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          error: ""
        };
      } else {
        return {
          success: false,
          error: data.error
        };
      }
    } else {
      const error = await response.text();
      return {
        success: false,
        error: error
      };
    }
  } catch (e) {
    return { success: false, error: e };
  }
}
