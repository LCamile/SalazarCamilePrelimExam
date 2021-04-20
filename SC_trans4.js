const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //order1
      await client.query('BEGIN');
      const q1 = 'UPDATE "PrelimExam"."CS_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id=4 RETURNING *';
      const data1 = ['Lourd','Pangasinan'];
      const res = await client.query(q1,data1);
      
      console.log(res.rows[0].user_id);
  
      const q2 = 'UPDATE "PrelimExam"."CS_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id=5 RETURNING *';
      const data2 = ['Jim','Davao Del Norte'];
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