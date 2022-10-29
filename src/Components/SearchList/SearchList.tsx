import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./SearchList.module.css";

import CardSearch from "../CardSearch";
import { CardListType } from "../../Utils";

import EmptyState from "../EmptyState";

type SearchListProps = {
  searchedPosts: CardListType;
};

const SearchList: FC<SearchListProps> = ({ searchedPosts }) => {
  return searchedPosts && searchedPosts.length > 0 ? (
    <div className={classNames(styles.searchListWrapper)}>
      <div className={classNames(styles.searchListCardWrapper)}>
        {searchedPosts.map((post, id) => {
          return <CardSearch post={post} key={post.id} />;
        })}
      </div>
    </div>
  ) : <EmptyState/>; 
};
export default SearchList;