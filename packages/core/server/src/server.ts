import fastify from 'fastify';

async function startServer() {
  const app = fastify();

  app.get('/', async () => {
    return { hello: 'world' };
  });

  return app;
}

export default startServer;
