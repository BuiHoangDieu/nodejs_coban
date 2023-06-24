import connection from "../config/connectDB";



let homePage = (req, res) => {

    // Logic
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((row) => {
                {
                    data.push({
                        id: row.id,
                        firstName: row.firstName,
                        lastName: row.lastName,
                        email: row.email,
                        address: row.address
                    });
                }
            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}

module.exports = {
    homePage
}