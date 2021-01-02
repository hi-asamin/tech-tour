import { dispatch } from 'store';
import { Genre } from 'domain/api/models/genre';
import { findAll, create } from 'domain/api/service/genre';
import { GenreAction } from 'actions/genre';

export const getGenreList = async () => {
  try {
    const genres: Genre[] = await findAll();
    dispatch(GenreAction.updateGenreStateAction({ genres }));
  } catch (e) {
    console.error('failed to get genre', e);
  }
}

export const postGenre = async (genre: string) => {
  try {
    await create(genre);
  } catch (e) {
    console.error('failed to create genre', e);
  }
}