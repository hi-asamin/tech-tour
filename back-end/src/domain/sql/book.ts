export const findAllQuery = `select
  b.id
  , b.title
  , b.author
  , b.image
  , g.genre
  , c.chapter
  , b.memo
from m_book b
left join m_genre g on g.id = b.genre_id
left join t_chapter c on c.book_id = b.id;`;