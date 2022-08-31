import React, { FC,useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";
import {SearchIcon} from '../../Assets/Icons/index'
import { MenuIcon } from "../../Assets/Icons";
import { CancelIcon } from "../../Assets/Icons";



const Navbar = ({onClick,  input, isOpened}:any) => {

  return (
    <nav className={styles.nav}>
      <div
        className={styles.burgerButton}
        onClick={onClick}
      >
          {isOpened ? <CancelIcon /> : <MenuIcon />}

      </div>
      {input}
      <div className={styles.userSearchWrapper}>
        <div className={styles.searchIcon} onClick={ ()=>{alert('Searh')}}>
          <SearchIcon/>
        </div>
        <User userName={"Artem Malkin"} />
      </div>
    </nav>
  );
};

export default Navbar;
