
try {
    let pgp = require("pg-promise")({})
    // let db = pgp("postgres://osama:123456@localhost:5432/osama")
    //  let db=pgp(process.env.DATABASE_URL);
    let db=`postgres://tvfvfqohbubrxj:a39bfebdc20c9e84ff2048f6acad1483966f5b9691f49386355aad789f80fcbe@ec2-54-197-254-117.compute-1.amazonaws.com:5432/dfmb3cc1jtpr9f`
    console.log("Database",process.env.DATABASE_URL)
    module.exports=db;
} catch (e) {
    console.log("Error connection with data base : ",e)
}

