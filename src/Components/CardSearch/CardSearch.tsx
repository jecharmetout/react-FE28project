import React, { FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

//@ts-ignore
import styles from "./CardSearch.module.css";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import {
  ThumbDownIcon,
  ThumbUpIcon,
  Ellipsis,
  BookMarksIcon
} from "../../Assets/Icons";
import { CardSearchProps } from "./types";
import postsSelectors from "../../Redux/selectors/postsSelectors";
import { CardListType, LikeStatus } from "../../Utils";
import {
  setFavouritePost,
  setSearchedLikeStatus,
  setSelectedPost,
  setSinglePostModalVisible
} from "../../Redux/reducers/postsReducer";

const CardSearch: FC<CardSearchProps> = ({ post }) => {
  const { image, title, date, id, likeStatus } = post;
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const favouritePostsList: CardListType = useSelector(
    postsSelectors.getFavoritePosts
  );
  const currentPostIndex = favouritePostsList.findIndex(post => post.id === id);
  const isFavorite = currentPostIndex !== -1;

  const onAddFavourite = (event: any) => {
    event.stopPropagation();
    dispatch(setFavouritePost(post));
  };

  const onStatusClick = (status: LikeStatus) => {
    dispatch(setSearchedLikeStatus({ status, id }));
  };

  return (
    <div
      className={classNames(styles.cardWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.imgWrapper)}>
          <img src={image} alt="img" />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.date}>{date}</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.iconsThumb}>
          <div
            onClick={() => onStatusClick(LikeStatus.Like)}
            className={classNames(styles.likeStatusButton, {
              [styles.like]: likeStatus === LikeStatus.Like
            })}
          >
            <ThumbUpIcon /> {likeStatus === LikeStatus.Like && 1}
          </div>
          <div
            onClick={() => onStatusClick(LikeStatus.Dislike)}
            className={classNames(styles.likeStatusButton, {
              [styles.dislike]: likeStatus === LikeStatus.Dislike
            })}
          >
            <ThumbDownIcon /> {likeStatus === LikeStatus.Dislike && 1}
          </div>
        </div>
        <div className={styles.iconsOptions}>
          <div
            onClick={onAddFavourite}
            className={classNames({ [styles.favouritePost]: isFavorite })}
          >
            <BookMarksIcon />
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
