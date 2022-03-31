import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './schemas/articles.schema';
import { HttpModule } from 'nestjs-http-promise'//'@nestjs/axios';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{name: 'Articles', schema: ArticleSchema}])],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticlesService]
})
export class ArticlesModule {}
