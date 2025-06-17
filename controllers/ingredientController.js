import IngredientModel from "../models/ingredientModel.js";

export const getAll = async (req, res) => {
  try {
    const ingredients = await IngredientModel.findAll();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
};

export const getById = async (req, res) => {
  try {
    const ingredient = await IngredientModel.findByPk(req.params.id_category);
    if (!ingredient) return res.status(404).json({ error: 'Ingrediente no encontrado' });
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar ingrediente' });
  }
};

export const create = async (req, res) => {
  try {
    const newIngredient = await IngredientModel.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear ingrediente' });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await IngredientModel.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated[0] === 0) return res.status(404).json({ error: 'Ingrediente no encontrado o sin cambios' });
    res.json({ message: 'Ingrediente actualizado' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar ingrediente' });
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    const deleted = await IngredientModel.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Ingrediente no encontrado' });
    res.json({ message: 'Ingrediente eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar ingrediente' });
  }
};
