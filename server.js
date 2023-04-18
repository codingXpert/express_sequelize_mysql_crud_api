const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin:'http://localhost:8081'  //if third party try to access the apis they can go to this origin
}

// simple middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//testing api
app.get('/' , (req,res) => {
    res.json({message: 'hello from api'})
});

//port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT , () =>{
    console.log(`server is running on the port ${PORT}`);
});
