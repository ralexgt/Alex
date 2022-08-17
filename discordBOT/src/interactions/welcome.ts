import { Client, GuildMember, TextChannel } from "discord.js";
import "dotenv/config";

export default (client: Client) => {
  client.on("guildMemberAdd", (member: GuildMember) => {
    console.log("someone joined the server");

    const welcome = `Welcome, <@${member.id}> ! The only thing to do here is [/time]...`;
    
    const channel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID!) as TextChannel;

    if(!channel) { console.log("no text channel"); return; }
    channel.send(welcome);
  });
}