import { Article, ArticleRepository } from '../domain/article';

export class MySqlArticleRepository implements ArticleRepository {
  save(data: any): number {
    console.log('MySqlArticleRepository.save', JSON.stringify(data));
    return new Date().getTime();
  }

  update(id: string, data: Partial<Article>): boolean {
    console.log('MySqlArticleRepository.update', id, JSON.stringify(data));
    return true;
  }

  delete(id: string): boolean {
    console.log('MySqlArticleRepository.delete', id);
    return false;
  }
}
