import Docente from "../orm/Docente";

const obtenerDocentes = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};
const obtenerDocentesTest = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};
const obtenerDocentesTest1 = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};
const obtenerDocentesTest2 = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};
const obtenerDocentesTest3 = function (req, res) {
  Docente.all({
    attributes: ["nombre"]
  }).then(docentes => {
    res.send(JSON.stringify(docentes));
  });
};

export default obtenerDocentes;
