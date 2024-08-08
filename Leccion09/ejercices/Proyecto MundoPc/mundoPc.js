class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

let dispositivoEntrada1 = new DispositivoEntrada("logitech", "maus");
console.log(dispositivoEntrada1);

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(marca, tipoEntrada) {
    super(tipoEntrada, marca);
    this.idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `idRaton: ${this.idRaton}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada}`;
  }
}

let raton1 = new Raton("logitech", "USB");
console.log(raton1.toString());

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(marca, tipoEntrada) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  toString() {
    return `idTeclado: ${this._idTeclado}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada}`;
  }
}

let teclado1 = new Teclado("samsung", "USB");
console.log(teclado1.toString());

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamano) {
    this._idMonitores = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamano = tamano;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }

  get tamano() {
    return this._tamano;
  }
  set tamano(tamano) {
    this._tamano = tamano;
  }

  toString() {
    return `idMonitores: ${this._idMonitores}, marca: ${this._marca}, tamaño: ${this._tamano}`;
  }
}

let monitor1 = new Monitor("lenovo", "15 pulgadas");
console.log(monitor1.toString());

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  toString() {
    return `idComputadora: ${this._idComputadora}\nNombre: ${
      this._nombre
    }\nMonitor: ${this._monitor.toString()}\nTeclado: ${this._teclado.toString()}\nRatón: ${this._raton.toString()}`;
  }
}

let computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);
console.log(computadora1.toString());

class Orden {
  static get MAX_PRODUCTOS() {
    return 5;
  }

  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadora = [];
  }
  agregarComputadora(computadora) {
    if (this._computadora < Orden.MAX_PRODUCTOS) {
      this._computadora.push(computadora);
    } else {
      console.log("no se puede agregar mas computadoras");
    }
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadora) {
      computadorasOrden += `\n${computadora}`;
    }
    console.log(`orden: ${this._idOrden}, computadoras: ${computadorasOrden}`);
  }
}

let orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.mostrarOrden();