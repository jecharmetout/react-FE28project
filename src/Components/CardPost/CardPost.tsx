import React, { FC } from "react";
//@ts-ignore
import styles from "./CardPost.module.css";
import { CardSize } from "../CardList";
import classNames from "classnames";
import { ThumbDownIcon } from "../../Assets/Icons/ThumbDownIcon";
import { ThumbUpIcon } from "../../Assets/Icons/ThumbUpIcon";
import { Ellipsis } from "../../Assets/Icons/EllipsisIcon";
import { BookMarksIcon } from "../../Assets/Icons/BookMarksIcon";
import { CardPostProps } from "./types";

const CardPost: FC<CardPostProps> = ({ post, size }) => {
  const { image, text, date, title } = post;
  return (
    <>
      <div
        className={classNames(styles.post, {
          [styles.largePost]: size === CardSize.Large,
          [styles.mediumPost]: size === CardSize.Medium,
          [styles.smallPost]: size === CardSize.Small
        })}
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
export default CardPost;
