import { Article, ArticleRepository } from '../domain/article';

export class ArticleService {
  constructor(private articleRepository: ArticleRepository) {}

  createArticle = (title: string, body: string): Article => {
    const article: Article = {
      title,
      body,
      publish: true,
    };

    return {
      id: this.articleRepository.save(article),
      ...article,
    };
  };

  publishArticle = (id: string): boolean => {
    return this.articleRepository.update(id, { publish: true } as Article);
  };

  unpublishArticle = (id: string): boolean => {
    return this.articleRepository.update(id, { publish: false } as Article);
  };

  deleteArticle = (id: string): boolean => {
    return this.articleRepository.delete(id);
  };
}
