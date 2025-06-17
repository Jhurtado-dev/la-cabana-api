import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const RoleModel = db.define('tbl_roles', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('activo', 'inactivo'), defaultValue: 'activo' },
  created_by: { type: DataTypes.STRING },
  modified_by: { type: DataTypes.STRING },
}, {
  tableName: 'tbl_roles',
  createdAt: 'created_at',
  updatedAt: 'modified_at',
});

export default RoleModel;
