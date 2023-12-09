"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
function main() {
    try {
        db_1.AppDataSource.initialize();
        app_1.default.listen(3000);
        console.log('Corriendo servidor desde el puerto 3000');
    }
    catch (error) {
        console.log('Error al iniciar la base de datos');
    }
}
main();
