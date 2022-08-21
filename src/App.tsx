import React, { FC, useState } from "react";
// @ts-ignore
import styles from "./App.module.css";
import Button, { ButtonType } from "./Components/Button";
import User from "./Components/User";
import Title from "./Components/Title";
import Tabs from "./Components/Tabs";
import Input from "./Components/Input";
const Navbar = () => {
  return (
    <nav className={styles.wrapperNavbar}>
      <div className={styles.burgerBtn}>
        <span />
      </div>
      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
      </main>
      {/* <Menu/> */}
    </nav>
  );
};

function App() {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div className={styles.app}>
      <Input
        placeholder={"Placeholder"}
        onChange={onChange}
        value={value}
        // disabled={true}
        // error={true}
      />
      {/* <Navbar /> */}
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
