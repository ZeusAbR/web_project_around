class Persona {
  constructor(edad, nombre, deporte) {
    this.edad = edad;
    this.nombre = nombre;
    this.deporte = deporte;
  }

curp(){
  console.log(this.edad, this.nombre)
}
ejercicio(){
  console.log( this.deporte)
}
}
const zeus = new Persona(36, "zeus","escalada" );
zeus.curp()
const sarah = new Persona (22, "sarah", "voley");
sarah.curp()