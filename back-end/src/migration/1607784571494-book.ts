import {MigrationInterface, QueryRunner} from "typeorm";

export class book1607784571494 implements MigrationInterface {
    name = 'book1607784571494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `t_chapter` DROP FOREIGN KEY `FK_a751fdc85c9757a73457fccd2a8`");
        await queryRunner.query("ALTER TABLE `m_book` DROP FOREIGN KEY `FK_2e7daa341143f6f05b8fafaee15`");
        await queryRunner.query("ALTER TABLE `t_chapter` ADD CONSTRAINT `FK_a751fdc85c9757a73457fccd2a8` FOREIGN KEY (`book_id`) REFERENCES `m_book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `m_book` ADD CONSTRAINT `FK_2e7daa341143f6f05b8fafaee15` FOREIGN KEY (`genre_id`) REFERENCES `m_genre`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `m_book` DROP FOREIGN KEY `FK_2e7daa341143f6f05b8fafaee15`");
        await queryRunner.query("ALTER TABLE `t_chapter` DROP FOREIGN KEY `FK_a751fdc85c9757a73457fccd2a8`");
        await queryRunner.query("ALTER TABLE `m_book` ADD CONSTRAINT `FK_2e7daa341143f6f05b8fafaee15` FOREIGN KEY (`genre_id`) REFERENCES `m_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `t_chapter` ADD CONSTRAINT `FK_a751fdc85c9757a73457fccd2a8` FOREIGN KEY (`book_id`) REFERENCES `m_book`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
