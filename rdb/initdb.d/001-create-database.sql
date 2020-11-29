DROP DATABASE IF EXISTS `app_db`;
CREATE DATABASE `app_db` default character set utf8mb4;
GRANT ALL ON fx_datastore.* TO 'apluser'@'%' IDENTIFIED BY 'apluser';
FLUSH PRIVILEGES;
