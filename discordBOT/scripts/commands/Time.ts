import { CommandInteraction, Client } from "discord.js";
import { Command } from "../../src/Command"

type Time = number | string;

export const Time: Command = {
  name: "time",
  description: "tells the time (UTC)",
  run: async (_client: Client, interaction: CommandInteraction) => {
    const time = new Date();
    let hours: Time = time.getUTCHours();
    if(hours < 10) hours = `0${hours}`; 
    let minutes: Time = time.getUTCMinutes();
    if(minutes < 10) minutes = `0${minutes}`;
    let seconds: Time = time.getUTCSeconds();
    if(seconds < 10) seconds = `0${seconds}`;

    const content = `The time is ${hours}:${minutes}:${seconds} UTC`;
      await interaction.reply({
      ephemeral: true,
      content
    });
  }
}