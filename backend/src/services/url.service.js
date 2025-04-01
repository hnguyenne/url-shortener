import { nanoid } from 'nanoid';
import { createUrl, getUrl, incrementClick } from '../models/url.model.js';

const generateShortUrl = async (longUrl) => {
    const shortUrl = nanoid(8);
    return await createUrl(shortUrl, longUrl);
};

const findUrl = async (shortUrl) => {
    const urlData = await getUrl(shortUrl);
    if (urlData) {
        await incrementClick(shortUrl);
    }
    return urlData;
};

export {
    generateShortUrl,
    findUrl,
};