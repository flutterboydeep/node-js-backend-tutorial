
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Deep@sql1",
    database: "test",
}
);

let q = "select * from user";
try {
    connection.query(q, (err, result) => {
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
