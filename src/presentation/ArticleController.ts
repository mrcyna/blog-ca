import { MySqlArticleRepository } from '../infrastructure/MySqlArticleRepository';
import { ArticleService } from '../application/article';
import { FileArticleRepository } from '../infrastructure/FileArticleRepository';

export class ArticleController {
  private articleService: ArticleService;
  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  create(req: any, res: any) {
    const { title, body } = req.body;
    const article = this.articleService.createArticle(title, body);

    res.json({
      code: 'success',
      message: 'article has been created successfully!',
      article,
    });
  }

  publish(req: any, res: any) {
    const id = req.params.id;
    this.articleService.publishArticle(id);

    res.json({
      code: 'success',
      message: 'article has been updated successfully!',
    });
  }

  unpublish(req: any, res: any) {
    const id = req.params.id;
    this.articleService.unpublishArticle(id);

    res.json({
      code: 'success',
      message: 'article has been updated successfully!',
    });
  }

  delete(req: any, res: any) {
    const id = req.params.id;
    this.articleService.deleteArticle(id);

    res.json({
      code: 'success',
      message: 'article has been deleted successfully!',
    });
  }

  static instantiate() {
    const articleRepository = new FileArticleRepository();
    const articleService = new ArticleService(articleRepository);

    return new ArticleController(articleService);
  }
}
