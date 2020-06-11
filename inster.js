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
con.query(`INSERT * INTO prvnitabulka`,
    function(err, rows){
        if (err) {
            console.error(err);
        } else {
            //zpracovani vysledku SQL dotazu
            console.log(rows);
           
        }
    }
);

//ukonceni pripojeni na databazi
con.end();
