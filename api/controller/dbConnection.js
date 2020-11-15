const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();

const connection = mysql.createConnection({
    host: '127.0.0.1',//'sql12.freemysqlhosting.net',//process.env.HOST,
    user: 'root',//'sql12375732',//process.env.USER,
    password: '',//'Rcn8wtRY8t',//process.env.PASSWORD,
    database: 'martis2',//'sql12375732',//process.env.DATABASE,
    port: 3306,//process.env.DB_PORT
})

connection.connect((err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log('DB' + connection.state);
    }
})

module.exports = connection;