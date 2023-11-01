const express = require('express');
const cors = require('cors'); // 引入cors模块
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000', // 允许的来源
  methods: 'GET,POST,PUT,DELETE', // 允许的HTTP方法
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
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
const secretKey = 'your-secret-key';

// Simulated user data
const users = [
  {
    id: 1,
    phone: '1234567890',
    password: 'password123',
  },
];
app.use(cors()); // 使用cors中间件
app.post('/login', (req, res) => {
  // 前端随便输入手机号和密码都返回token
  const token = jwt.sign({ id: 1 }, secretKey);
  res.json({ token });
});

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token is not valid' });
    }
    req.userId = decoded.id;
    next();
  });
}

// Add user route
app.post('/addUser', verifyToken, (req, res) => {
  // Implement the logic to add a new user here
  res.json({ message: 'User added successfully' });
});

// Delete user route
app.delete('/deleteUser/:userId', verifyToken, (req, res) => {
  const userId = req.params.userId;
  // Implement the logic to delete the user with the given ID here
  res.json({ message: 'User deleted successfully' });
});

// Show users route
app.get('/showUsers', verifyToken, (req, res) => {
  // Implement the logic to fetch and return user data here
  const userData = users.map(user => {
    return { id: user.id, phone: user.phone };
  });
  res.json(userData);
});

// 其他路由和中间件

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
