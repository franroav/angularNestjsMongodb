import { ApiProperty } from "@nestjs/swagger";

class CreateArticlesDTO {
    @ApiProperty()
    readonly _id?: string;
    @ApiProperty()
    readonly  created_at: Date;
    @ApiProperty()
    readonly  title: string;
    @ApiProperty()
    readonly  url: string;
    @ApiProperty()
    readonly  author: string;
    @ApiProperty()
    readonly  points: number;
    @ApiProperty()
    readonly  story_text: string;
    @ApiProperty()
    readonly  comment_text: string;
    @ApiProperty()
    readonly  num_comments: number;
    @ApiProperty()
    readonly  story_id: number;
    @ApiProperty()
    readonly  story_title: string;
    @ApiProperty()
    readonly  story_url: string;
    @ApiProperty()
    readonly  parent_id: number;
    @ApiProperty()
    readonly  created_at_i: number;

    constructor(_id: string, created_at: Date, title: string, url: string, author: string, points: number, story_text: string, comment_text: string, num_comments: number, story_id: number, story_title: string, story_url: string, parent_id: number, created_at_i: number ) {
        this._id = _id;
        this.created_at = created_at;
        this.title = title;
        this.url = url;
        this.author = author;
        this.points = points;
        this.story_text = story_text;
        this.comment_text = comment_text; 
        this.num_comments = num_comments;
        this.story_id = story_id;
        this.story_title = story_title; 
        this.story_url = story_url;
        this.parent_id = parent_id; 
        this.created_at_i = created_at_i; 
    }
}

class getArticleById {
    _id: string;
    readonly  created_at: Date;
    readonly  title: string;
    readonly  url: string;
    readonly  author: string;
    readonly  points: number;
    readonly  story_text: null;
    readonly  comment_text: string;
    readonly  num_comments: number;
    readonly  story_id: number;
    readonly  story_title: string;
    readonly  story_url: string;
    readonly  parent_id: number;
    readonly  created_at_i: number
}


export {
    CreateArticlesDTO,
    getArticleById
}