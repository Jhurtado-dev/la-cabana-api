import { Router } from 'express';
import { createTable, deleteTable, getAllTables, getTable, updateTable } from '../controllers/tableController.js';


const router = Router();

router.get('/', getAllTables);
router.get('/:id', getTable);
router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);

export default router;
