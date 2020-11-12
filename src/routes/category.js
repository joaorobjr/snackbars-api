import express from 'express';
import categoryController from '../controllers/category.js';

const router = express.Router();

router.post('/', categoryController.create);
router.get('/', categoryController.retrieve);
router.get('/:id', categoryController.findById);
router.patch('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;
