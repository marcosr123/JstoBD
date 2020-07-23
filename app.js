const mysql = require('mysql');

const con = mysql.createConnection({
    host: '', 
    user: '', 
    password: '', 
    database: '' 
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})

con.query('SELECT * FROM author', (err, rows) => {
    if (err) throw err
    console.log('Authors: ', rows, '\n\n')
})

con.query('SELECT * FROM book', (err, rows) => {
    if (err) throw err

    console.log('Books: ', rows, '\n\n')
})