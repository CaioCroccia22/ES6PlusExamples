"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//O map é uma estrutura de diciionario, conjunto de valores, e esses valores são objetos
var meuMap = new Map();

//Criar o item
meuMap.set('Nome', 'Caio Croccia');
meuMap.set('Stack', 'html, css, js');
meuMap.set('Idade', '23');
console.log(meuMap);

//Pegar o item 
var getMyMap = meuMap.get('Nome');
console.log(getMyMap);

//Pegar a quantidade de itens
console.log(meuMap.size);

//Verificar se a chave tem no map
console.log(meuMap.has('Nome'));

//Fazer a limpeza do map
// meuMap.clear();

// console.log(meuMap.size);

//Iteração pelo Map
//Para chamar os valores trocar keys por value ou entries para saber a entrada
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.entries()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _step2$value = _slicedToArray(_step2.value, 2),
      _chave = _step2$value[0],
      valor = _step2$value[1];
    console.log("".concat(_chave, ":  ").concat(valor));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
meuMap["delete"]('Stack');
console.log(meuMap);

// Set------------------------------------------
// Os valores não podem repetir dentro do Set

var cpfs = new Set();
cpfs.add('73078154009');
cpfs.add('87610204005');
cpfs.add('73407482027');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

// As funções do Map também pode ser usada aqui

cpfs.forEach(function (valor) {
  console.log(valor);
});