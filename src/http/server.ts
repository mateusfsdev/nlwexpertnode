import fastify from "fastify";

import { cretaePoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-polls";

const app = fastify()

app.register(cretaePoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port:4848 }).then(() => {
})