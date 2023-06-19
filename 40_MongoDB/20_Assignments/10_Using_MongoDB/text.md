> db.ninjas.update( {name:'Garett'}, {$push: {status:"hungry"}} )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.ninjas.find().pretty()
{
        "_id" : ObjectId("648f8d6fe9a1c12927581530"),
        "name" : "Garett",
        "belt" : "red",
        "status" : [
                "hungry"
        ]
}
{
        "_id" : ObjectId("648f8dd5e9a1c12927581531"),
        "name" : "kyle",
        "belt" : "red",
        "status" : "ft"
}
> dbs
uncaught exception: ReferenceError: dbs is not defined :
@(shell):1:1
> show dbs
admin     0.000GB
config    0.000GB
homework  0.000GB
local     0.000GB
test      0.000GB
> db
test
> db.dropDatabase()
{ "ok" : 1 }
> dbs
uncaught exception: ReferenceError: dbs is not defined :
@(shell):1:1
> show dbs
admin     0.000GB
config    0.000GB
homework  0.000GB
local     0.000GB
> use homework
switched to db homework
> db
homework
> db.dropDatabase()
{ "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use my_first_db
switched to db my_first_db
> db
my_first_db
> db.createCollection('students')
{ "ok" : 1 }
> db
my_first_db
> show collections
students
> db.students.insert( {name:"Garett", home_state:"California", lucky_number:8, birthday: {month:07, day:16, year:1991}})
WriteResult({ "nInserted" : 1 })
> ls
[native code]
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 } }
> db.students.find().pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d77"),
        "name" : "TJ",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
> db.students.find( {home_state:"California"}, {home_state:"Washington"})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "home_state" : "Washington" }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d86"), "home_state" : "Washington" }
> db.students.find( {home_state: { $in: ['California', 'Washington']}})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "name" : "Ashlei", "home_state" : "California", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d77"), "name" : "TJ", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d86"), "name" : "Stephanie", "home_state" : "California", "lucky_number" : 5, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
> db.students.find( {lucky_number: {$gt:3}})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "name" : "Ashlei", "home_state" : "California", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d77"), "name" : "TJ", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d86"), "name" : "Stephanie", "home_state" : "California", "lucky_number" : 5, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 } }
> db.students.find( {lucky_number: {$lte: 10}}).pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d77"),
        "name" : "TJ",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
> db.students.find( {lucky_number: {$in [1,2,3,4,5,6,7,8,9]}}).pretty()
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:38
> db.students.find( {lucky_number: {$in: [1,2,3,4,5,6,7,8,9]}}).pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
> db.students.updateAll(
... {
... $set: {interests: ['coding','brunch','mongodb']
... }
... )
...
...
>
>
>
>
> db.students.find().pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d77"),
        "name" : "TJ",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        }
}
> db.students.updateMany( {}, {$set: {interests: ['coding', 'brunch', 'mongodb']}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
> db.students.find().pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d77"),
        "name" : "TJ",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 }, "interests" : [ "coding", "brunch", "mongodb" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "name" : "Ashlei", "home_state" : "California", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d77"), "name" : "TJ", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d86"), "name" : "Stephanie", "home_state" : "California", "lucky_number" : 5, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
> db.students.update(
... {name:"Garett"},
... {$push: {interests: "Driving"}}
... )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find( {name:"Garett"})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 }, "interests" : [ "coding", "brunch", "mongodb", "Driving" ] }
> db.students.updateOne(
... {name:"Ashlei"},
... {$push: {interests:"taxes"}}
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find( {name:"Ashlei"})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "name" : "Ashlei", "home_state" : "California", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb", "taxes" ] }
> db.students.update(
... {name:"Ashlei"},
... {$pop: {interests:"taxes"}}
... )
WriteResult({
        "nMatched" : 0,
        "nUpserted" : 0,
        "nModified" : 0,
        "writeError" : {
                "code" : 9,
                "errmsg" : "Expected a number in: interests: \"taxes\""
        }
})
> db.students.update(
... {name:"Ashlei"},
... {$pull: {interests:"taxes"}}
... )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find( {name:"Ashlei"})
{ "_id" : ObjectId("648f9f47d9733ff25fe23d75"), "name" : "Ashlei", "home_state" : "California", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
> db.sudents.remove(
... {home_state: "California"}
... )
WriteResult({ "nRemoved" : 0 })
> db.students.find().pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d74"),
        "name" : "Garett",
        "home_state" : "Nebraska",
        "lucky_number" : 8,
        "birthday" : {
                "month" : 7,
                "day" : 16,
                "year" : 1991
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb",
                "Driving"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d75"),
        "name" : "Ashlei",
        "home_state" : "California",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d77"),
        "name" : "TJ",
        "home_state" : "Washington",
        "lucky_number" : 10,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d86"),
        "name" : "Stephanie",
        "home_state" : "California",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ]
}
> db.students.remove( {home_state:"California"})
WriteResult({ "nRemoved" : 2 })
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 }, "interests" : [ "coding", "brunch", "mongodb", "Driving" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d77"), "name" : "TJ", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
> db.students.remove( {name:"TJ"})
WriteResult({ "nRemoved" : 1 })
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d74"), "name" : "Garett", "home_state" : "Nebraska", "lucky_number" : 8, "birthday" : { "month" : 7, "day" : 16, "year" : 1991 }, "interests" : [ "coding", "brunch", "mongodb", "Driving" ] }
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
> db.students.deleteOne(
... {lucky_number: {$gt: 5}}
... )
{ "acknowledged" : true, "deletedCount" : 1 }
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ] }
> db.students.update(
... {name:"Kyle"},
... {$set: {num_of_belts: 0}}
... )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ], "num_of_belts" : 0 }
> db.students.updateOne(
... {home_state: "Washington"},
... {$set: {num_of_belts: 1}}
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ], "num_of_belts" : 1 }
> db.students.updateMany(
... {},
... {$rename: {num_of_belts: belts_earned}}
... )
uncaught exception: ReferenceError: belts_earned is not defined :
@(shell):3:12
> db.students.updateMany(
... {},
... {$rename: {num_of_belts: "belts_earned"}}
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "lucky_number" : 10, "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ], "belts_earned" : 1 }
> db.students.updateMany(
... {},
... {$unset: { lucky_number:""}}
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find()
{ "_id" : ObjectId("648f9f47d9733ff25fe23d76"), "name" : "Kyle", "home_state" : "Washington", "birthday" : { "month" : 4, "day" : 14, "year" : 2004 }, "interests" : [ "coding", "brunch", "mongodb" ], "belts_earned" : 1 }
> db.students.updateMany{
... {},
... {$currentDate: {updated_on: true}}
... )
uncaught exception: SyntaxError: unexpected token: '{' :
@(shell):1:22
> db.students.updateMany(
... {},
... {$currentDate: {updated_on: true}}
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find().pretty()
{
        "_id" : ObjectId("648f9f47d9733ff25fe23d76"),
        "name" : "Kyle",
        "home_state" : "Washington",
        "birthday" : {
                "month" : 4,
                "day" : 14,
                "year" : 2004
        },
        "interests" : [
                "coding",
                "brunch",
                "mongodb"
        ],
        "belts_earned" : 1,
        "updated_on" : ISODate("2023-06-19T01:24:35.619Z")
}