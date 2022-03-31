import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Articles } from './interfaces/articles.interface';
import { CreateArticlesDTO } from './dto/articles.dto';
import { HttpService } from 'nestjs-http-promise'//'@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as config from "../config/config";

const nbPages = 20; 
@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Articles') public readonly articlesModel: Model<Articles>,
    private readonly httpService: HttpService
  ) {}

  // Get all articles
  async getArticles(): Promise<Articles[]> {

    const articles = await this.articlesModel.find();
   // console.log({ articles });
    return articles;
  }

  // Get a single article
  async getArticle(articleID: string): Promise<Articles> {
    const article = await this.articlesModel.findById(articleID);
    return article;
  }

  // Post a single article
  async createArticle(createArticleDTO: CreateArticlesDTO): Promise<Articles> {
    console.log(createArticleDTO);
    const newArticle = new this.articlesModel(createArticleDTO);
    return newArticle.save();
  }

  // Delete article
  async deleteArticle(articleID: String): Promise<Articles> {
    const deletedArticle = await this.articlesModel.findOneAndDelete(articleID);
    return deletedArticle;
  }

  // Put a single article
  async updateArticle(
    articleID: string,
    createArticleDTO: CreateArticlesDTO,
  ): Promise<Articles> {
    const updatedArticle = await this.articlesModel.findByIdAndUpdate(
      articleID,
      createArticleDTO,
      { new: true },
    );
    return updatedArticle;
  }

  updateDatabaseFromApiService(){

  }
  getArticlesServicePromise(page: Number, hits: Number): Promise<object>{
    return this.httpService.get(config.default.develoment.serviceUrl + `tags=story&query=nodejs&page=${page}&hitsPerPage=${hits}`) 
  }


 /* getArticlesFromService(): Observable<any> {
    return this.httpService
      .get(config.default.develoment.serviceUrl + `tags=story&query=nodejs&page=${page}&hitsPerPage=${hits}`)
      .pipe(
         map((response: AxiosResponse) => {
           this.validateIncomingData(response.data)
      
           return response.data;
         }),
      );
  }*/

  validateIncomingData(data){

    console.log({response:data })
    
  }

  async insertArticlesOnDatabase(): Promise<any>{
    const data = {};
    return data;
  }
}
