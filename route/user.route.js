
import express from 'express';
import { signup, login } from '../controller/user.controller.js';

const router = express.Router();

// post user
router.post('/signup', signup);
router.post('/login', login);

export default router;
