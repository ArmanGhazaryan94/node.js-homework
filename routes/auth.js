import { Router } from 'express';
import passport from 'passport';
import { login, facebookCallback, twitterCallback, googleCallback } from '../controllers/auth';
const router = Router();

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook'), facebookCallback);

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter'), twitterCallback);

router.get('/auth/google', passport.authenticate('google'));
router.get('/auth/google/callback', passport.authenticate('google'), googleCallback);

router.post('/', login);

export default router;