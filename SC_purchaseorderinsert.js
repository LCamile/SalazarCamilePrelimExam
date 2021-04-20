const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."CS_purchaseorder"(cust_id,po_status,po_date) VALUES($1,$2,$3) RETURNING *';
const data = [1,'Delivering','4/19/2021'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();