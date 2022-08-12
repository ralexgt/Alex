import { Client } from "discord.js";
import interactionCreate from "../scripts/listeners/interactionCreate";
import ready from "../scripts/listeners/ready";
const tokens = require("../tokens");

console.log("Bot is starting...");

const client = new Client ({
  intents: []
});

ready(client);
interactionCreate(client);

client.login(tokens.botToken);
