import { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAccountById, updateAccount } from "../../apiClient";
import "./UpdateUserProfile.scss";
import { validateImage } from "image-validator";

const urlValidation = async (url: string) => {
  const isValidImage = await validateImage(url);
  return isValidImage;
};

export function UpdateUserProfile() {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    photo: "",
    updated_at: "",
  });

  const defaultPhoto =
    "https://cdn-icons-png.flaticon.com/512/1000/1000613.png";

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isValidImage, setIsValidImage] = useState<boolean>(true);

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

  const handleChangeAccountName = (event: ChangeEvent<HTMLInputElement>) => {
    account.name = event.target.value;
    setAccount({ ...account });
  };

  const handleChangeAccountEmail = (event: ChangeEvent<HTMLInputElement>) => {
    account.email = event.target.value;
    setAccount({ ...account });
  };

  const handleChangeAccountPhoto = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    account.photo = event.target.value;
    const isValidImage = await urlValidation(account.photo);

    if (isValidImage && account.photo) {
      setAccount({ ...account });
      setIsValidImage(true);
    } else {
      setIsValidImage(false);
      account.photo = "";
    }
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const createTicket = () => {
    navigate(`/account/${id}/ticket`);
  };

  const submit = () => {
    const request = {
      name: "",
      email: "",
      photo: "",
      updated_at: "",
    };

    if (account.name !== "") {
      request.name = account.name;
    }

    if (account.email !== "") {
      request.email = account.email;
    }

    if (isValidImage && account.photo !== "") {
      request.photo = account.photo;
    }

    request.updated_at = new Date().toISOString();

    updateAccount(Number(id), request).then(
      (response: { success: any; error: string }) => {
        if (!response.success) {
          setError(response.error);
        } else {
          navigate(`/account/${id}/info`, { replace: true });
        }
      }
    );
  };

  if (!account) {
    return <h3>Data is loading ...</h3>;
  } else {
    return (
      <div className="update-container">
        <h3>Update your account</h3>

        <div>
          <img
            className={
              isValidImage && account.photo
                ? "update-photo"
                : "update-image-default"
            }
            src={isValidImage && account.photo ? account.photo : defaultPhoto}
          />
        </div>

        <label className="update-label">Name</label>
        <input
          className="update-input"
          type="text"
          onChange={handleChangeAccountName}
          value={account.name}
        ></input>

        <label className="update-label">Email</label>
        <input
          className="update-input"
          type="email"
          onChange={handleChangeAccountEmail}
          value={account.email}
        ></input>

        <label className="update-label">Photo</label>
        <input
          className="update-input"
          type="url"
          value={account.photo}
          onChange={handleChangeAccountPhoto}
        ></input>

        <button
          className="update-form-button"
          onClick={submit}
          onKeyPress={handleKeyPress}
        >
          Submit
        </button>
      </div>
    );
  }
}
