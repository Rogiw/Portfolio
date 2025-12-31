const fs = require("fs");
const os = require("os");
const settingsPath = ".vscode/settings.json";
const globalSettingsPath =  "C:/Users/rogiw/AppData/Roaming/Code/User/settings.json"
const URlLivePreview = 'vscode://settings/livePreview.hostIP'

function ReconfigIP(path){

  //se exitir settings na pasta global appdata, lê e mantém configurações padrao do servidor
  if (fs.existsSync(path)){
  const oldSettings = JSON.parse(fs.readFileSync(path, "utf8"));
  settings = { ...oldSettings, ...settings }; // sobrescreve host e defaultPreviewPath com o padraozinho 
  }

  //salva as configs atualizadas na pasta global appdata
  fs.writeFileSync(path, JSON.stringify(settings, null, 2));
  console.log(`Live Preview configurado para: ${settings["livePreview.host"]}`);
}


let ip;
const interfaces = os.networkInterfaces();
for (let name in interfaces) {
  for (let net of interfaces[name]) {
    if (net.family === "IPv4" && !net.internal) {
      ip = net.address;
      break;
    }
  }
  if (ip) break;
}

let settings = {
  "livePreview.host": ip || "127.0.0.1",
  "livePreview.hostIP": ip || "127.0.0.1",
  "livePreview.defaultPreviewPath": "/index.html",
  "livePreview.reloadOnSave": true
};
//Reconfigura o IP no settings da pasta global appdata
ReconfigIP(globalSettingsPath);



// Configuração de um servidor HTTP simples para teste
const http = require("http");
const { getDefaultSettings } = require("http2");
const port = 30000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Servidor rodando com sucesso!\n");
});

server.listen(port, ip, () => {
  console.log(`Servidor ativo em http://${ip}:${port}`);
});