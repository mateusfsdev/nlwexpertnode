import fastify from "fastify";

const app = fastify()

app.get('/hello', () => {
    return 'hello'
})

app.listen({ port:4848 }).then(() => {
    
})