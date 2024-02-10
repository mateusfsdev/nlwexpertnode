import fastify from "fastify";

import { cretaePoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

const app = fastify()

app.register(cretaePoll)
app.register(getPoll)

app.listen({ port:4848 }).then(() => {
})