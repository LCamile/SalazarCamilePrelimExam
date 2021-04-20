const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //Customer
      await client.query('BEGIN');
      const q1 = 'INSERT INTO "PrelimExam"."CS_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data1 = ['Mary','Panabo'];
      const res = await client.query(q1,data1);
      
      console.log(res.rows[0].user_id);
  
      const q2 = 'INSERT INTO "PrelimExam"."CS_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data2 = ['George','Mati'];
      const res2 = await client.query(q2,data2);

      const q3 = 'INSERT INTO "PrelimExam"."CS_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data3 = ['Kent','Mandog'];
      const res3 = await client.query(q3,data3);

      const q4 = 'INSERT INTO "PrelimExam"."CS_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data4 = ['Cedric','Cateel'];
      const res4 = await client.query(q4,data4);


      //Supplier
      await client.query('BEGIN');
      const q5 = 'INSERT INTO "PrelimExam"."CS_supplier"(supp_name,supp_address) VALUES($1,$2) RETURNING *';
      const data5 = ['Vann','Ilocos'];
      const res5 = await client.query(q5,data5);
      
  
      const q6 = 'INSERT INTO "PrelimExam"."CS_supplier"(supp_name,supp_address) VALUES($1,$2) RETURNING *';
      const data6 = ['Dagohoy','Cagayan'];
      const res6 = await client.query(q6,data6);

      const q7 = 'INSERT INTO "PrelimExam"."CS_supplier"(supp_name,supp_address) VALUES($1,$2) RETURNING *';
      const data7 = ['Joy','Bohol'];
      const res7 = await client.query(q7,data7);

      const q8 = 'INSERT INTO "PrelimExam"."CS_supplier"(supp_name,supp_address) VALUES($1,$2) RETURNING *';
      const data8 = ['Ray','Manila'];
      const res8 = await client.query(q8,data8);


      //Product
      await client.query('BEGIN');
      const q9 = 'INSERT INTO "PrelimExam"."CS_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
      const data9 = ['Grapes','Fruit',1];
      const res9 = await client.query(q9,data9);
      
  
      const q10 = 'INSERT INTO "PrelimExam"."CS_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
      const data10 = ['Mercedez','Vehicle',2];
      const res10 = await client.query(q10,data10);

      const q11 = 'INSERT INTO "PrelimExam"."CS_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
      const data11 = ['BMW','Vehicle',2];
      const res11 = await client.query(q11,data11);

      const q12 = 'INSERT INTO "PrelimExam"."CS_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
      const data12 = ['Banana','Fruit',1];
      const res12 = await client.query(q12,data12);

      
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