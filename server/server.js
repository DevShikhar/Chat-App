const   express = require('express'),
        path = require('path');



const app = express();
const publicPath = path.join(__dirname, '../public');

require('dotenv').config();
app.use(express.static(publicPath));


app.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED AT ${process.env.PORT}`);
})

