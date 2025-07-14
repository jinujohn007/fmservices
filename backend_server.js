const express = require('express');
const cors = require('cors');
const rfqRoute = require('./routes/rfq');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/rfq', rfqRoute);

// Simple root endpoint
app.get('/', (req, res) => {
  res.send('fmservices.online backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});