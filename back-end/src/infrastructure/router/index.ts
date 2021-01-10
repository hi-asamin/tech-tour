import { Express, Response } from 'express'
import { router as BookRouter, initBookRouter } from './book';
import { router as GenreRouter, initGenreRouter } from './genre';

export function initRoutes(app: Express) {

  initBookRouter();
  initGenreRouter();

  // ユーザー管理機能用エンドポイント
  app.use('/api/v1/books', BookRouter);
  // ユーザー管理機能用エンドポイント
  app.use('/api/v1/genres', GenreRouter);

  // 疎通確認用エンドポイント
  app.get('/api/v1/ping', (_, res: Response) => res.status(200).send({
    message: 'server is running!'
  }));
  // 意図しないエンドポイントへのルーティング
  app.all('*', (_, res: Response) => res.status(400).send({
    message: 'Not Found...'
  }));
}