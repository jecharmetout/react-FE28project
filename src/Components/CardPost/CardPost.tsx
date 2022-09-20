import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//@ts-ignore
import styles from "./CardPost.module.css";
import { CardSize } from "../CardList";
import classNames from "classnames";
import {
  ThumbDownIcon,
  ThumbUpIcon,
  Ellipsis,
  BookMarksIcon
} from "../../Assets/Icons";
import { CardPostProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { setSelectedPost } from "../../Redux/reducers/postsReducer";
import ModalWindow from '../ModalWindow'

const CardPost: FC<CardPostProps> = ({ post, size }) => {
  const { image, text, date, title, id } = post;
  
  const { theme } = useThemeContext();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };

  const [modalActive, setModalActive] = useState(false);

  const onOpenPostModal = (event: any) => {

    event.stopPropagation();
    dispatch(setSelectedPost(post));
    // setModalActive(true);


  };
  // const closeModal = (event: any) => {
  //   setModalActive(false);
  //   event.stopPropagation();
  //   dispatch(setSelectedPost(null));
  // };

  return (
    <>

      <div
        className={classNames(styles.post, {
          [styles.largePost]: size === CardSize.Large,
          [styles.mediumPost]: size === CardSize.Medium,
          [styles.smallPost]: size === CardSize.Small,
          [styles.darkContainer]: theme === Theme.Dark
        })}
        onClick={onNavigateToPost}
      >
        <div className={styles.textImgWrap}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.date}>{date}</div>
              <div className={styles.title}>{title}</div>
            </div>
            {size === CardSize.Large && (
              <div className={styles.textWrapper}>{text}</div>
            )}
          </div>
          <div className={styles.imgWrapper}>
            <img src={image} alt="img" />
          </div>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.iconsThumb}>
            <div>
              <ThumbUpIcon />
            </div>
            <div>
              <ThumbDownIcon />
            </div>
          </div>
          <div className={styles.iconsOptions}>
            <div>
              {" "}
              <BookMarksIcon />
            </div>
            <div onClick={onOpenPostModal}>
              <Ellipsis />
            </div>
          </div>
        </div>
      </div>
        

    </>
  );
};
export default CardPost;
