try {
    let pgp = require("pg-promise")({})
    let db = pgp("postgres://osama:123456@localhost:5432/osama")
    module.exports=db;
} catch (e) {
    console.log("Error connection with data base : ",e)
}

