import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { CreateArticlesDTO, getArticleById } from "./dto/articles.dto";

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

class ApiServiceMock {
  createArticles(dto: any) {
     return [];
  }
  getArticles(){
    return []; 
  }

  getArticle(id: string) {
    return {
      _id: '62411428aa4e13a837f00235',
      createdAt: '2022-03-28T01:49:28.685Z',
      __v: 0,
      created_at: '2022-03-30T15:02:27.101Z',
    };
  }
}

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {

    const ApiServiceProvider = {
      provide: ArticlesService,
      useClass: ApiServiceMock,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService, ApiServiceProvider],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('createArticles', () => {
    const dto = new CreateArticlesDTO(sample._id, new Date(), sample.title, sample.url, sample.author, sample.points, sample.story_text, sample.comment_text, sample.num_comments, sample.story_id, sample.story_title, sample.story_url, sample.parent_id, sample.created_at_i)
    expect(service.createArticle).not.toBe(null);
  });

  it("calling getArticle method", () => {
    const dto = new getArticleById();
    dto._id = '62411428aa4e13a837f00235';
    //controller.getArticle(dto);
    expect(service.getArticle(dto._id)).not.toBe(null);
  })
  it("calling getArticle method check property _id", () => {
    const dto = new getArticleById();
    dto._id = '62411428aa4e13a837f00235';
    //controller.getArticle(dto);
    expect(service.getArticle(dto._id)).toHaveProperty('_id');
  })

 /* it('should call deleteNote method with expected param', async () => {
		const deleteNoteSpy = jest.spyOn(noteService, 'deleteNote');
		const noteId = 'noteId';
		noteService.deleteNote(noteId);
		expect(deleteNoteSpy).toHaveBeenCalledWith(noteId);
	});
  it('should call saveNote method with expected params', async () => {
    const dto = new CreateArticlesDTO();
    const createArticleSpy = jest.spyOn(service, 'createArticle');
    service.createArticle(dto);
    expect(createArticleSpy).toHaveBeenCalledWith(dto);
  });*/

  /*it('should call findOneNote method with expected param', async () => {
    const findOneNoteSpy = jest.spyOn(service, 'getArticle');
    const findOneOptions = new getArticleById();
    findOneOptions._id = "62411428aa4e13a837f00235"
    service.getArticle(findOneOptions._id);
    expect(findOneNoteSpy).toHaveBeenCalledWith({"_id": "62411428aa4e13a837f00235"});
  });*/

});
