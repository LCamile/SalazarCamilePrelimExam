const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."CS_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
const data = ['Dragon Fruit','Fruit',1];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();