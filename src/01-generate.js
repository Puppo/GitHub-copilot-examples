// generate a fastify server and start it
// it will listen on port 3000
// and it will expose a single route /hello

const fastify = require('fastify')({
  logger: true
})

fastify.get('/hello', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()