const express = require('express');
const cors = require('cors');
const app = express();

// 允許來自所有來源的請求
app.use(cors());

// 設置 API 路由
app.get('/api/data', (req, res) => {
  res.json({ name: 'John', job: 'Developer' });
});

// 設置伺服器端口
app.listen(4000, () => {
    console.log('API server is running on http://localhost:3000');
  });
