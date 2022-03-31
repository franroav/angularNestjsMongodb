import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { CreateArticlesDTO, getArticleById } from "./dto/articles.dto";
const httpMocks = require('node-mocks-http')
import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
} from '@nestjs/common';

const sample = {
  _id: "sdds",
  created_at: "2022-03-27T17:48:38.000Z",
  title: null,
  url: null,
  author: "zw123456",
  points: null,
  story_text: null,
  comment_text: "Yes, each cell interferes with the next, that is call co-channel interference. \nThat is a major factor that limits the capacity of a cellular network.\nThere are a number of approaches used to manage that, carriers spend a lot of money and employ many engineers designing around that.<p>SON (Self Optimizing Network) is the latest tech that is being deployed on 4G and 5G to help combat that.<p>BTW, this is one of the reasons you can get much higher tputs with mm-wave because the beams do not propagate very far which makes keeping co-chan down, that&#x27;s the good news, the bad news is it doesn&#x27;t propagate well, which means you need way more nodes.",
  num_comments: null,
  story_id: 30821504,
  story_title: "5G Skeptic",
  story_url: "https://www.tbray.org/ongoing/When/202x/2022/03/26/Is-5G-BS",
  parent_id: 30822198,
  created_at_i: 1648403318,
  __v: 0
}

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let spyService: ArticlesService;

  const mockArticleService = {
    createArticles: jest.fn().mockImplementation((createArticleDTO: CreateArticlesDTO) => {
      return {
        id: 1,
        ...createArticleDTO
      }
    })
  }
  const mockUserService = {
   
  };

  beforeEach(async () => {
    const ApiServiceProvider: any = {
      provide: ArticlesService,
      useFactory: () => ({
        createArticles: jest.fn(() => []),
        getArticles: jest.fn(() => []),
        getArticle: jest.fn(() => {}),
        })
      }
  const module: TestingModule = await Test.createTestingModule({
    controllers: [ArticlesController],
    providers: [ArticlesService, ApiServiceProvider],
  }).compile(); 
    
    controller = module.get<ArticlesController>(ArticlesController);  
    spyService = module.get<ArticlesService>(ArticlesService);


  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('createArticles', () => {
    const dto = new CreateArticlesDTO(sample._id, new Date(), sample.title, sample.url, sample.author, sample.points, sample.story_text, sample.comment_text, sample.num_comments, sample.story_id, sample.story_title, sample.story_url, sample.parent_id, sample.created_at_i)
    expect(controller.createArticles(dto)).not.toBe(null);
  });

  /*it("calling saveNotes method", () => {
    const dto = new CreateArticlesDTO()
    controller.createArticles(dto);
    expect(spyService.createArticle).toHaveBeenCalled();
    expect(spyService.createArticle).toHaveBeenCalledWith(dto);
  })*/

  it("calling getAllArticles method", () => {
    controller.getArticles();
    expect(spyService.getArticles).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new getArticleById();
    dto._id = '62411428aa4e13a837f00235';
    controller.getArticle(dto);
    expect(spyService.getArticle).toHaveBeenCalled();
  })

});


/*describe('ArticlesController', () => {
  
  let controller: ArticlesController;
  let articleService: ArticlesService;

  const mockUserService = {
    getArticle: jest.fn(dto => (dto))
  };

  beforeEach(async () => {
    const ApiServiceProvider: any = {
      provide: articleService,
      useFactory: () => ({
        createArticles: jest.fn(() => []),
        getArticles: jest.fn(() => []),
        getArticle: jest.fn(() => {}),
        })
      }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService, ApiServiceProvider],
    }).compile();
    articleService = app.get<ArticlesService>(ArticlesService);
    controller = app.get<ArticlesController>(ArticlesController);

  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('createArticles', () => {
    const dto = new CreateArticlesDTO()
    expect(articleService.createArticle(dto)).not.toBe(null);
  });

  it('createArticles', () => {
    const dto = new CreateArticlesDTO()
    articleService.createArticle(dto)
    expect(articleService.createArticle).toHaveBeenCalled();
  });
  it('getArticles', () => {
    expect(controller.getArticles(Res)).not.toBe(null);
  });
  
 
});*/




    /*const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService],
    }).compile();*/

      /*
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService],
    })
      .overrideProvider(ArticlesService)
      .useValue(mockUserService)
      .compile(); 
      
    articleService = module.get<ArticlesService>(ArticlesService);
    controller = module.get<ArticlesController>(ArticlesController);*/







 /*describe('getArticles', () => {
    it('should get only one article', async () => {
      const sample : any = [{
        _id: '62411428aa4e13a837f00235',
        createdAt: '2022-03-28T01:49:28.685Z',
        __v: 0,
        created_at: '2022-03-30T15:02:27.101Z',
      }]
       // Creating the mock method
      // The method structure is the same as the actual method structure.
      const findAllByQueryParamsMock = async (query: any) => findAllByQueryParamsMock;

      jest.spyOn(articleService, 'getArticles').mockImplementation(() => sample);
      expect( await controller.getArticles()).toBe(sample)
    });
  });*/

  /*
    describe('ArticlesController', () => {
    it('should get only one article', async () => {
      const sample : any = {
        _id: '62411428aa4e13a837f00235',
        createdAt: '2022-03-28T01:49:28.685Z',
        __v: 0,
        created_at: '2022-03-30T15:02:27.101Z',
      }
      jest.spyOn(articleService, 'getArticle').mockImplementation(() => sample);
      expect( await controller.getArticle('62411428aa4e13a837f00235')).toBe(sample)
    });
  });
  */