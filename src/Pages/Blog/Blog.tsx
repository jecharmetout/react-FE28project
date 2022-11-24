import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import {
  DEFAULT_PAGE_NUMBER,
  PER_PAGE,
  SortOrder,
  TabsNames
} from "../../Utils";
import {
  getPosts,
  setActiveTab,
  getMyPostsList,
  setCardsList
} from "../../Redux/reducers/postsReducer";
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";
import processingAnimation from "../../lotties/processing.json";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import AuthSelectors from "../../Redux/selectors/authSelectors";

const Blog = () => {
  const { theme } = useThemeContext();

  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const isBlogLoading = useSelector(PostsSelectors.getBlogLoading);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);

  const tabs = useMemo(
    () => [
      {
        key: TabsNames.All,
        title: "All",
        disabled: false
      },
      {
        key: TabsNames.MyPosts,
        title: "My Posts",
        disabled: !isAuthenticated
      },
      {
        key: TabsNames.Favorites,
        title: "My favorites",
        disabled: !isAuthenticated
      },
      {
        key: TabsNames.Popular,
        title: "Popular",
        disabled: !isAuthenticated
      }
    ],
    [isAuthenticated]
  );

  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const [order, setOrder] = useState(SortOrder.Initial);

  const cardsCount = useSelector(PostsSelectors.getCardsCount);
  const pagesCount = Math.ceil(cardsCount / PER_PAGE);
  const isMyPosts = activeTab === TabsNames.MyPosts;

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
    dispatch(
      isMyPosts ? getMyPostsList() : getPosts({ offset, ordering: order })
    );
  }, [page, isMyPosts, order]);

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
          <div className={styles.tabsSelectWrapper}>
            <Tabs tabs={tabs} onClick={onTabClick} activeTab={activeTab} />
            {!isMyPosts && (
              <select
                value={order}
                onChange={(event: any) => setOrder(event.target.value)}
              >
                <option value={SortOrder.Initial}>Initial</option>
                <option value={SortOrder.Title}>Title</option>
                <option value={SortOrder.Date}>Date</option>
              </select>
            )}
          </div>

          <CardList cardList={cardsList} />

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
      {!isMyPosts && (
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
          previousClassName={classNames(styles.pageNumber, styles.arrowButton, {
            [styles.availableToClickButton]: page !== 1
          })}
          previousLinkClassName={styles.linkPage}
          nextLinkClassName={styles.linkPage}
        />
      )}
    </div>
  );
};
export default Blog;
