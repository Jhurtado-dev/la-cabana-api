import allExtrasView from "../models/AllExtrasView.js";
import Extra1 from "../models/extraModel1.js";
import Extra2 from "../models/extraModel2.js";
import Extra3 from "../models/extraModel3.js";

// CREATE
export const createExtra = async (req, res) => {
  const { source } = req.body;
  let Model = getModelBySource(source);
  try {
    const extra = await Model.create(req.body);
    res.status(201).json(extra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateExtra = async (req, res) => {
  const { source } = req.body;
  let Model = getModelBySource(source);
  try {
    const extra = await Model.findByPk(req.params.id);
    if (!extra) return res.status(404).json({ message: 'Extra no encontrado' });
    await extra.update(req.body);
    res.json(extra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteExtra = async (req, res) => {
  const { source } = req.query;
  let Model = getModelBySource(source);
  try {
    const extra = await Model.findByPk(req.params.id);
    if (!extra) return res.status(404).json({ message: 'Extra no encontrado' });
    await extra.destroy();
    res.json({ message: 'Extra eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all extras from view
export const getAllExtras = async (req, res) => {
  try {
    const extras = await allExtrasView.findAll();
    res.json(extras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Utility to select model
function getModelBySource(source) {
  switch (source) {
    case 'extra1': return Extra1;
    case 'extra2': return Extra2;
    case 'extra3': return Extra3;
    default: throw new Error("Modelo inválido");
  }
}
