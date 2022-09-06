import React from "react";
import { classicNameResolver } from "typescript";
//@ts-ignore
import styles from "./Search.module.css";
import classNames from "classnames";
import CardSearch from "../../Components/CardSearch";
import SearchList from '../../Components/SearchList';

const Search = () => {

  return (
    <div className={classNames(styles.searchPageWrapper)}>
       <SearchList/>
    </div>
   
  );
};
export default Search;
