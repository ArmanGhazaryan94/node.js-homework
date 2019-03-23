import { Router } from 'express';
import { getAllUsers , deleteUser} from '../controllers/users';
const router = Router();

router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

export default router;