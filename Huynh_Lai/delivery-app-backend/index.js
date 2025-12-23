const express = require ('express');
const cors = require ('cors');
const pool = require ('./db');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/deliveries', async(req,res) => {
    //save delivery request
    const {customer_name, address, delivery_date,product_size} = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO deliveries (customer_name, address, delivery_date,product_size) VALUES ($1,$2,$3,$4) RETURNING *',
            [customer_name, address, delivery_date,product_size]
        );
        console.log('Inserted:', result.rows[0]); 
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/api/routes', (req,res)=>{
    //Return optimized routes
})

app.listen(3001,() => console.log('Server running on port 3000'));

