import mysql from 'mysql2'

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export const getNotes = async () => {
    const [rows] = await pool.query('SELECT * FROM notes')
    return rows
}

const notes = await getNotes()
// console.log(notes)

export const getNote = async (id) => {
    const [row] = await pool.query(`
        SELECT *
        FROM notes
        WHERE id = ?
        `, [id])
    return row[0]
}

const note = await getNote(100)
// console.log(note)

export const createNote = async (title, contents) => {
    const [result] = await pool.query(`
        INSERT INTO notes (title, contents)
        VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId
    return getNote(id)
}

const result = await createNote('bebra', 'nuhay')
console.log(result)