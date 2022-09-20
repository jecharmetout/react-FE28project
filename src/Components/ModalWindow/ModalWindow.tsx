import React from "react";
import { useSelector } from "react-redux";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
//@ts-ignore
import styles from "./ModalWindow.module.css";
import classNames from "classnames";
import {
  ThumbDownIcon,
  ThumbUpIcon,
  Ellipsis,
  BookMarksIcon,
  CancelIcon
} from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const ModalWindow = ({ active, closeModal }: any) => {
  const { theme } = useThemeContext();
  const ModalPost = useSelector(PostsSelectors.getSelectedPost);

  const { image, text, date, title, id } = ModalPost;
  return (
    <>
      <div
        className={classNames(styles.modalPost, {
          [styles.modalActive]: active === true
        })}
        onClick={closeModal}
      >
        <div className={styles.cancelButton}><CancelIcon/></div>
        <div className={styles.textImgWrap}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.date}>{date}</div>
              <div className={styles.title}>{title}</div>
            </div>

            <div className={styles.textWrapper}>{text}</div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={image} alt="img" />
          </div>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.iconsThumb}>
            <ThumbUpIcon />
            <ThumbDownIcon />
          </div>
          <div className={styles.iconsOptions}>
            <BookMarksIcon />
            <Ellipsis />
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalWindow;
