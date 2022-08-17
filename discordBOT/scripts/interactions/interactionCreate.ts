import { CommandInteraction, Client, Interaction, GuildMember } from "discord.js";
import { Commands } from "../../src/Commands";

const handleSlashCommand = (client: Client, interaction: CommandInteraction): void => {
  const slashCommand = Commands.find((c: { name: string; }) => c.name === interaction.commandName);
  if(!slashCommand) {
    return;
  }

  slashCommand.run(client, interaction);
};

export default (client: Client): void => {
  client.on("interactionCreate", (interaction: Interaction) => {
      if (interaction.isCommand()) {
         handleSlashCommand(client, interaction);
      }
      });
};

