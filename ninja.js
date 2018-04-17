const mongoose = require('mongoose');
const schema = mongoose.Schema;

const GeoSchema = new schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

const NinjaSchema = new schema({
name:{
    type : String,
    required : [true,'name required']
},
rank:{
    type:String
},
available:{
    type :Boolean,
    default:false
},
geometry: GeoSchema
});

const Ninja = mongoose.model('ninja',NinjaSchema);
module.exports = Ninja;