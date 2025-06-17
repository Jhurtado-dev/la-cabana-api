import FoodModel from "../models/foodModel.js";



  export const getAll = async (req, res) => {
    try {
      const products = await FoodModel.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  }

 export const getById = async (req, res) => {
    try {
      const product = await FoodModel.findByPk(req.params.id);
      if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar producto' });
    }
  }

  export const create = async (req, res) => {
    try {
      const newProduct = await FoodModel.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear producto' });
    }
  }

  export const update = async (req, res) => {
    try {
      const updated = await FoodModel.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated[0] === 0) return res.status(404).json({ error: 'Producto no encontrado o sin cambios' });
      res.json({ message: 'Producto actualizado' });
    } catch (error) {
      res.status(400).json({ error: 'Error al actualizar producto' });
    }
  }

  export const deletFood = async (req, res) => {
    try {
      const deleted = await FoodModel.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
      res.json({ message: 'Producto eliminado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar producto' });
    }
  }

