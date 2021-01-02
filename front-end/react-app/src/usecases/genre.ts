import { dispatch } from 'store';
import { Genre, GenreRequest } from 'domain/api/models/genre';
import { findAll, findOne, create, update, deleteById } from 'domain/api/service/genre';
import { GenreAction } from 'actions/genre';

export const getGenreList = async () => {
  try {
    const genres: Genre[] = await findAll();
    dispatch(GenreAction.updateGenreStateAction({ genres }));
  } catch (e) {
    console.error('failed to get genre', e);
  }
}

export async function getGenre(id: number): Promise<Genre> {
  return await findOne(id);
}

export const postGenre = async (genre: GenreRequest) => {
  try {
    await create(genre);
  } catch (e) {
    console.error('failed to create genre', e);
  }
}

export const putGenre = async (id: number, genre: GenreRequest) => {
  try {
    await update(id, genre);
  } catch (e) {
    console.error('failed to update genre', e);
  }
}

export const deleteGenre = async (id: number) => {
  try {
    await deleteById(id);
  } catch (e) {
    console.error('failed to delete genre', e);
  }
}