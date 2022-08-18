import { Client, IntentsBitField } from "discord.js";
import interactionCreate from "./interactions/interactionCreate";
import ready from "./interactions/ready";
import "dotenv/config";


function main(){
  console.log(process.env.BOT_INVITATION_URL);
  console.log("Bot is starting...");

  const client = new Client ({
    intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers]
  });

  ready(client);
  interactionCreate(client);

  client.login(process.env.BOT_TOKEN);
}

main();