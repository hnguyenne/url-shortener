import express from 'express';
import { shortenUrl, redirectUrl } from '../controllers/url.controller.js';

const router = express.Router();

// POST /shorten - Shorten a URL
router.post('/shorten', shortenUrl);

// GET /:shortUrl - Redirect to the original URL
router.get('/:shortUrl', redirectUrl);

export default router;