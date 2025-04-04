
const roads = [
    "Casa de Alice-Casa de Bob","Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos","Casa de Bob-Ayutnamiento",
    "Casa de Daria-Casa de Ernie","Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete","Casa de Grete-Granja",
    "Plaza del Mercado-Oficina de Correos","Plaza del Mercado-Tienda",
    "Plaza del Mercado-Ayuntamiento","Tienda-Ayuntamiento"
];

function construirGrafico(arista){
    let grafico = Object.create(null);
    function addArista(from, to){
        if(from in grafico){
            grafico[from].push(to);
        } else {
            grafico[from] = [to];
        }
    }
    for (let [from, to] of arista.map(r => r.split("-"))) {
        addArista(from, to);
        addArista(to, from);
    }
    return grafico;
}

const roadGraph = construirGrafico(roads);

console.log(roadGraph);


