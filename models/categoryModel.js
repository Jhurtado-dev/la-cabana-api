import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const CategoryModel = db.define('tbl_categories', {
  id: {
    type: DataTypes.INTEGER(12),
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('activo', 'inactivo'),
    defaultValue: 'activo'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  modified_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  created_by: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  modified_by: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'tbl_categories',
  timestamps: false
});

export default CategoryModel;
