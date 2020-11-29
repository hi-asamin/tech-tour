---- databse ----
USE app_db;

---- drop ----
DROP TABLE IF EXISTS `books`;
DROP TABLE IF EXISTS `chapters`;

---- create ----
create table IF not exists `books`
(
  `id` int not null auto_increment comment 'ID',
  `title` varchar(255) comment 'タイトル',
  `genre_id` int comment 'ジャンルID',
  `memo` varchar(255) comment 'メモ',
  `create_at` timestamp not null default current_timestamp comment '登録日時',
  `update_at` timestamp not null default current_timestamp on update current_timestamp comment '更新日時',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

create table IF not exists `chapters`
(
  `id` int not null auto_increment comment 'チャプターID',
  `book_id` int UNIQUE comment '本ID',
  `chapter` varchar(255) comment '目次',
  `create_at` timestamp not null default current_timestamp comment '登録日時',
  `update_at` timestamp not null default current_timestamp on update current_timestamp comment '更新日時',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

create table IF not exists `genres`
(
  `id` int not null auto_increment comment 'ジャンルID',
  `genre` varchar(255) UNIQUE comment 'ジャンル',
  `create_at` timestamp not null default current_timestamp comment '登録日時',
  `update_at` timestamp not null default current_timestamp on update current_timestamp comment '更新日時',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;