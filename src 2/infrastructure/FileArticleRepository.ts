import { Article, ArticleRepository } from '../domain/article';

export class FileArticleRepository implements ArticleRepository {
  save(data: any): number {
    console.log('FileArticleRepository.save', JSON.stringify(data));
    return new Date().getTime();
  }

  update(id: string, data: Partial<Article>): boolean {
    console.log('FileArticleRepository.update', id, JSON.stringify(data));
    return true;
  }

  delete(id: string): boolean {
    console.log('FileArticleRepository.delete', id);
    return false;
  }
}
