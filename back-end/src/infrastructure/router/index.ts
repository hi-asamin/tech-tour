import { Express, Response } from 'express'
import { router as BookRouter, initBookRouter } from './book';

export function initRoutes(app: Express) {

  initBookRouter();

  // ユーザー管理機能用エンドポイント
  app.use('/api/v1/books', BookRouter)

  // 疎通確認用エンドポイント
  app.get('/api/v1/ping', (_, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))
  // 意図しないエンドポイントへのルーティング
  app.all('*', (_, res: Response) => res.status(400).send({
    message: 'Not Found...'
  }))
}