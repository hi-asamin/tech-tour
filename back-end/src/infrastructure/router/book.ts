import { Connection, EntityManager } from 'typeorm';
import { Router, Request, Response } from 'express';
import { BookController } from '../../interface/controller/book-controller';

import { SqlConnection } from '../sqlhandler';

let bookController: BookController;

export const initBookRouter = async () => {
  const connection: Connection = await SqlConnection.getConnection();
  const manager: EntityManager = connection.manager;
  bookController = new BookController(manager);
}

export const router = Router()

router.get(
  '/',
  async (_, res: Response) => {
    const response = await bookController.findAll();
    res.status(200).json(response);
  }
);

router.get(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await bookController.findOne(Number(req.params.id));
    res.status(200).json(response);
  }
);

router.get(
  '/search',
  async (req: Request, res: Response) => {
    const response = await bookController.findOne(Number(req.params.id));
    res.status(200).json(response);
  }
);

router.post(
  '/',
  async (req: Request, res: Response) => {
    const response = await bookController.create(req.body);
    res.status(201).json(response);
  }
);

router.put(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await bookController.update(Number(req.params.id), req.body);
    res.status(201).json(response);
  }
);

router.delete(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await bookController.delete(Number(req.params.id));
    res.status(201).json(response);
  }
);