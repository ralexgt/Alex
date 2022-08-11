import { Client, GatewayIntentBits} from "discord.js";

export const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function main() {
  client.once("ready", () => {
    console.log("Bot online");
  })

	const  time = new Date();
	client.on("interactionCreate", async interaction => {
		if (!interaction.isChatInputCommand()) return;

		const { commandName } = interaction;

		if (commandName === "time") {
			console.log("done")
			await interaction.reply(`${time.getHours()-3}:${time.getMinutes()}:${time.getSeconds()} UTC`);
		}
	});

  client.login("MTAwNzI2MTYxMTg2MzU3MjUzMA.Go718I.-1Ulcm1IlvejUC2gmGmGQ8G8Qhxhh-LgkMb2J0");
}

main();

