import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { activateUser } from "../../Redux/reducers/authReducer";
import { RegistrationStatus } from "../../Utils/globalTypes";
import { PathNames } from "../Router/Router";

const ActivateUser = () => {
  const dispatch = useDispatch();
  const [registrationStatus, setRegistrationStatus] = useState(
    RegistrationStatus.Failed
  );

  const handleStatus = (status: RegistrationStatus) => {
    setRegistrationStatus(status);
  };

  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      dispatch(
        activateUser({
          params: { uid: params.uid, token: params.token },
          callback: handleStatus
        })
      );
    } else {
      handleStatus(RegistrationStatus.Failed);
    }
  }, [params.token, params.uid]);

  return (
    <div>
      <div>Thank you for registration</div>
      {registrationStatus === RegistrationStatus.Success && (
        <div>
          Registration successful, please
          <NavLink to={PathNames.SignIn}> Log In </NavLink>
        </div>
      )}
      {registrationStatus === RegistrationStatus.Failed && (
        <div>
          Registration failed, please try to
          <NavLink to={PathNames.SignUp}> Sign Up </NavLink>
          again.
        </div>
      )}
    </div>
  );
};
export default ActivateUser;
