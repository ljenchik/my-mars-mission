import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getAccountById } from "../../apiClient";
import { Account } from "../../models";
//import "./UserProfile.scss";

export function UserProfile() {
    const [user, setUser] = useState<Account>();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        getAccountById(Number(id)).then((response) => {
          response.account.created_at = response.account.created_at.split("T")[0];
          if (response.account.updated_at)
           {response.account.updated_at = response.account.updated_at.split("T")[0];}
          setUser(response.account);
        });
      }, []);
    

if (!user) {
    return (
        <h3>Data is loading ...</h3>
    )
}
else {
    return (
        <div>
          <h3>Dear {user.name}!</h3>
          <h3>Are you ready to book ticket to Mars?</h3>
        </div>
      );
}
  
}


