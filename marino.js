/* -mostrarle las parirticularidades de los 3 celulares
   -cada uno debe tener color, peso, resolucion de 
   pantalla, camara y memoria RAM 
   -deben poder prender, reiniciar, tomar fotos y grabar */
   
   class celular{
      constructor(color,peso,tamaño,rdc,ram){
         this.color = color ;
         this.peso = peso ;
         this.tamaño = tamaño ;
         this.resolucionDeCamara = rdc;
         this.memoriaRAM = ram ;
         this.encendido = false ;
      }
      presionarBotonDeEncendido(){
         if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
         } else {
            alert("celular apagado");
            this.encendido == false;
         }
      }
      reiniciar(){
         if (this.encendido == true){
            alert("reiniciando celular");
         } else{
            alert("el celular esta apagado");
         }
      }
      tomarFotos(){
         alert(`foto tomada a una resolucion de: ${this.resolucionDeCamara}`);
      }
      grabarVideos(){
         alert(`grabando video en ${this.resolucionDeCamara}`);
      }
      mobileInfo(){
         return `
         color: <b>${this.color}</b></br>
         peso: <b>${this.peso}</b></br>
         tamaño: <b>${this.tamaño}</b></br>
         resolucion de video: <b>${this.resolucionDeCamara}</b></br>
         memoria RAM: <b>${this.memoriaRAM}</b><br>
         `;

      }
   }
   
   celular1 = new celular("rojo","150g","5","hd","1GB");
   celular2 = new celular("negro","155g","5.4","full hd","2GB");
   celular3 = new celular("azul","146g","5.9","full hd","2GB");

   document.write(`
  ${ celular1.mobileInfo()} <br>
  ${ celular2.mobileInfo()} <br>
  ${ celular3.mobileInfo()} <br>
   `);
   