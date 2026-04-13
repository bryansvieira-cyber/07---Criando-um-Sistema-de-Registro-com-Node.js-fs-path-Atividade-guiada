const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'registros', 'registros.txt');
fs.writeFileSync(caminhoArquivo, '\nCliente Cliente: Felipe | Serviço: Driver, Cliente: Gabriela | Serviço: Backup, Cliente: Hugo | Serviço: Rede');
console.log('Registro salvo.');

caminhoArquivo
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
console.log('Histórico:');
console.log(conteudo);