import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1639478963560 implements MigrationInterface {
  name = 'SeedDb1639478963560';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$fZany5yq09kG2rif54laP.n4isypQbv1JfcohOvt/il8UJ32q3xuW')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'coffee, dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'second article', 'Decond article description', 'second article body', 'coffee, dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
