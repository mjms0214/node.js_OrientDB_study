var express = require('express');
var bodyParser = require('body-parser');

const OrientDB = require("orientjs");

var server = OrientDB({
    host:     'localhost',
    port:     2424,
    username: 'root',
    password: 'minji67204',
    useToken: true
});

var db = server.use('o2')
console.log('Using Database:'  + db.name);

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get(['/topic', '/topic/:id'], function(req, res){
    if(req.query.id){
        console.log(req.query.id)
        db.select().from('topic').where({'@rid': req.query.id}).all()
        .then(
            function(result){
                console.log(result)
                return res.send(result)
            }
        )
    } else{
        db.select().from('topic').all()
        .then(
            function(result){
                console.log(result)
                return res.send(result)
            }
        )
    }
});
app.post('/topic/add', function(req, res){
    var input_title = req.body.title;
    var input_description = req.body.description;
    var input_author = req.body.author;

    db.insert().into('topic')
        .set({
            title: input_title,
            description: input_description,
            author: input_author
        })
        .one().then(function(result){
            return res.send(result)
        })
    
})
app.listen(3000, function(){
    console.log('Connected, 3000 port!');
})