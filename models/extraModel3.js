import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Extra3 = db.define('Extra3', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  unit: DataTypes.STRING,
  id_category: DataTypes.INTEGER,
  status: DataTypes.ENUM('activo', 'inactivo'),
  created_at: DataTypes.DATE,
  modified_at: DataTypes.DATE,
  created_by: DataTypes.STRING,
  modified_by: DataTypes.STRING,
}, {
  tableName: 'tbl_extra3',
  timestamps: false
});

export default Extra3;
