import { Router } from 'express';
import {
    getAllProducts,
    getProductByID,
    getProductReviews,
    createProduct
} from '../controllers/products';
const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductByID);
router.get('/:id/reviews', getProductReviews);
router.post('/', createProduct)

export default router;