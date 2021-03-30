"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class createTools1617109093210 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'tools',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'title',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'link',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'tags',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('tools');
  }

}

exports.default = createTools1617109093210;