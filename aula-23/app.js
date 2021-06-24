const express = require('express');
const app = express();
const port = 3001;
const { 
  body, 
  validationResult 
} = require('express-validator');

app.use(express.json())

app.use(function(req, res, next) {
  const token = req.header("authorization");
  console.log(token)
  if (token === "Xuxinha") {
    next();
  }
  return res.status(401).send("Você não tem permissão para acessar esse recurso.")
})

app.post('/signIn', 
  (body('login').isEmail, 
  body('password').isLength({ min: 6, max: 16 })),
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  res.send("Xuxinha")

})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})