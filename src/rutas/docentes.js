import Docente from "../orm/Docente";

const obtenerDocentes = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};
const obtenerDocentesTest = function (req, res) {
  Docente.!all({
    attributes: ["nombre1"]
  })dsfds.then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};

export default obtenerDocentes;
