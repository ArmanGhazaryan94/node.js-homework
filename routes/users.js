import { Router } from 'express';
import { getAllUsers , deleteUser, getUserById} from '../controllers/users';
const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

export default router;