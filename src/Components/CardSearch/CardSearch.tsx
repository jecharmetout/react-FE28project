import React, { FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  setSelectedImgPost,
  setSelectedPost,
  setSingleImgModalVisible,
  setSinglePostModalVisible
} from "../../Redux/reducers/postsReducer";

const CardSearch: FC<CardSearchProps> = ({ post }) => {
  const { image, title, date, id, likeStatus } = post;
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const favouritePostsList: CardListType = useSelector(
    postsSelectors.getFavoritePosts
  );
  const currentPostIndex = favouritePostsList.findIndex(post => post.id === id);
  const isFavorite = currentPostIndex !== -1;

  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };
  const onAddFavourite = (event: any) => {
    event.stopPropagation();
    dispatch(setFavouritePost(post));
  };

  const onStatusClick = (status: LikeStatus) => {
    dispatch(setSearchedLikeStatus({ status, id }));
  };
  const onOpenPostModal = (event: any) => {
    event.stopPropagation();
    dispatch(setSelectedPost(post));
    dispatch(setSinglePostModalVisible(true));
  };
  const onOpenImgModal = (event: any) => {
    event.stopPropagation();
    dispatch(setSelectedImgPost(post));
    dispatch(setSingleImgModalVisible(true));
  };
  return (
    <div
      className={classNames(styles.cardWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={classNames(styles.contentWrapper)} onClick={onNavigateToPost}>
        <div className={classNames(styles.imgWrapper)} onClick={onOpenImgModal}>
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
          <div onClick={onOpenPostModal}>
            <Ellipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
