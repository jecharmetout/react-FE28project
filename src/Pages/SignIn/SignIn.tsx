import React, { FC, useState, useEffect } from "react";
//@ts-ignore
import styles from "./SignIn.module.css";
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Button, { ButtonType } from "../../Components/Button";
import Label from "../../Components/Label";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError("Set correct email");
    } else {
      setEmailError("");
    }
  }, [emailTouched, email]);

  useEffect(() => {
    if (passwordTouched && password.length < 8) {
      setPasswordError("Enter more than 8 characters");
    } else {
      setPasswordError("");
    }
  }, [passwordTouched, password]);

  const onBlurEmail = () => {
    setEmailTouched(true);

     };

  const onBlurPassword = () => {
    setPasswordTouched(true);
   
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
    setEmailTouched(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headForm}>
        <div>Back to Home</div>
        <Title title={"Sign In"} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Label title={"Email"} />
          <Input
            placeholder={"Your email"}
            onChange={setEmail}
            onBlur={onBlurEmail}
            value={email}
            error={!!emailError}
          />
          {emailTouched && emailError && <div>{emailError}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Password"} />
          <Input
            placeholder={"Your password"}
            onChange={setPassword}
            onBlur={onBlurPassword}
            value={password}
            error={!!passwordError}
          />
          {passwordTouched && passwordError && <div>{passwordError}</div>}
        </div>

        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign In"}
            onClick={() => {
              console.log("primary");
            }}
            className={styles.signInBtn}
            disabled={false}
          />
        </div>

        <div className={styles.haveAccount}>
          Don’t have an account? <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
