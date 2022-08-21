var express=require("express")
var path=require("path")
var mongoose=require("mongoose")
var app=express();
var bp=require("body-parser");

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view-engine','pug')
app.set('views',path.join(__dirname,'views'));
mongoose.connect('mongodb://localhost/ajaykg', {useNewUrlParser: true, useUnifiedTopology: true});
var db=mongoose.connection;
var bookSchema=new mongoose.Schema({
    bookname:String
})
var Book=mongoose.model('Book',bookSchema);
app.get("/",(req,res)=>{
    res.render("main.pug")
})
app.post("/",(req,res)=>{
    var add=new Book({
        bookname:req.body.name
    })
    add.save()
 var params={'content':add.bookname}
 res.render("main.pug",params)

})

app.listen(9292,()=>{
    console.log("server running...")
})