const express = require('express');
const app = express();
const port = 3001;

// Placeholder for database connection
// const { Pool } = require('pg');
// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database',
//   password: 'your_password',
//   port: 5432,
// });

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
