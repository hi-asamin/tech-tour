import {MigrationInterface, QueryRunner} from "typeorm";

export class book1606534781157 implements MigrationInterface {
    name = 'book1606534781157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `books` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `image` varchar(255) NULL, `genre` varchar(255) NULL, `chapters` varchar(255) NULL, `memo` text NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `books`");
    }

}
