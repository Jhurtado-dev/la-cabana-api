import { Router } from 'express';
import { getAll, getById, update, deletFood, create } from '../controllers/foodController.js';
const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deletFood);

export default router;
