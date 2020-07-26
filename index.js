const express =require('express');
const app =express();
const bodyParser =require('body-parser');

const userRoutes=require('./routes/user-route')
// parse requests of content-type - application/json
app.use(bodyParser.json());



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// handle routes
app.use("/users",userRoutes);

// error if no route is found .. 404 status
app.use((req,res,next)=>{
    const error=new HttpError("Couldn't find this route",404);
    throw error;
});


// error if any error occurred .. 500 or any status
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });

});
const port=process.env.port||4000
const server=app.listen(port,function () {
    console.log("Server is running on port : "+port)
})
module.exports=server
