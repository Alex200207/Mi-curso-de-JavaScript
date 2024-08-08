class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(fechaRegistro){
        this._idCliente = ++ Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;

    }
    get idCliente(){
        return this.idCliente
        
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro =  fechaRegistro
    }
    toString(){
        return `${super.toString()}ID: ${this.idCliente}fecha: ${this._fechaRegistro}`
    }
}
