const express = require('express');
//const connection = require('./connection');

const router = express.Router();

//crud operation (create ,read ,update,delete)



// adding product 
router.post('/create',(req,res,next)=>
{
    console.log(" entered a inside of post create method")
    let product = req.body;
    var query = "insert into PRODUCT (name,description,price) values(?,?,?)";
    connection.query(query,[product.name,product.description,product.price],(err,results)=>
    {
        if(!err)
        {
            return res.status(200).json({message: "product added sucessfulley "})
        }
        else return res.status(500).json(err);

    });
});





//reading product
router.get('/read',(req,res,next)=>
{
   console.log('inside get -->',req);
    var query = "select * from  PRODUCT ";
    connection.query(query,(err,results)=>
    {
        if(!err)
        {
            return res.status(200).json(results);
        }
        else return res.status(500).json(err);

    });
});


//updating product
router.patch('/update/:id',(req,res,next)=>
{
     const id = req.params.id;
    let product = req.body;
    var query = "update PRODUCT  set name =?,description=?,price=? where id =?";
    connection.query(query,[product.name,product.description,product.price,id],(err,results)=>
    {
        if(!err)
        {
            if(results.affectedRows == 0)
            {
                return res.status(404).json({message: "product id not found "})

            }
            return res.status(200).json({message: "product updated  sucessfulley "})
        }
        else 
        {
            return res.status(500).json(err);
        }
    });
});



// deleting product

router.delete('/delete/:id',(req,res,next)=>
{
     const id = req.params.id;
    
    var query = "delete from  PRODUCT   where id =?";
    connection.query(query,[id],(err,results)=>
    {
        if(!err)
        {
            if(results.affectedRows == 0)
            {
                return res.status(404).json({message: "product id not found "})

            }
            return res.status(200).json({message: "product deleted  sucessfulley "})
        }
        else 
        {
            return res.status(500).json(err);
        }
    });
});














module.exports= router;




