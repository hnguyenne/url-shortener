import { generateShortUrl, findUrl } from '../services/url.service.js';

const shortenUrl = async (req, res) => {
    try {
        const { longUrl } = req.body;
        if(!longUrl) {
            return res.status(400).json({ error: 'Long URL is required' });
        }

        const newUrl = await generateShortUrl(longUrl);
        res.status(201).json({shortUrl: newUrl.short_url, longUrl: newUrl.long_url});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const urlData = await findUrl(shortUrl);
        if (!urlData) {
            return res.status(404).json({ error: 'URL not found' });
        }

        res.redirect(urlData.long_url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {
    shortenUrl,
    redirectUrl,
};