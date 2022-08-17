import { Client } from "discord.js";
import { Commands } from "../../src/Commands";
import welcome from "./welcome";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        welcome(client);
        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);
    });
};