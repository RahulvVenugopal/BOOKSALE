const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri='mongodb+srv://anugee:anugee@cluster0.bgyjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`);
});
