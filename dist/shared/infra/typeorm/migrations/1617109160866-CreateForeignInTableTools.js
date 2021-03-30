"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateForeignInTableTools1617109160866 {
  async up(queryRunner) {
    await queryRunner.addColumn('tools', new _typeorm.TableColumn({
      name: 'user_id',
      type: 'uuid',
      isNullable: true
    }));
    await queryRunner.createForeignKey('tools', new _typeorm.TableForeignKey({
      name: 'toolsUser',
      columnNames: ['user_id'],
      referencedTableName: 'users',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('tools', 'toolsUser');
    await queryRunner.dropColumn('tools', 'user_id');
  }

}

exports.default = CreateForeignInTableTools1617109160866;