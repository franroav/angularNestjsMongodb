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
        try{
            const article = await this.articleService.createArticle(createArticleDTO);
            return ({ internalCode: 200, message: 'ok', payload: article })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    // Get Article /article
    // @Get('/list')
    @Get('/')
    async getArticles() {
        try{
            const article = await this.articleService.getArticles();
            return ({ internalCode: 200, message: 'ok', payload: article })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    // GET single Article: /article/5c9d46100e2e5c44c444b2d1
    @Get('/page=:page&hits=:hits')
    async refreshDatabase(@Res() res, @Param('page') page, @Param('hits') hits) {
        try{
            const article = await this.articleService.getArticlesServicePromise(page, hits);
            const articleData = await this.simpleStringify(article);
            return ({ internalCode: 200, message: 'ok', payload: articleData })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    // GET single Article: /article/5c9d46100e2e5c44c444b2d1
    @Get('/:articleID')
    async getArticle(@Param('articleID') articleID) {
        try{
            const article = await this.articleService.getArticle(articleID);
            if (!article) throw new NotFoundException('Article does not exist!');
            return ({ internalCode: 200, message: 'ok', payload: article })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    // Delete Article: /delete?articleID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteArticle(@Res() res, @Query('articleID') articleID) {
        try{
            const articleDeleted = await this.articleService.deleteArticle(articleID);
            if (!articleDeleted) throw new NotFoundException('Article does not exist!');
            return ({ internalCode: 200, message: 'ok', payload: articleDeleted })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    // Update Article: /update?articleID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateArticle(@Res() res, @Body() createArticleDTO: CreateArticlesDTO, @Query('articleID') articleID) {
        try{
            const updatedArticle = await this.articleService.updateArticle(articleID, createArticleDTO);
            if (!updatedArticle) throw new NotFoundException('Article does not exist!');
            return ({ internalCode: 200, message: 'ok', payload: updatedArticle })
        }
        catch(error){
            console.log("Error: " + error.stack);
            return ({ internalCode: 500, message: error.message })
        }
    }

    async simpleStringify (object){
        return JSON.stringify(object.data); // returns cleaned up JSON
    };
}
