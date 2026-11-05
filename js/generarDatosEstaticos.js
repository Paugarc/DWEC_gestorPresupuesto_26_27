import * as gP from './gestionPresupuesto.js'
import * as gPW from './gestionPresupuestoWeb.js'

gP.actualizarPresupuesto(1500)

gPW.mostrarDatoEnId("presupuesto", gP.mostrarPresupuesto());