const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."CS_lineitem" SET po_id = $1, prod_id = $2, li_desc = $3, li_status = $4 WHERE li_id=1 RETURNING *';
const data = [1,1,'Vehicle Delivery','Decline'];

pool.query (sql,data,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows[0]);
    }
    
    });
    
    pool.end();