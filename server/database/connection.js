const mongoose= require('mongoose')

const connectDB= async()=>{
    try{
            //mongo connection string
            const conn = await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useUnifiedTopolgy: true,
                useFindAndModify: false,
                useCreateIndex: true
            }) 
            console.log(`MongoDB connected: ${conn.connection.host}`);
     }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB