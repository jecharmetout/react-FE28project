import React, { FC, useState } from "react";
// @ts-ignore
import styles from "./App.module.css";
import Button, { ButtonType } from "./Components/Button";
import User from "./Components/User";
import Title from "./Components/Title";
import Tabs from "./Components/Tabs";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Navbar/Menu";
import Card from "./Components/Card";
import {MenuIcon} from './Assets/Icons/MenuIcon'
import {CancelIcon} from './Assets/Icons'


function App() {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [isOpened, setOpened] = useState(false);

  return (
    <div className={styles.app}>
      <Navbar
        onClick={() => setOpened(!isOpened)}
        title={isOpened ? <CancelIcon/> : <MenuIcon/>}
        input={
          isOpened ? null : (
            <Input
              placeholder={"Placeholder"}
              onChange={onChange}
              value={value}
            />
          )
        }
      />
      {isOpened && <Menu/>}
      <Input
        placeholder={"Placeholder"}
        onChange={onChange}
        value={value}
        // disabled={true}
        // error={true}
      />
      <div className={styles.wrapper}>
      <Card/>
      </div>
      
      <div className={styles.wrapper}>
        <Button
          type={ButtonType.Primary}
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={false}
        />
        <Button
          type={ButtonType.Primary}
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={true}
        />
        <Button
          type={ButtonType.Secondary}
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={false}
        />
        <Button
          type={ButtonType.Secondary}
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={true}
        />
        <Button
          type={ButtonType.Error}
          title={"Error"}
          onClick={() => {
            console.log("error");
          }}
          className={styles.error}
          disabled={false}
        />
        <Button
          type={ButtonType.Error}
          title={"Error"}
          onClick={() => {
            console.log("error");
          }}
          className={styles.error}
          disabled={true}
        />
      </div>

      <div className={styles.wrapper}>
        <User userName={"Artem Malkin"} />
      </div>

      <Tabs />

      <div className={`${styles.wrapper}`}>
        <Title title={"Sign In"} />
      </div>
    </div>
  );
}

export default App;
