import fastify from "fastify";

import { cretaePoll } from "./routes/create-poll";

const app = fastify()

app.register(cretaePoll)

app.listen({ port:4848 }).then(() => {
})