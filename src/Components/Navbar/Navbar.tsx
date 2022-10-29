import React, {  useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";
import Menu from "./Menu";

import {
  MenuIcon,
  CancelIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  UserIcon
} from "../../Assets/Icons";
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import AuthSelectors from "../../Redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";
import { searchForPosts } from "../../Redux/reducers/postsReducer";

const Navbar = ({ onClick, isOpened }: any) => {
  const { theme, onChangeTheme } = useThemeContext();
  const dispatch = useDispatch();
  const currentUser = useSelector(AuthSelectors.getCurrentUser);

  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (value.length > 0) {
  //     dispatch(searchForPosts(value));
  //   }
  // }, [value]);
  // !! для по буквенного поиска

  const onSignInClick = () => {
    navigate(PathNames.SignIn);
  };
  const onSearch = () => {
    if (value.length > 0) {
      dispatch(searchForPosts(value));
      navigate(PathNames.Search, { state: { searchElement: value } });
      setValue("");
      onClick();
    }
  };
  return (
    <div className={styles.navbarMenu}>
      <nav className={styles.nav}>
        <div className={styles.burgerButton} onClick={onClick}>
          {isOpened ? <CancelIcon /> : <MenuIcon />}
        </div>
        <div className={styles.inputContainer}>
          {isOpened && (
            <Input
              placeholder={"Placeholder"}
              onChange={onChange}
              value={value}
            />
          )}
        </div>
        <div className={styles.userSearchWrapper}>
          {isOpened && (
            <div className={styles.searchIcon} onClick={onSearch}>
              <SearchIcon />
            </div>
          )}
          <div
            className={classNames(styles.sunMoonIcon)}
            onClick={onChangeTheme}
          >
            {theme === Theme.Dark ? <SunIcon /> : <MoonIcon />}
          </div>
          {currentUser ? (
            <User userName={currentUser?.username || ""} />
          ) : (
            <div className={styles.userIcon} onClick={onSignInClick}>
              <UserIcon />
            </div>
          )}
        </div>
      </nav>
      {isOpened && <Menu />}
    </div>
  );
};

export default Navbar;
