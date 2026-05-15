const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).json({ msg: 'Hello world1 - from test1' }));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
