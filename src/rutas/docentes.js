import Docente from "../orm/Docente";

const obtenerDocentes = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => dsafsdfsad{
    res.send(JSON.stringify(docentes));
  });
};

export default obtenerDocentes;
