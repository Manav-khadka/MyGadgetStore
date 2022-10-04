const mongoose = require('mongoose');


const productSchema =mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name'],
    },
    price:{
        type:Number,
        required:[true,'Please enter product price'],
        macLength:[8,'Product name cannot exceed 8 characters']
    },
    description:{
        type:String,
        required:[true,'Please enter product description'],
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,'Please select category for this product'],
    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock'],
        max:[100,'Product cannot exceed 100 items in stock'],
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:'User',
                required:true
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            },
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },


    createdAt:{
        type:Date,
        
        default:Date.now
    }
})
module.exports = mongoose.model('Product',productSchema)

            