import fastify from "fastify";
import { z } from 'zod'

const app = fastify()

app.post('/polls', (request) => {

    const createPollBody = z.object({
        title: z.string()
    }) 

    const { title } = createPollBody.parse(request.body)

    

    return 'hello nlw '
})

app.listen({ port:4848 }).then(() => {
    
})