
try {
    let pgp = require("pg-promise")({})
    // let db = pgp("postgres://osama:123456@localhost:5432/osama")
    //  let db=pgp(process.env.DATABASE_URL);

    let url =`postgres://ghwiqamckgwubu:7428f1c8bf639db30ee3a77bd94a5ced423e525b0d785e8570da1a359b03276d@ec2-54-159-138-67.compute-1.amazonaws.com:5432/d1pgvtk47refbb`
    let db=pgp(url);
    console.log("Database",process.env.DATABASE_URL)
    module.exports=db;
} catch (e) {
    console.log("Error connection with data base : ",e)
}

