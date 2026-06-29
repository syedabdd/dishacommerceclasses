require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function main() {
  const email = 'abdullahsyed574@gmail.com';
  const password = 'Syed@2003';
  const hashedPassword = await bcrypt.hash(password, 10);

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [result] = await connection.execute(
      'INSERT INTO admins (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );
    console.log('Admin created successfully:', result);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await connection.end();
  }
}

main();
