import React from "react";
// @ts-ignore
import styles from "./App.module.css";

const Button = ({ title, onClick, className, disabled }: any) => {
  // const buttonType = {
  //   primary: styles.primaty,
  //   secondary: styles.secondary,
  //   error: styles.error,
  // }

  return (
    <button
      onClick={onClick}
      className={`${className || ""}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
const User = ({ name }: any) => {
  return (<div>{name}</div>)
};

function App() {
  return (
    <div className={styles.app}>
     
      <Button
        title={"Primary"}
        onClick={() => {
          console.log("primary");
        }}
        className={styles.primary}
        disabled={false}
      />
      <Button
        title={"Primary"}
        onClick={() => {
          console.log("primary");
        }}
        className={styles.primary}
        disabled={true}
      />
      <Button
        title={"Secondary"}
        onClick={() => {
          console.log("secondary");
        }}
        className={styles.secondary}
        disabled={false}
      />
      <Button
        title={"Secondary"}
        onClick={() => {
          console.log("secondary");
        }}
        className={styles.secondary}
        disabled={true}
      />
      <Button
        title={"Error"}
        onClick={() => {
          console.log("error");
        }}
        className={styles.error}
        disabled={false}
      />
      <Button
        title={"Error"}
        onClick={() => {
          console.log("error");
        }}
        className={styles.error}
        disabled={true}
      />
      
      
      
        <User name={'Matt Helders'}/>
      
      
    </div>
  );
}

export default App;
