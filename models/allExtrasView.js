import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const allExtrasView = db.define('allExtrasView', {
  source: DataTypes.STRING,
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  unit: DataTypes.STRING,
  id_category: DataTypes.INTEGER,
  status: DataTypes.ENUM('activo', 'inactivo'),
}, {
  tableName: 'vw_all_extras',
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

export default allExtrasView;
