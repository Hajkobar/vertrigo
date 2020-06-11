

const mysql = require("mysql");

//vytvoreni pripojeni na databazi
con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "vertrigo",
    database: "pokusy"
});

//pripojeni na databazi
con.connect();

//SQL dotaz
con.query(`SELECT * FROM prvnitabulka`,
    function(err, rows){
        if (err) {
            console.error(err);
        } else {
            //zpracovani vysledku SQL dotazu
            console.log(rows);
            for (let r of rows) {
                console.log(r.jmeno + " " + r.prijmeni + r.roknar);
            }
        }
    }
);

//ukonceni pripojeni na databazi
con.end();
