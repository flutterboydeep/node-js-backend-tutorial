
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

const uuid = require('uuid').v4;

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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


// try {
//     // connection.query(q, user, (err, result) => {       //    yaha pr second peramenter user bhi pass kar sakte hai 

//     connection.query(q, [users], (err, result) => {        //agar multiple user kda data ek sath store karna hai 
//         if (err) throw err;
//         console.log('result ', result);

//     });

// } catch (e) {
//     console.log(e);
// }
// connection.end();

app.get("/", (req, res) => {
    let q = "Select * From user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(`result is `, result);


            // let count=result[0]['']
            res.render("home.ejs", { result });
        });
    } catch (e) {
        // res.send("welcome to homepage")

    }
});

// edit route for open form 
app.get('/user/:id/edit', (req, res) => {
    let id = req.params.id;
    let q = `Select * from user where id='${id}'`;
    connection.query(q, (err, result) => {
        if (err) throw err;

        res.render("edit_form.ejs", result[0]);

    });
});

app.patch('/user/:id', (req, res) => {
    const id = req.params.id;
    // let{password: newPass, username:newuserName}=req.body;
    //  we can use-> newPass / eski jagha==>(data[password])

    let data = req.body;
    let q = `Select * from user where id='${id}'`;
    connection.query(q, (err, result) => {
        if (err) throw err;

        if (data['password'] === result[0]['password']) {
            let q2 = `Update user SET username='${data['username']}' where id='${id}'`;
            connection.query(q2, (err, result) => {
                if (err) throw err;

                res.redirect('/');

            });

            console.log("password update successfully");
        } else {
            res.send("Incorrect password");

            console.log("Incorrect password  form", data['password'], result[0]['password']);
        }



    });

});


app.get('/user/:id/delete', (req, res) => {
    console.log("delete funtion is running");
    let id = req.params.id;
    let q = `Select * from user where id='${id}'`;
    // let q = `Select * from user where id='${id}`;
    connection.query(q, (err, result) => {
        if (err) throw err;

        res.render("delete_form.ejs", { id });

    });
});

app.post('/user/:id', (req, res) => {
    let id = req.params.id;
    let userEnterPass = req.body;

    let q = `Select * from user where id='${id}'`;

    connection.query(q, (err, result) => {
        if (err) throw err;
        if (userEnterPass['password'] === result[0]['password']) {
            q2 = `Delete FROM user where id='${id}'`;
            connection.query(q2, (err, result) => {
                if (err) throw error;

                res.redirect('/');
            })

        } else {
            res.send("Incorrect password");
        }
    });
});

app.get('/user/add', (req, res) => {
    console.log("run the /user/add    -->page ");
    res.render('add_form.ejs');
});


app.post("/user", (req, res) => {
    const { username, email, password } = req.body;
    const id = uuidv4();

    if (username != null && email != null && password != null) {


        const q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
        connection.query(q, [id, username, email, password], (err, result) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).send("Database error");
            }
            res.redirect("/");

        });
    } else {
        return res.status(600).send("All fileds are required");
    }

});

app.listen(8080, () => {
    console.log("server is working at port 8080");
});




// console.log(getRandomUser());




// let getRandomUser = () => {..
//     return {
//         id: faker.datatype.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),

//     }
// }
