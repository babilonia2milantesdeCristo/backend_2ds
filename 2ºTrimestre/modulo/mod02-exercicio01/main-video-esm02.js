import { alugarFilme, devolverFilme } from './video-esm.js';

console.log("--- Executando Sistema da Videoteca --- \n")

const registroAluguel1 = alugarFilme("Interestelar", "02/06/2026", 14.90);

console.log(registroAluguel1);

const registroDevolucao = devolverFilme("Interestelar", "09/06/2026");

console.log(registroDevolucao);

const registroAluguel2 = alugarFilme("Os Croods", "07/07/777", 2938.68);

console.log(registroAluguel2);

const registroDevolucao2 = devolverFilme("Os Croods", "12/07/777");

console.log(registroDevolucao2);