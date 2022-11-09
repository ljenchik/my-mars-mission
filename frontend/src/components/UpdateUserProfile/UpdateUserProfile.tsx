import { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAccountById, updateAccount } from "../../apiClient";
import { Account } from "../../models";
import "./UpdateUserProfile.scss";

export function UpdateUserProfile() {
    const [account, setAccount] = useState({
      name: "",
      email: "",
      photo: "",
      updated_at: ""
    });

    const params = useParams();
    const [error, setError] = useState("");
    const id = params.id;
    const navigate = useNavigate();
  
    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      getAccountById(Number(id)).then((response) => {
        response.account.created_at = response.account.created_at.split("T")[0];
        if (response.account.updated_at) {
          response.account.updated_at = response.account.updated_at.split("T")[0];
        }
        setAccount(response.account);
      });
    }, []);

    const handleChangeEmployeeName = (event: ChangeEvent<HTMLInputElement>) => {
      account.name = event.target.value;
      setAccount({ ...account });
    }

    const handleChangeEmployeeEmail = (event: ChangeEvent<HTMLInputElement>) => {
      account.email = event.target.value;
      setAccount({ ...account });
    }

    const handleChangeEmployeePhoto = (event: ChangeEvent<HTMLInputElement>) => {
      account.photo = event.target.value;
      setAccount({ ...account });
    }

    const submit = () => {
      const request = {
        name: "",
        email: "",
        photo: "",
        updated_at: ""
    };

    if (account.name !== "") {
      request.name = account.name;
    }

    if (account.email !== "") {
      request.email = account.email;
    }
    
    if (account.photo !== "") {
      request.photo = account.photo;
    }

    request.updated_at = new Date().toISOString();   
    updateAccount(Number(id), request).then((response: { success: any; error: string; }) => {
      if (!response.success) { 
        setError(response.error.slice(1, -1));
      } else {
        navigate(`/account/${id}`, {replace: true});
      }
    });
  };

  
    if (!account) {
      return <h3>Data is loading ...</h3>;
    } else {
      return (
        <div className="update-container">
        <h3>Update your account</h3>


        <label className="update-label">Name</label>
          <input
            className="update-input"
            type="text"
            onChange={handleChangeEmployeeName}
            value={account.name}
          ></input>


        <label className="update-label">Email</label>
          <input
           className="update-input"
            type="email"
            onChange={handleChangeEmployeeEmail}
            value={account.email}
          ></input>

        <label className="update-label">Photo</label>
          <input
            className="update-input"
            type="email"
            onChange={handleChangeEmployeePhoto}
            value={account.photo}
          ></input>


        <button type="submit" onClick={submit}>Submit</button>
        </div>

      );
    }
  }
  
