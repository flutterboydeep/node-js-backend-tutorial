
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Deep@sql1",
    database: "test",
}
);

let q = "select * from user";         // to show the table
q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)"; // abhi hamne sirf empty schema bnaya hai empty value ke sath

q = "INSERT INTO user(id,username,email,password) VALUES ?"; // agar maltiple user ek sath aad ho rahe ho database mai 

let user = ["123", "test", "test@gmail.com", "123456"];               // ye user hai jo add hoga


let users = [["133", "test1", "test1@gmail.com", "123456"],
["143", "test2", "test2@gmail.com", "123456"]
];


try {
    // connection.query(q, user, (err, result) => {       //    yaha pr second peramenter user bhi pass kar sakte hai 

    connection.query(q, [users], (err, result) => {        //agar multiple user kda data ek sath store karna hai 
        if (err) throw err;
        console.log('result ', result);

    });
    connection.end();

} catch (e) {
    console.log(e);
}



// console.log(getRandomUser());




// let getRandomUser = () => {..
//     return {
//         id: faker.datatype.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),

//     }
// }
