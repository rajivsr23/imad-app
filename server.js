var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



             This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
             
         </p>
         
         <p>This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
         </p>
         <p>This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
         
         
         
         </p>`
    },
'article-three':{
    
    title: 'Article Three | Ricky Raghavan',
    heading: 'Article Three',
    date: 'Sep 15, 2016',
    content: `<p>
             This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
             
         </p>
         
         <p>This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
         </p>
         <p>This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.This is the comment of my first article.
         
         
         
         </p>`
    
    
}
};

function createTemplate (data){
    
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`<html>
<head>
    
    <title>
      ${title}
    </title>
     <link href="/ui/style.css" rel="stylesheet" />
    <style>
      
    </style>
</head>    
  <body>
      <div class="container">
      <div>
          
           <a href="/">Home</a>
      </div>
     
     
     <hr/>
     
     <h3>${heading}</h3>
     
     <div>
      ${date}
     </div>
     <div>
         
    ${content}
        </div> 
        </div>
         </body>
         
         </html>

`;
    
    
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
