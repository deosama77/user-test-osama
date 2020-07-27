try {
    let pgp = require("pg-promise")({})
    // let db = pgp("postgres://osama:123456@localhost:5432/osama")
     let db=pgp(process.env.DATABASE_URL);
    console.log("Database",process.env.DATABASE_URL)
} catch (e) {
    console.log("Error connection with data base : ",e)
}
module.exports=db;
