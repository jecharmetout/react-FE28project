import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import ReactPaginate from "react-paginate";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import { DEFAULT_PAGE_NUMBER, PER_PAGE, TabsNames } from "../../Utils";
import {
  getPosts,
  setActiveTab,
  setCardsList
} from "../../Redux/reducers/postsReducer";
//@ts-ignore
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";
import processingAnimation from "../../lotties/processing.json";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const TABS_NAME = [
  {
    key: TabsNames.All,
    title: "All"
    //   disabled: true,
  },
  {
    key: TabsNames.Favorites,
    title: "My favorites"
    //   disabled: true,
  },
  {
    key: TabsNames.Popular,
    title: "Popular"
    //   disabled: true,
  }
];

const Blog = () => {
  const { theme } = useThemeContext();

  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const isBlogLoading = useSelector(PostsSelectors.getBlogLoading);
  const dispatch = useDispatch();

  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);

  const cardsCount = useSelector(PostsSelectors.getCardsCount);
  const pagesCount = Math.ceil(cardsCount / PER_PAGE);

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };

  // useEffect(() => {
  //   // dispatch(setCardsList(POST_MOCK));
  //   const offset = (page - 1) * PER_PAGE;

  //   dispatch(getPosts({ offset }));
  // }, [page]);
  useEffect(() => {
    const offset = (page - 1) * PER_PAGE;
    dispatch(getPosts({ offset }));
  }, [page]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  console.log(page);
  return (
    <div>
      {!isBlogLoading ? (
        <div
          className={classNames({
            [styles.darkContainer]: theme === Theme.Dark
          })}
        >
          <Title title={"Blog"} />
          <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab} />
          <CardList cardList={cardsList} />
          <ReactPaginate
            pageCount={pagesCount}
            onPageChange={onPageChange}
            containerClassName={styles.pagesContainer}
            pageClassName={styles.pageNumber}
            breakClassName={styles.pageNumber}
            breakLinkClassName={styles.linkPage}
            activeLinkClassName={styles.linkPage}
            pageLinkClassName={styles.linkPage}
            activeClassName={styles.activePageNumber}
            nextClassName={classNames(styles.pageNumber, styles.arrowButton, {
              [styles.availableToClickButton]: page !== pagesCount
            })}
            previousClassName={classNames(
              styles.pageNumber,
              styles.arrowButton,
              {
                [styles.availableToClickButton]: page !== 1
              }
            )}
            previousLinkClassName={styles.linkPage}
            nextLinkClassName={styles.linkPage}
          />
          <SinglePostModal />
          <SingleImgModal />
        </div>
      ) : (
        <div className={styles.lottieContainer}>
          <Lottie
            className={styles.lottieContainerAnimation}
            animationData={processingAnimation}
            loop={true}
          />
        </div>
      )}
    </div>
  );
};
export default Blog;
