const usuarios = [ 'Alexia', 'Aline', 'Bruno', 'Caique', 'Cláudio' ];

module.exports.getUsuarios = (req, res) => {
  res.render('usuarios', { usuarios })
}
