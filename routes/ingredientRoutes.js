import { Router } from 'express';
import {
  getAll,
  getById,
  create,
  update,
  deleteIngredient
} from '../controllers/ingredientController.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteIngredient);

export default router;
