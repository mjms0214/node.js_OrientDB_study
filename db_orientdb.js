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

// SELECT

// db.record.get('#35:0')
//     .then(
//         function(record){
//             console.log('Loaded Record:', record);
//         }
//     );


// INSERT

// db.insert().into('topic')
//     .set({
//         title: '추가',
//         description: '설명 추가'
//     })
//     .one().then(function(result){
//         console.log(result)
//     })


// update

// db.update('#34:1')
//     .set({
//         description: '수정 내용'
//     }).one()
//     .then(
//         function(update){
//             console.log('Records Updated:', update);
//         }
//     );

// delete

// db.delete().from('topic')
//     .where('@rid = #34:1').one()
//     .then(
//         function(del){
//             console.log('Records Deleted: ' + del);
//         }   
//     );





db.select().from('topic').all()
    .then(
        function(result){
            console.log(result)
        }
    )