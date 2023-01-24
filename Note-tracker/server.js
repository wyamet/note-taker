const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/routesAPI");
const htmlRoutes = require('./routes/routesHTML');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


