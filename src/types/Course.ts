/** @format */

import { Level } from "./Level";
import { Teacher } from "./Teacher";

export type Course = {
  courseId: number;
  courseName: string;
  levels: Level[];
  videoCount: number;
  Teacher: Teacher;
};
