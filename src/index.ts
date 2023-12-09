import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";


function main(){
  try{
    AppDataSource.initialize();
    app.listen(3000);
    console.log('Corriendo servidor desde el puerto 3000');
  }catch(error){
    console.log('Error al iniciar la base de datos');
  }
}
main();
