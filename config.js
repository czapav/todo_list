const { status } = require('./config.json');

function getStatusForID(idStatus) {
   let arr = [];
   status.map(el => {
      if (el.id == idStatus) arr = el;
   });
   return arr;
}

function getAllStringStatus(status) {
   let str = '';
   status.map(value => {
      str += `${value.id} - ${value.name}; `;
   });
   return str;
}

const strStatus = getAllStringStatus(status);

module.exports = { getStatusForID, strStatus };
