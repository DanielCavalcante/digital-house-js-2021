const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const upload = multer({ dest: 'images' })

app.set('view engine', 'ejs');
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.render('image')
})

app.get('/images', (req, res) => {
  res.render('images')
})

app.post('/image-upload', upload.single('image'), (req, res) => {
  const { filename, size } = req.file;
  res.render('image-render', { image: `/images/${filename}`, size })
})

app.post('/multiple-image-upload', upload.array('images'), (req, res) => {
  res.send(req.files)
})

app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
})