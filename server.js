const http = require('./http');
const { tokenApi } = require('./config.json');

async function syncDownload() {
   const response = await http.get(`http://api.quuu.linuxpl.eu/todo/${tokenApi}`);
   return response.data;
}

async function syncUpload(data) {
   const response = await http.post(`http://api.quuu.linuxpl.eu/todo/${tokenApi}`, data);
   return response.data;
}

async function syncDelete() {
   const response = await http.post(`http://api.quuu.linuxpl.eu/todo/${tokenApi}`);
   return response.data;
}

module.exports = {
   syncDownload,
   syncUpload,
   syncDelete
};
