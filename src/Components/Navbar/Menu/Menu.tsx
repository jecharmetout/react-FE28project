import React from 'react'
import { useLocation } from "react-router-dom";

//@ts-ignore
import styles from './Menu.module.css'
import classNames from "classnames";

import User from "../../User/User"
import { Theme, useThemeContext } from "../../../Context/ThemeContext/Context";
import {NavLink} from 'react-router-dom'
import { PathNames } from "../../../Pages/Router/Router";





const Menu = ()=>{
  const { theme } = useThemeContext();
  const location = useLocation()

    return(
        <ul className={classNames(styles.listMenu, {
          [styles.darkContainer]: theme === Theme.Dark
        })}>
        <li>
          <User userName={"Artem Malkin"} />
        </li>
        <li><NavLink to={PathNames.Home} className={classNames({
          [styles.activeLink]: location.pathname === PathNames.Home,
          [styles.inactiveLink]: location.pathname !== PathNames.Home
        })}>Home</NavLink></li>
        <li><NavLink to={PathNames.Search} className={classNames({
          [styles.activeLink]: location.pathname === PathNames.Search,
          [styles.inactiveLink]: location.pathname != PathNames.Search,
        })}>Search</NavLink></li>
        <li><NavLink to={PathNames.PostContent} className={classNames({
          [styles.activeLink]: location.pathname === PathNames.PostContent,
          [styles.inactiveLink]: location.pathname != PathNames.PostContent,
        })}>Add post</NavLink></li>
        
        <li><NavLink to={PathNames.SignIn} className={styles.signIn}>SignIn</NavLink></li>
      </ul>
    )
}
export default Menu