const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //order1
      await client.query('BEGIN');
      const q1 = 'UPDATE "PrelimExam"."CS_purchaseorder" SET cust_id = $1, po_status = $2, po_date= $3 WHERE po_id=4 RETURNING *';
      const data1 = [1,'Cancelled','4/20/2021'];
      const res = await client.query(q1,data1);
      
      console.log(res.rows[0].user_id);
  
      const q2 = 'UPDATE "PrelimExam"."CS_lineitem" SET po_id = $1, prod_id = $2, li_desc = $3, li_status = $4 WHERE li_id=4 RETURNING *';
      const data2 = [4,5,'Fruit Delivery','Declined'];
      const res2 = await client.query(q2,data2);

     

      
      await client.query('COMMIT');
    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      
      client.release();
      console.log("Added");
    }
  })().catch(e=>console.error(e.stack))
;