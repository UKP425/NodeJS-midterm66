const express = require('express');
const bodyParser = raquired(body-parser);

const app = express();
app.use(bodyParser.json());

const calculatorRoute = require('/calculator');
app.use('/calculator' . calculatorRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT');

});