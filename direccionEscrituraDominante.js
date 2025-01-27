
function contarPor(elementos, nombreGrupo){
    let cuentas = [];
    for (let elemento of elementos){
        let nombre = nombreGrupo(elemento);
        let conocido = cuentas.findIndex(c => c.nombre = nombre);
        if (conocido == -1) {
            cuentas.push({nombre, cuenta: 1});
        } else {
            cuentas[conocido].cuenta++;
        }
    }
    return cuentas;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function calcularDireccionDominante(texto){
    let contando = contarPor(texto, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (contando.length == 0) return "ltr";

    return contando.reduce((a,b) => a.contando > b.contando ? a : b);
}

console.log(calcularDireccionDominante("Hola!"));
