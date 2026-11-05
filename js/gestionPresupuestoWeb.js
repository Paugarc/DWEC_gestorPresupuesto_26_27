function mostrarDatoEnId(idElemento, valor){
let elemento = document.getElementById(idElemento);

elemento.textContent = valor;
}

function mostrarGastoWeb(idElemento, gasto){
let elementoGasto = document.getElementById(idElemento);

const divGastoDescrip = document.createElement("div");
divGastoDescrip.className = "gasto-descripcion";
divGastoDescrip.textContent = gasto.descripcion;

const divGastoFecha = document.createElement("div");
divGastoFecha.className = "gasto-fecha";
divGastoFecha.textContent = gasto.fecha;

const divGastoValor = document.createElement("div");
divGastoValor.className = "gasto-valor";
divGastoValor.textContent = gasto.valor;

const divGastoEtiqueta = document.createElement("div");
divGastoEtiqueta.className = "gasto-etiquetas"

 for (const ETIQUETA of gasto.etiquetas) {
        const spanGastoEtiqueta = document.createElement("span");
        spanGastoEtiqueta.className = "gasto-etiquetas-etiqueta";
        spanGastoEtiqueta.textContent = ETIQUETA;

        divGastoEtiqueta.append(spanGastoEtiqueta);
    }

const divGasto = document.createElement("div");
divGasto.className="gasto"
divGasto.append(divGastoDescrip, divGastoFecha, divGastoValor, divGastoEtiqueta);

elementoGasto.append(divGasto);
}

function mostrarGastosAgrupadosWeb(){
    
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}