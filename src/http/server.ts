import { voteOnPoll } from "./routes/vote-on-polls";
import { cretaePoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import cookie from "@fastify/cookie";
import fastify from "fastify";

const app = fastify()

app.register( cookie, {
	secret: "polls-app-nlw-expert",
	hook: 'onRequest',

})

app.register(cretaePoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port:4848 }).then(() => {
})