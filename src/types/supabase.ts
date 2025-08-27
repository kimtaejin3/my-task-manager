//TODO: import 문 리팩토링
import type { Board } from "./board";
import type { Task } from "./task";

export interface Database {
  public: {
    Tables: {
      board: {
        Row: Board & {
          created_at: string;
        };
        Insert: Omit<Board, "id">;
        Update: Partial<Board>;
      };
      task: {
        Row: Task & {
          created_at: string;
        };
        Insert: Omit<Task, "id">;
        Update: Partial<Task>;
      };
    };
  };
}
