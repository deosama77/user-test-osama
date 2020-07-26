const db=require('../db/index')
const HttpError =require("../utilities/http-error");

//*******************************getUsers*********************
const getUsers=async (req,res,next)=>{
    try{
        const users=await db.any("select * from users");
        res.status(200).json({
            users:users,
            status:"success",
        })
    } catch (e) {
        console.log(e);
        return next(new HttpError("Error : "+e,500))
    }

}


//*******************Add User ************************************
const addUser=async (req,res,next)=>{
    try{
        const user=await db.one("INSERT INTO users(name,email) values (${name},${email})RETURNING *",req.body)

        res.status(201).json({
            user,
            status:"success",
            message:"1 user is added"
        })
    }catch (e) {
        console.log(e)
        return  next(new HttpError("Error occurred during add process : "+e,500));
    }

}
module.exports={getUsers,addUser}
