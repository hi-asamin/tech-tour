import { getCustomRepository } from 'typeorm';
import { Router, Request, Response } from 'express';
import { BookController } from '../controller/book-controller';
import { BookRepository } from '../interface/database/book-repository';
import { BookInteractor } from '../usecase/book-interactor';

let bookController: BookController;

export const initBookRouter = () => {
  const bookInteractor: BookInteractor = new BookInteractor(getCustomRepository(BookRepository));
  bookController = new BookController(bookInteractor);
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