import { MigrationInterface, QueryRunner } from "typeorm";

export class EditTodos1722455743455 implements MigrationInterface {
    name = 'EditTodos1722455743455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

}
