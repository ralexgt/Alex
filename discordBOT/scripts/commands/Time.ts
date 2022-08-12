import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../../src/Command"


export const Time: Command = {
  name: "time",
  description: "tells the time (UTC)",
  run: async (_client: Client, interaction: CommandInteraction) => {
    const content = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
}