import React, { FC,useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";




const Navbar = ({onClick, title, input}:any) => {

  return (
    <nav className={styles.nav}>
      <div
        className={styles.burgerButton}
        onClick={onClick}
      >
        <p>{title}</p>

      </div>
      {input}
      <div className={styles.userSearchWrapper}>
        <div className={styles.search}>
          <img src={"../img/search.png"} alt="" />
        </div>
        <User userName={"Artem Malkin"} />
      </div>
    </nav>
  );
};

export default Navbar;
