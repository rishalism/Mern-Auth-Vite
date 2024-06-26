import express from 'express';
const router = express.Router()
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import imageUpload from '../middleware/multerMiddleware.js';


router.post('/', imageUpload, registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, imageUpload, updateUserProfile);

export default router