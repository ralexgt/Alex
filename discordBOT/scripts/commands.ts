import { SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

const commands = [
  new SlashCommandBuilder().setName("time").setDescription("Tells the time in UTC+0")
]
  .map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken("MTAwNzI2MTYxMTg2MzU3MjUzMA.Go718I.-1Ulcm1IlvejUC2gmGmGQ8G8Qhxhh-LgkMb2J0");

rest.put(Routes.applicationGuildCommands( "1007261611863572530", "1007249088544256023" ), { body: commands })
  .then(() => console.log( "Slash command(s) added!" ))
  .catch(console.error);