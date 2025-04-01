import pool from "../config/db.js";

const createUrl = async (shortUrl, longUrl) => {
    const result = await pool.query(
        "INSERT INTO urls (short_url, long_url) VALUES ($1, $2) RETURNING *",
        [shortUrl, longUrl]
    );
    return result.rows[0];
}

const getUrl = async (shortUrl) => {
    const result = await pool.query(
        "SELECT * FROM urls WHERE short_url = $1",
        [shortUrl]
    );
    return result.rows[0];
}

const incrementClick = async (shortUrl) => {
    await pool.query(
        "UPDATE urls SET clicks = clicks + 1 WHERE short_url = $1",
        [shortUrl]
    );
}

export {
    createUrl,
    getUrl,
    incrementClick,
}