const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."CS_supplier"(supp_name,supp_address) VALUES($1,$2) RETURNING *';
const data = ['Jose','Seoul'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();