import React from "react";
import { useLocation } from "react-router-dom";

//@ts-ignore
import styles from "./Menu.module.css";
import classNames from "classnames";

import User from "../../User/User";
import { Theme, useThemeContext } from "../../../Context/ThemeContext/Context";
import { NavLink } from "react-router-dom";
import { PathNames } from "../../../Pages/Router/Router";

const Menu = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  const MENU_LINK = [
    {
      key: "Home",
      title: "Home",
      path: PathNames.Home,
    },
    {
      key: "Search",
      title: "Search",
      path: PathNames.Search,

    },
    {
      key: "Add post",
      title: 'Add post',
      path: PathNames.PostContent,

    }
  ];

  return (
    <ul
      className={classNames(styles.listMenu, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <li>
        <User userName={"Artem Malkin"} />
      </li>
      {MENU_LINK.map(({ key, title, path }) => {
        return (
          <li key={key}>
            <NavLink
              to={path}
              className={classNames({
                [styles.activeLink]: location.pathname === path,
                [styles.inactiveLink]: location.pathname !== path
              })}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink to={PathNames.SignIn} className={styles.signIn}>
          SignIn
        </NavLink>
      </li>
    </ul>
  );
};
export default Menu;
