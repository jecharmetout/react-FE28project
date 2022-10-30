export default {
  getSelectedPost: (state: any) => state.postsReducer.selectedPost,
  getSelectedImgPost: (state: any) => state.postsReducer.selectedImgPost,
  getIsModalVisible: (state: any) => state.postsReducer.singlePostModalVisible,
  getIsImgVisible: (state: any) => state.postsReducer.singleImgModalVisible,
  getActiveTab: (state: any) => state.postsReducer.activeTab,
  getCardsList: (state: any) => state.postsReducer.cardsList,
  getFavoritePosts: (state: any) => state.postsReducer.favouritePostsList,
  getSinglePost: (state: any) => state.postsReducer.singlePost,
  getSinglePostLoading: (state: any) => state.postsReducer.isPostLoading,
  getSearchedPostsLoading: (state: any) =>
    state.postsReducer.isSearchPostsLoading,
  getBlogLoading: (state: any) =>
    state.postsReducer.isBlogLoading,
  getSearchedPosts: (state: any) => state.postsReducer.searchedPosts,
  getSearchString: (state: any) => state.postsReducer.searchString,
  getCardsCount: (state: any) => state.postsReducer.cardsCount,
};
