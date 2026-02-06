const express = require('express');
const app = express();

app.use(express.json());

// ✅ root test (IMPORTANT)
app.get('/', (req, res) => {
  res.send('Server is alive');
  });

  // ✅ POST test route
  app.post('/test', (req, res) => {
    console.log('POST BODY:', req.body);
      res.json({ success: true });
      });

      app.listen(3000, () => {
        console.log('Server running on port 3000');
        });
        
        