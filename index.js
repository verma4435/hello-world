const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).json({ msg: 'Hello world1 - from t1' }));
app.get('/:name', (req, res) => res.status(200).json({msg: `well done ${req.params.name || 'user'}`}))

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
