var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/finalport'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    res.sendFile(path.json(__dirname + '/dist/finalport/index.html'));
})

console.log('Console listening!');

/*var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb://root:123@ds227110.mlab.com:271101/shingodb", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
/*  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  */
 /*
var Schema = mongo.Schema;  
  
var IntroSchema = new Schema({      
    intro: {
            name: String,
            desc: String
        },
    about: {
            title: String,
            content:String,
            button: String
        } 
},{ versionKey: false });  
   
  
var model = mongo.model('userinfo', IntroSchema, 'userinfo');  
  
 app.get("/api/userinfo",function(req,res){  
    model.findOne({},function(err,data){ 
      
              if(err){  
                  res.send(err);  
              }
              else{                
                  res.send(data);
                  console.log(data); 
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!');
})  */