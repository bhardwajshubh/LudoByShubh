require("dotenv").config();
const express = require('express');
const app = express();




app.listen(process.env.PORT , () => {
    console.log(`Ludo is running at port ${process.env.PORT}`);
})