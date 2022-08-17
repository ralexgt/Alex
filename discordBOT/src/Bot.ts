import { Client, GatewayIntentBits, GuildMember, IntentsBitField } from "discord.js";
import interactionCreate from "../scripts/interactions/interactionCreate";
import ready from "../scripts/interactions/ready";
import "dotenv/config";


function main(){
  console.log("Bot is starting...");

  const client = new Client ({
    intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers]
  });

  ready(client);
  interactionCreate(client);

  client.login(process.env.botToken);
}

main();