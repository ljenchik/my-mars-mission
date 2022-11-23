import { faRocket, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAccountById } from "../../apiClient";
import { Account } from "../../models";
import "./UserInfo.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export function UserInfo() {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const [error, setError] = useState("");
  const id = params.id;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    getAccountById(Number(id)).then((response) => {
      response.account.created_at = response.account.created_at.split("T")[0];
      if (response.account.updated_at) {
        response.account.updated_at = response.account.updated_at.split("T")[0];
      }
      setAccount(response.account);
    });
  }, []);

  if (!account) {
    return <h3>Data is loading ...</h3>;
  } else {
    return (
      <section className="user-info-container">
        <div>
        {account.photo ?  <img
                className="user-info-photo"
                src={account.photo}
              /> :
        <OverlayTrigger overlay={<Tooltip className="add-photo">Add photo</Tooltip>}>
          {({ ref, ...triggerHandler }) => (
            <Link ref={ref} to={`/my-mars-mission/account/${id}/update`} {...triggerHandler}>
              <img
                className="user-info-default"
                src="https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360"
              />
            </Link>
          )}
        </OverlayTrigger>
  }

        </div>
        <p className="user-info-name">{account.name}</p>
        <p className="user-info-email">{account.email}</p>
        <p className="user-info-created">Created on {account.created_at}</p>
        {account.updated_at ? (
          <p className="user-info-created">Updated on {account.updated_at}</p>
        ) : (
          ""
        )}
        <Link to={`/my-mars-mission/account/${id}/update`}>
          <button className="user-info-button">Update details</button>
        </Link>

        <Link to={`/my-mars-mission/account/${id}/change-password`}>
          <button className="user-info-button">Change password</button>
        </Link>

        <Link to={`/my-mars-mission/account/${id}/ticket`}>
          <button className="user-info-button" >Book ticket</button>
        </Link>

        <Link to={`/my-mars-mission/account/${id}/tickets`}>
          <button className="user-info-button">My tickets</button>
        </Link>
      </section>
    );
  }
}
