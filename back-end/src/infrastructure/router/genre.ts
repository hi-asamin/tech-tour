import { Connection, EntityManager } from 'typeorm';
import { Router, Request, Response } from 'express';
import { GenreController } from '../../interface/controller/genre.controller';

import { SqlConnection } from '../sqlhandler';

let genreController: GenreController;

export const initGenreRouter = async () => {
  const connection: Connection = await SqlConnection.getConnection();
  const manager: EntityManager = connection.manager;
  genreController = new GenreController(manager);
}

export const router = Router()

router.get(
  '/',
  async (_, res: Response) => {
    const response = await genreController.findAll();
    res.status(200).json(response);
  }
);

router.get(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await genreController.findOne(Number(req.params.id));
    res.status(200).json(response);
  }
);

router.get(
  '/search',
  async (req: Request, res: Response) => {
    const response = await genreController.findOne(Number(req.params.id));
    res.status(200).json(response);
  }
);

router.post(
  '/',
  async (req: Request, res: Response) => {
    const response = await genreController.create(req.body);
    res.status(201).json(response);
  }
);

router.put(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await genreController.update(Number(req.params.id), req.body);
    res.status(200).json(response);
  }
);

router.delete(
  '/:id',
  async (req: Request, res: Response) => {
    const response = await genreController.delete(Number(req.params.id));
    res.status(200).json(response);
  }
);