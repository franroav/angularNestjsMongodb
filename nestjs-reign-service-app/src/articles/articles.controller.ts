import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ArticlesService } from "./articles.service";
import { CreateArticlesDTO } from "./dto/articles.dto";
@Controller('articles')
export class ArticlesController {


 constructor(private articleService: ArticlesService) { }

    // Add Article: /article/create
    @Post('/create')
    async createArticles(@Body() createArticleDTO: CreateArticlesDTO) {
        console.log({createArticleDTO})
        const article = await this.articleService.createArticle(createArticleDTO);
        return article; 
       /* return res.status(HttpStatus.OK).json({
            message: 'Article Successfully Created',
            article
        });*/
    }

    // Get Article /article
    // @Get('/list')
    @Get('/')
    async getArticles() {
        const articles = await this.articleService.getArticles();
        return articles; 
       // return res.status(HttpStatus.OK).json(articles);
    }

    // GET single Article: /article/5c9d46100e2e5c44c444b2d1
    @Get('/page=:page&hits=:hits')
    async refreshDatabase(@Res() res, @Param('page') page, @Param('hits') hits) {
        const article = await this.articleService.getArticlesServicePromise(page, hits);
        const articleData = await this.simpleStringify(article);
        if (!article) throw new NotFoundException('Article does not exist!');
        return res.status(HttpStatus.OK).json(articleData);
    }

    // GET single Article: /article/5c9d46100e2e5c44c444b2d1
    @Get('/:articleID')
    async getArticle(@Param('articleID') articleID) {
        const article = await this.articleService.getArticle(articleID);
        return article; 
       /* if (!article) throw new NotFoundException('Article does not exist!');
        return res.status(HttpStatus.OK).json(article);*/
    }

    // Delete Article: /delete?articleID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteArticle(@Res() res, @Query('articleID') articleID) {
        const articleDeleted = await this.articleService.deleteArticle(articleID);
        if (!articleDeleted) throw new NotFoundException('Article does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Article Deleted Successfully',
            articleDeleted
        });
    }

    // Update Article: /update?articleID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateArticle(@Res() res, @Body() createArticleDTO: CreateArticlesDTO, @Query('articleID') articleID) {
        const updatedArticle = await this.articleService.updateArticle(articleID, createArticleDTO);
        if (!updatedArticle) throw new NotFoundException('Article does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Article Updated Successfully',
            updatedArticle 
        });
    }

    async simpleStringify (object){
        return JSON.stringify(object.data); // returns cleaned up JSON
    };
}
