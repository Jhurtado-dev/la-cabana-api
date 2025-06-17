import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import RoleModel from './RoleModel.js';

const UserModel = db.define('tbl_users', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  clave: { type: DataTypes.STRING, allowNull: false, unique: true },
  status: { type: DataTypes.ENUM('activo', 'inactivo'), defaultValue: 'activo' },
  id_role: { type: DataTypes.INTEGER, allowNull: false },
  created_by: { type: DataTypes.STRING },
  modified_by: { type: DataTypes.STRING },
}, {
  tableName: 'tbl_users',
  createdAt: 'created_at',
  updatedAt: 'modified_at',
});

// Relaciones
UserModel.belongsTo(RoleModel, { foreignKey: 'id_role', as: 'role' });

export default UserModel;
