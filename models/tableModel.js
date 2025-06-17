import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const TableModel = db.define('tbl_tables', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'disponible'
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: true
  },
  modified_by: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'tbl_tables',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

export default TableModel;
