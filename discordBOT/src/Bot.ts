import { Client } from "discord.js";
import interactionCreate from "../scripts/listeners/interactionCreate";
import ready from "../scripts/listeners/ready";
import tokens from "../tokens.json";

console.log("Bot is starting...");

const client = new Client ({
  intents: []
});

ready(client);
interactionCreate(client);

client.login(tokens.botToken);
