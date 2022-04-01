import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from "../../model/article.model"

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [ArticlesService]
})
export class ArticleCreateComponent implements OnInit {
  public article: Article;
  public submitted = false;
  constructor(
   private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
  }

  createArticle(): void {
    try {
      this.articleService.create(this.article)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        this.formClear(); 
      
    } catch (error) {
      console.log("Error: ", error.stack)
    }

  }

  formClear(){
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
  }

}
