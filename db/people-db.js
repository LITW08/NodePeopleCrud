const sql = require('mssql/msnodesqlv8');

const sqlConfig = {
    database: 'OneToManyDemo',
    server: '.\\sqlexpress',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

const getPeople = async () => {
    await sql.connect(sqlConfig);
    const { recordset } = await sql.query('SELECT * FROM People');
    return recordset;
}

const getById = async id => {
    await sql.connect(sqlConfig);
    const { recordset } = await sql.query`SELECT * FROM People WHERE Id = ${id}`;
    return recordset[0];
}

const update = async ({id, firstName, lastName, age}) => {
    await sql.connect(sqlConfig);
    await sql.query`UPDATE People SET FirstName = ${firstName}, LastName = ${lastName},
    Age = ${age} WHERE Id = ${id}`;
}

const add = async ({ firstName, lastName, age}) => {
    await sql.connect(sqlConfig);
    await sql.query`INSERT INTO People (FirstName, LastName, Age) 
    VALUES (${firstName}, ${lastName}, ${age})`;
}

module.exports = {
    getPeople,
    getById,
    update,
    add
}