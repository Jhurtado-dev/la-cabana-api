import { DataTypes } from 'sequelize';
import db from '../config/db.js';

  const FoodModel = db.define('tbl_products', {
    id: {
      type: DataTypes.INTEGER(12),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_category: {
      type: DataTypes.INTEGER(12),
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
    tableName: 'tbl_products',
    timestamps: false
  });

 FoodModel.associate = (models) => {
  FoodModel.belongsTo(models.Category, {
    foreignKey: 'id_category',
    as: 'category'
  });
};


export default FoodModel;