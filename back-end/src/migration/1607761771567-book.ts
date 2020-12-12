import {MigrationInterface, QueryRunner} from "typeorm";

export class book1607761771567 implements MigrationInterface {
    name = 'book1607761771567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `m_book` DROP FOREIGN KEY `FK_3263722139e2c767f801a56313c`");
        await queryRunner.query("DROP INDEX `REL_3263722139e2c767f801a56313` ON `m_book`");
        await queryRunner.query("ALTER TABLE `m_book` CHANGE `genreId` `genre_id` int NULL");
        await queryRunner.query("ALTER TABLE `m_book` CHANGE `genre_id` `genre_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `m_book` ADD CONSTRAINT `FK_2e7daa341143f6f05b8fafaee15` FOREIGN KEY (`genre_id`) REFERENCES `m_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `m_book` DROP FOREIGN KEY `FK_2e7daa341143f6f05b8fafaee15`");
        await queryRunner.query("ALTER TABLE `m_book` CHANGE `genre_id` `genre_id` int NULL");
        await queryRunner.query("ALTER TABLE `m_book` CHANGE `genre_id` `genreId` int NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3263722139e2c767f801a56313` ON `m_book` (`genreId`)");
        await queryRunner.query("ALTER TABLE `m_book` ADD CONSTRAINT `FK_3263722139e2c767f801a56313c` FOREIGN KEY (`genreId`) REFERENCES `m_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
