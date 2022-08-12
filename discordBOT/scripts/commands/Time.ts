import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../../src/Command"

type Time = number | string;

export const Time: Command = {
  name: "time",
  description: "tells the time (UTC)",
  run: async (_client: Client, interaction: CommandInteraction) => {
    const time = new Date();
    let hours: Time;
    time.getHours() < 10 ? hours = `0${time.getHours()}` : hours = time.getHours();  
    let minutes: Time;
    time.getMinutes() < 10 ? minutes = `0${time.getMinutes()}` : minutes = time.getMinutes(); 
    let seconds: Time;
    time.getSeconds() < 10 ? seconds = `0${time.getSeconds()}` : seconds = time.getSeconds(); 
    const content = `The time is ${hours}:${minutes}:${seconds} UTC`;
    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
}