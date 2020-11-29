import { Router, Request, Response } from 'express';
import { BookController } from '../controller/book-controller';

const router = Router()
const bookController: BookController = new BookController();

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
    res.status(200).json(response);
  }
);

router.put(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await bookController.update(Number(req.params.id), req.body);
    res.status(200).json(response);
  }
);

router.delete(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await bookController.delete(Number(req.params.id));
    res.status(200).json(response);
  }
);

export default router