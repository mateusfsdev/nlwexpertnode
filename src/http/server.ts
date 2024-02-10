import fastify from "fastify";

const app = fastify()

app.post('/polls', (request) => {
    console.log(request.body.title)
    return 'hello nlw '
})

app.listen({ port:4848 }).then(() => {
    
})