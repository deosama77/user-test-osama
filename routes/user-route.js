const {getUsers,addUser}=require('../queries/query-user')
const routes=require('express').Router();
// get all Users
routes.get("/",getUsers);

//  add user
routes.post("/add",addUser);

module.exports=routes;
