const app = require('./application/app');

//  IIFE START APP
(async () => {
  await app.listen(app.get('port'));
  console.log(`Server on Port ${app.get('port')}`);
})();
