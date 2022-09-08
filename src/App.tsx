import React, { FC, useState } from "react";
// @ts-ignore
import styles from "./App.module.css";
import classNames from "classnames";
import Button, { ButtonType } from "./Components/Button";
import User from "./Components/User";
import Title from "./Components/Title";
import Tabs from "./Components/Tabs";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Navbar/Menu";
import CardList from "./Components/CardList";
import Footer from "./Components/Footer";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Search from "./Pages/Search";
import Blog from "./Pages/Blog";
import ThemeProvider from "./Context/ThemeContext/Provider";
import { Theme } from "./Context/ThemeContext/Context";

function App() {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [isOpened, setOpened] = useState(false);
  const [isDark, setDark] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = () => {
    const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(themeValue);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      {/* <div className={styles.app}>
        <Navbar
          onClick={() => setOpened(!isOpened)}
          title={isOpened ? <CancelIcon /> : <MenuIcon />}
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
        {isOpened && <Menu />}
        <Input
          placeholder={"Placeholder"}
          onChange={onChange}
          value={value}
          // disabled={true}
          // error={true}
        />
        <div className={styles.wrapper}>
          <CardList />
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
        <Footer />
      </div> */}
      <div className={classNames(styles.app, {[styles.darkContainer]:theme===Theme.Dark})}>
        <div className={styles.navbarMenu}>
          <Navbar
            onClick={() => setOpened(!isOpened)}
            isOpened={isOpened}
            input={
              isOpened && (
                <Input
                  placeholder={"Placeholder"}
                  onChange={onChange}
                  value={value}
                />
              )
            }
            changeThemeOnClick={() => setDark(!isDark)}
            isDark={isDark}
          />
          {isOpened && <Menu />}
        </div>
        <div className={classNames(styles.contentWrapper)}></div>
        {/* <Search /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <Blog/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
