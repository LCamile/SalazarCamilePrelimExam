const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //order1
      await client.query('BEGIN');
      const q1 = 'INSERT INTO "PrelimExam"."CS_purchaseorder"(cust_id,po_status,po_date) VALUES($1,$2,$3) RETURNING *';
      const data1 = [1,'Delivering','4/19/2021'];
      const res = await client.query(q1,data1);
      
      console.log(res.rows[0].user_id);
  
      const q2 = 'INSERT INTO "PrelimExam"."CS_lineitem"(po_id,prod_id,li_desc,li_status) VALUES($1,$2,$3,$4) RETURNING *';
      const data2 = [2,1,'Vehicle Delivery','Accepted'];
      const res2 = await client.query(q2,data2);

      //order2

      const q3 = 'INSERT INTO "PrelimExam"."CS_purchaseorder"(cust_id,po_status,po_date) VALUES($1,$2,$3) RETURNING *';
      const data3 = [1,'Delivering','4/19/2021'];
      const res3 = await client.query(q3,data3);

      const q4 = 'INSERT INTO "PrelimExam"."CS_lineitem"(po_id,prod_id,li_desc,li_status) VALUES($1,$2,$3,$4) RETURNING *';
      const data4 = [3,4,'Vehicle Delivery','Accepted'];
      const res4 = await client.query(q4,data4);


      //order3
      await client.query('BEGIN');
      const q5 = 'INSERT INTO "PrelimExam"."CS_purchaseorder"(cust_id,po_status,po_date) VALUES($1,$2,$3) RETURNING *';
      const data5 = [1,'Delivering','4/19/2021'];
      const res5 = await client.query(q5,data5);
      
  
      const q6 = 'INSERT INTO "PrelimExam"."CS_lineitem"(po_id,prod_id,li_desc,li_status) VALUES($1,$2,$3,$4) RETURNING *';
      const data6 = [4,5,'Fruit Delivery','Accepted'];
      const res6 = await client.query(q6,data6);

      
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