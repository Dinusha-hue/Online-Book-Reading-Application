const axios = require('axios');

exports.getBooksFromGoogle = async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        const books = response.data.items.map((item) => ({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.[0] || 'Unknown Author',
            description: item.volumeInfo.description || 'No description available',
            image: item.volumeInfo.imageLinks?.thumbnail || '',
        }));
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books' });
    }
};
