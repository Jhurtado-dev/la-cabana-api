import TableModel from "../models/tableModel.js";

export const getAllTables = async (req, res) => {
  try {
    const tables = await TableModel.findAll();
    res.json(tables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTable = async (req, res) => {
  try {
    const table = await TableModel.findByPk(req.params.id);
    if (!table) return res.status(404).json({ message: 'Mesa no encontrada' });
    res.json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTable = async (req, res) => {
  try {
    const table = await TableModel.create(req.body);
    res.status(201).json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTable = async (req, res) => {
  try {
    const table = await TableModel.findByPk(req.params.id);
    if (!table) return res.status(404).json({ message: 'Mesa no encontrada' });
    await table.update(req.body);
    res.json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTable = async (req, res) => {
  try {
    const table = await TableModel.findByPk(req.params.id);
    if (!table) return res.status(404).json({ message: 'Mesa no encontrada' });
    await table.destroy();
    res.json({ message: 'Mesa eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
