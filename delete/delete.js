// import modules
const express = require('express')
let mongodb = require('mongodb')

//import url
const url = require('../url')

//create mongo client
let mcl = mongodb.MongoClient

//create router instance
let router = express.Router()

//create rest api
router.delete("/",(req,res)=>{
    let obj = {
        "p_id":req.body.p_id
    }
    //connect mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log('Error in connection:-'+err)
        else{
            let db = conn.db("nodedb")
            db.collection('products').deleteOne(obj,(err)=>{
                if(err)
                    res.json({'delete':'Error'+err})
                else{
                    if(result.deltedCount!=0){
                        console.log("Data delted")
                        res.json({'delete':'success'})
                    }
                    else{
                        console.log("Data Not Deleted")
                        res.json({'delete':'Record Not Found'})
                    }
                    conn.close()
                }
            })
        }
    })
})

//export router
module.exports = router