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
  /* {
    name: '',
    description: '',
    available: false
  };*/
  public submitted = false;
  constructor(
   private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
  
    this.readData(); 
  }

  async readData(){
    const read = this.articleService.readAll();
    console.log(read)
  }

  createArticle(): void {

    console.log(this.article); 


    /*const data = {
      name: this.product.name,
      description: this.product.description
    };*/

    /*this.articleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });*/

        this.formClear(); 
  }

  newArticle(): void {
    this.submitted = false;
   /*this.product = {
      name: '',
      description: '',
      available: false
    };*/
  }
  formClear(){
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
  }

}
