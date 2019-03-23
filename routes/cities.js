import { Router } from 'express';
import { getAllCities, getRandomCity, createCity, updateCity, deleteCity } from '../controllers/cities';
const router = Router();

router.get('/', getAllCities);
router.get('/random', getRandomCity);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

export default router;