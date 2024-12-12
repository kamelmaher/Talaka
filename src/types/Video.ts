import { User } from "./User";

export type Video = {
  id: number;
  title: string;
  time: number;
  img: string;
  desc: string;
  level: number;
  comments: Comment[];
};

type Comment = {
  user: User;
  text: string;
  videoid: number;
};
