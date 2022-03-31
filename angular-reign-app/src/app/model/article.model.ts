export class Article {
    constructor(
      public  created_at: Date,
      public  title: string,
      public  url: string,
      public  author: string,
      public  points: number,
      public  story_text: string,
      public  comment_text: string,
      public  num_comments: number,
      public  story_id: number,
      public  story_title: string,
      public  story_url: string,
      public  parent_id: number,
      public  created_at_i: number
    ) {}
  }