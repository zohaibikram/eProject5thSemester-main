const mongoose = require('mongoose')

const connectdb = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/conference', {
         
        });
        console.log('MongoDB connected');
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
}
module.exports={connectdb};