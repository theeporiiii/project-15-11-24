const express =require('express');
const morgan =require('morgan');
const cors = require('cors');


require('./DB/Connection')
const userRoute = require("./routes/userRoutes")



//const postRoute = require("./routes/postroutes")
const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());


app.use('/api',userRoute);
//app.use('/api',postRoute);
app.listen(3008,()=>{
    console.log(`Listening to port 3008`)
})