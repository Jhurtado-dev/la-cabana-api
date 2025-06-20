import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Extra1 = db.define('Extra1', {
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
  tableName: 'tbl_extra1',
  timestamps: false
});

export default Extra1;
