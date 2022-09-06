import React, { FC, useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";
import {
  MenuIcon,
  CancelIcon,
  SearchIcon,
  SunIcon,
  MoonIcon
} from "../../Assets/Icons";
import classNames from "classnames";

const Navbar = ({ onClick, input, isOpened, isDark, changeThemeOnClick }: any) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.burgerButton} onClick={onClick}>
        {isOpened ? <CancelIcon /> : <MenuIcon />}
      </div>
      {input}
      <div className={styles.userSearchWrapper}>
        <div className={classNames(styles.sunIcon)} onClick={changeThemeOnClick}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </div>
        <div
          className={styles.searchIcon}
          onClick={() => {
            alert("Searh");
          }}
        >
          <SearchIcon />
        </div>
        <User userName={"Artem Malkin"} />
      </div>
    </nav>
  );
};

export default Navbar;
