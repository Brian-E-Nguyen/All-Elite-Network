const { defineConfig } = require('cypress');
const { MongoClient } = require('mongodb');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      on('task', {
        async deleteUser({ query, operation, collection }) {
          console.log({ query, operation, collection });
          const client = await MongoClient.connect(
            'mongodb://127.0.0.1:27017/all-elite-network?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'
          );
          console.log('connected to mongo');
          const db = client.db('all-elite-network');
          console.log(db);
          const result = await db.collection(collection)[operation](query);
          console.log(result);
          client.close();
          return result;
        },
      });
    },
  },
});
