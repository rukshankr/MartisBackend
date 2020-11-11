const mysql = require('mysql');
let instance = null;

const connection = require('./dbConnection');

class Dbservice{
    static getDbServiceInstance(){
        return instance ? instance : new Dbservice();
    };

    async getAllData(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM inspection";

                connection.query(query, (err, results) => {
                    if(err) reject(new Error(err));
                    resolve(results)
                })
            })
            return response;
        }catch(error){
            console.log(error.message);
        }
    }

    async insertIntoInspection(assetId, region, date, milePost){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO inspections values (?, ?, ?, ?)";
                
                connection.query(query, [assetId, region, date, milePost], (err, result) => {
                    if(err) reject(new Error(err));
                    resolve({Status: "Sucessful"});
                })
            });

            return response;
        }catch(err){
            console.log(err.message);
        }
    }
}

module.exports = Dbservice;