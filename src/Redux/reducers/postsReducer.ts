import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardListType, CardPostType, GetPostsPayload, LikeStatus, SearchPostsPayload, SetSearchedPostsPayload, TabsNames } from "../../Utils";

type PostStateType = {
  selectedPost: CardPostType | null;
  selectedImgPost: CardPostType | null;
  singlePostModalVisible: boolean;
  singleImgModalVisible: boolean;
  activeTab: TabsNames;
  cardsList: CardListType;
  favouritePostsList: CardListType;
  singlePost: CardPostType | null;
  isPostLoading: boolean;
  isSearchPostsLoading: boolean;
  isBlogLoading: boolean;
  searchedPosts: CardListType;
  searchString: string;
  cardsCount: number;
  searchedPostsCount: number;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  selectedImgPost: null,
  singlePostModalVisible: false,
  singleImgModalVisible: false,
  activeTab: TabsNames.All,
  cardsList: [],
  favouritePostsList: [],
  singlePost: null,
  isPostLoading: false,
  isSearchPostsLoading: false,
  isBlogLoading: false,
  searchedPosts: [],
  searchString: "",
  cardsCount: 0,
  searchedPostsCount: 0,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedPost = action.payload;
      // state.singlePostModalVisible = true;
    },
    setSinglePostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singlePostModalVisible = action.payload;
    },
    setSelectedImgPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedImgPost = action.payload;
      // state.singleImgModalVisible  = true;
    },
    setSingleImgModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singleImgModalVisible = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload.map(card => {
        return {
          ...card,
          likeStatus: null
        };
      });
    },
    setFavouritePost: (state, action: PayloadAction<CardPostType>) => {
      const { id } = action.payload;
      const postIndex = state.favouritePostsList.findIndex(
        post => post.id === id
      );
      if (postIndex === -1) {
        state.favouritePostsList.push(action.payload);
      } else {
        state.favouritePostsList.splice(postIndex, 1);
      }
    },
    setBlogLoading: (state, action: PayloadAction<boolean>) => {
      state.isBlogLoading = action.payload;
    },
    setLikeStatus: (
      state,
      action: PayloadAction<{ status: LikeStatus; id: number }>
    ) => {
      const post = state.cardsList.find(c => c.id === action.payload.id);
      const postIndex = state.cardsList.findIndex(
        c => c.id === action.payload.id
      );
      //тут мы просто доп проверяем, нашел ли у нас find в массиве общих постов нужный нам
      if (post && postIndex !== -1) {
        //Если уже стоит лайк или дизлайк - убрать его и поставить null
        if (post.likeStatus === action.payload.status) {
          state.cardsList.splice(postIndex, 1, {
            ...post,
            likeStatus: null
          });
        } else {
          //Иначе дать ему актуальный статус
          state.cardsList.splice(postIndex, 1, {
            ...post,
            likeStatus: action.payload.status
          });
        }
      }
    },
    setSearchPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchPostsLoading = action.payload;
    },
    setSearchedPosts: (state, action: PayloadAction<SetSearchedPostsPayload>) => {
      const { isOverwrite, data } = action.payload;
      if (isOverwrite) {
        state.searchedPosts = data;
      } else {
        state.searchedPosts.push(...data);
      }
    },
    setSearchedLikeStatus: (
      state,
      action: PayloadAction<{ status: LikeStatus; id: number }>
    ) => {
      const post = state.searchedPosts.find(c => c.id === action.payload.id);
      const postIndex = state.searchedPosts.findIndex(
        c => c.id === action.payload.id
      );
      //тут мы просто доп проверяем, нашел ли у нас find в массиве общих постов нужный нам
      if (post && postIndex !== -1) {
        //Если уже стоит лайк или дизлайк - убрать его и поставить null
        if (post.likeStatus === action.payload.status) {
          state.searchedPosts.splice(postIndex, 1, {
            ...post,
            likeStatus: null
          });
        } else {
          //Иначе дать ему актуальный статус
          state.searchedPosts.splice(postIndex, 1, {
            ...post,
            likeStatus: action.payload.status
          });
        }
      }
    },
    setCardsCount: (state, action: PayloadAction<number>) => {
      state.cardsCount = action.payload;
    },
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedPostsCount = action.payload;
    },
    searchForPosts: (state, action: PayloadAction<SearchPostsPayload>) => {
      // !! state.searchString = action.payload; для по буквенного поиска
    },
  }
});

export default postsReducer.reducer;

export const {
  getPosts,
  setSelectedPost,
  setSelectedImgPost,
  setSinglePostModalVisible,
  setSingleImgModalVisible,
  setActiveTab,
  setCardsList,
  setFavouritePost,
  searchForPosts,
  setSearchPostsLoading,
  setLikeStatus,
  setSearchedLikeStatus,
  getSinglePost,
  setSinglePost,
  setSinglePostLoading,
  setBlogLoading,
  setSearchedPosts,
  setCardsCount,
  setSearchedPostsCount,
} = postsReducer.actions;
