const express = require('express');
const logRequest = require('./logger');
const systemInfo = require('./utils/systemInfo');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logRequest);
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    systemInfo();
});