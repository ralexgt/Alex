import { CommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../../src/Commands";

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  const slashCommand = Commands.find((c: { name: string; }) => c.name === interaction.commandName);
  if(!slashCommand) {
    interaction.followUp({ content: "Not a command" });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
};

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
      if (interaction.isCommand()) {
          await handleSlashCommand(client, interaction);
      }
  });
};

