import { Document } from "mongoose";

export interface Articles extends Document {
    readonly  created_at: Date,
    readonly  title: string,
    readonly  url: string,
    readonly  author: string,
    readonly  points: number,
    readonly  story_text: null,
    readonly  comment_text: string,
    readonly  num_comments: number,
    readonly  story_id: number,
    readonly  story_title: string,
    readonly  story_url: string,
    readonly  parent_id: number,
    readonly  created_at_i: number
}



