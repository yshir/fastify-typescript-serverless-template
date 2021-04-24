import fastify from 'fastify'

const server = fastify()

server.get('/ping', async(req, reply) => {
  return {
    ts: Date.now(),
  }
})

server.listen(8080, (err, addr) => {
  if (err){
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server listening at ${addr}`)
})
