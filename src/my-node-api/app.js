const express = require('express');
const cors = require('cors'); // 引入cors模块

const app = express();
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000', // 允许的来源
  methods: 'GET,POST,PUT,DELETE', // 允许的HTTP方法
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  const { id } = req.query;

  if (id) {
    // 生成一个示例数组
    const dataArray = ['Item 1', 'Item 2', 'Item 3'];

    res.json(dataArray);
  } else {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

app.use(cors()); // 使用cors中间件

// 其他路由和中间件

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
