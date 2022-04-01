import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from "../../model/article.model"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [ArticlesService]
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  currentArticle = null;
  public submitted = false;
  message = '';

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
    this.message = '';
    this.getArticle(this.route.snapshot.paramMap.get('id'));
  }

  getArticle(id): void {
    this.articleService.read(id)
      .subscribe(
        article => {
          this.currentArticle = article;
          this.article.author = this.currentArticle.author
          this.article.title = this.currentArticle.title
          this.article.story_title = this.currentArticle.story_title
          this.article.story_text = this.currentArticle.story_text
          this.article.comment_text = this.currentArticle.comment_text
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status): void {
    const data = {
      name: this.currentArticle.name,
      description: this.currentArticle.description,
      available: status
    };

    this.articleService.update(this.currentArticle.id, data)
      .subscribe(
        response => {
          this.currentArticle.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateArticle(): void {
    this.articleService.update(this.currentArticle.id, this.currentArticle)
      .subscribe(
        response => {
          console.log(response);
          alert('The article was updated!')
          this.message = 'The article was updated!';
          this.router.navigate(['/articles']);
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.articleService.delete(this.currentArticle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/articles']);
        },
        error => {
          console.log(error);
        });
  }

  newArticle(): void {
    this.submitted = false;
  }
  formClear(){
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
  }

}
