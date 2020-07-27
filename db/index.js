
try {
    let pgp = require("pg-promise")({})
    // let db = pgp("postgres://osama:123456@localhost:5432/osama")
    //  let db=pgp(process.env.DATABASE_URL);
    let db=`postgres://azphehlnchufkc:3a9f36012cf86b3562a52a2d30ae757e8023c57bf54054168da28347264ecf4b@ec2-54-197-254-117.compute-1.amazonaws.com:5432/dse6jvnetdig6`
    console.log("Database",process.env.DATABASE_URL)
    module.exports=db;
} catch (e) {
    console.log("Error connection with data base : ",e)
}

