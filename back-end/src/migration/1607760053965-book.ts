import {MigrationInterface, QueryRunner} from "typeorm";

export class book1607760053965 implements MigrationInterface {
    name = 'book1607760053965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `t_chapter` (`id` int NOT NULL AUTO_INCREMENT, `book_id` int NOT NULL, `chapter` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `m_genre` (`id` int NOT NULL AUTO_INCREMENT, `genre` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `m_book` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `author` varchar(100) NOT NULL, `image` varchar(255) NULL, `memo` text NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `genreId` int NULL, UNIQUE INDEX `REL_3263722139e2c767f801a56313` (`genreId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `t_chapter` ADD CONSTRAINT `FK_a751fdc85c9757a73457fccd2a8` FOREIGN KEY (`book_id`) REFERENCES `m_book`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `m_book` ADD CONSTRAINT `FK_3263722139e2c767f801a56313c` FOREIGN KEY (`genreId`) REFERENCES `m_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `m_book` DROP FOREIGN KEY `FK_3263722139e2c767f801a56313c`");
        await queryRunner.query("ALTER TABLE `t_chapter` DROP FOREIGN KEY `FK_a751fdc85c9757a73457fccd2a8`");
        await queryRunner.query("DROP INDEX `REL_3263722139e2c767f801a56313` ON `m_book`");
        await queryRunner.query("DROP TABLE `m_book`");
        await queryRunner.query("DROP TABLE `m_genre`");
        await queryRunner.query("DROP TABLE `t_chapter`");
    }

}
