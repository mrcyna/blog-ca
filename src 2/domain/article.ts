export interface Article {
  id?: number;
  title: string;
  body: string;
  publish: boolean;
}

export interface ArticleRepository {
  save: (data: any) => number;
  update: (id: string, data: Partial<Article>) => boolean;
  delete: (id: string) => boolean;
}
