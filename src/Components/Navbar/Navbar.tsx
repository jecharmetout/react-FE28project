import React,{useState} from 'react'
//@ts-ignore
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.wrapperNavbar}>
        <div className={styles.burgerBtn}>
          <span />
        </div>

        {/* <Menu/> */}
      </nav>
    );
  };


export default Navbar