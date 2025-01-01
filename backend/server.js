const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../backend/config/db');
const bookRoutes = require('../backend/routes/book');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
