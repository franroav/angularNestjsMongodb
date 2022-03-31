import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticlesService],
})
export class ArticleListComponent implements OnInit {
  public articles: any;
  public article: Article;
  public hits: number = 50;
  public page: number = 1;
  public pages = []; 
  currentProduct = null;
  currentIndex = -1;
  name = '';
  constructor(private articleService: ArticlesService) {
    this.article = new Article(new Date(), '', '', '', 1, '', '', 1, 1, '', '', 1, 1)
    this.readArticles();
    this.callServiceArticleUpdate();
  }
  ngOnInit(): void {}

  async callServiceArticleUpdate() {
    //console.log("page", this.page)
    if (localStorage.getItem('page') !== null) {
      this.page = Number(JSON.parse(localStorage.getItem('page')));
    }
    const promise = await this.articleService.updateDatabaseCollection(
      this.page,
      this.hits
    );
    console.log({promise});
    const data = JSON.parse(promise);
    const hits = data.hits;
    if (hits.length) {
     for (let hit of hits) {
       console.log(hit)
        this.articleService.create(hit).subscribe(
          (article) => {
            //const articleList = []
            console.log(article);
            return article;
          },
          (error) => {
            console.log(error.stack);
          }
        );
      }
      localStorage.removeItem('page');
      this.page++;
      localStorage.setItem('page', JSON.stringify(this.page));
      setTimeout(async () => {
        this.callServiceArticleUpdate();
      }, 1000);
    }
  }

  readArticles(): void {
    this.articleService.readAll().subscribe(
      (articles) => {
        const articleList = [];
        for (let article of articles) {
          const { title, author, created_at, _id, story_title, comment_text } = article;
          console.log(article)
          const comment = comment_text;  //comment_text === null ? '' : comment_text.replace(/<[^>]*>/g, '')
          articleList.push({
            title,
            author,
            created_at: article.created_at.split('T')[0],
            _id,
            story_title,
            comment_text: comment
          });
        }

        const countArt = Math.floor(articleList.length / 50);
        for (let x = 1; x <= countArt; x++){
          this.pages.push(x)
        }
        this.articles = articleList;
        // const newArrArticles = articles.map((article) => ({...article, created_at: article.created_at.split("T")[0]}))
        //console.log(newArrArticles);
        // this.articles = newArrArticles
      },
      (error) => {
        console.log(error.stack);
      }
    );
  }

  refresh(): void {
    this.readArticles();
    this.currentProduct = null;
    this.currentIndex = -1;
  }
  onDelete(article, i): void {
    //console.log({article, i})
    this.articleService.delete(article._id).subscribe(
      (articles) => {
        alert(JSON.stringify(articles));
        // this.articles = articles;
        //console.log(articles);
      },
      (error) => {
        console.log(error.stack);
      }
    );
  }

  onEdit(product, index): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }
  setCurrentProduct(page, index): void {
    console.log({page, index})
    console.log({articles: this.articles.length})
    let i = index
    const max = page * 50; 
    const min = (page - 1) * 50
    const diff = max - min;
    let count = 0;

    let arrData = this.articles.filter((art, i) => (i <= max && i >= diff))

    this.articles = arrData;
    //this.articles.length 
    //this.currentProduct = product;
    //this.currentIndex = index;
  }

  deleteAllArticles(): void {
    this.articleService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.readArticles();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
