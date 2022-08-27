import React, { FC,useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";
import {SearchIcon} from '../../Assets/Icons/index'



const Navbar = ({onClick, title, input}:any) => {

  return (
    <nav className={styles.nav}>
      <div
        className={styles.burgerButton}
        onClick={onClick}
      >
        {title}

      </div>
      {input}
      <div className={styles.userSearchWrapper}>
        <div className={styles.search}>
          <SearchIcon/>
        </div>
        <User userName={"Artem Malkin"} />
      </div>
    </nav>
  );
};

export default Navbar;
