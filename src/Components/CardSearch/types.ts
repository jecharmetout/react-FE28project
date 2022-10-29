import { LikeStatus } from "../../Utils";

export type CardSearchType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  likeStatus?: LikeStatus | null;
};

export type CardSearchProps = {
  post: CardSearchType;
};
