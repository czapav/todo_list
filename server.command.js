const { syncDownload, syncUpload, syncDelete } = require('./server');
const { allListTodo, removeAll, addTodo } = require('./todo');

const syncDownloadCommand = {
   command: 'syncDownload',
   aliases: ['d'],
   describe: 'Download todo list with Api',
   handler: async () => {
      try {
         const download = async () => await syncDownload();

         download()
            .then(response => {
               removeAll();

               response.map(todo => {
                  addTodo(todo);
               });
            })
            .catch(error => console.log('No data from API'));
      } catch (error) {
         console.log(error.message);
      }
   }
};

const syncUploadCommand = {
   command: 'syncUpload',
   aliases: ['u'],
   describe: 'Uploud todo list to Api',
   handler: async () => {
      const listTodo = allListTodo();
      try {
         const resp = await syncUpload(listTodo);
         console.log('Uploud OK');
      } catch (error) {
         console.log(error.message);
      }
   }
};

const syncDeleteCommand = {
   command: 'syncDelete',
   aliases: ['del'],
   describe: 'Delete todo list with Api',
   handler: async () => {
      try {
         const resp = await syncDelete();
         console.log('Delete OK');
      } catch (error) {
         console.log(error.message);
      }
   }
};

module.exports = [syncDownloadCommand, syncUploadCommand, syncDeleteCommand];
