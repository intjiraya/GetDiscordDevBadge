const readline = require("readline");
const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
const { command } = require("../bot/hello.js");

async function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve =>
        rl.question(query, answer => {
            rl.close();
            resolve(answer.trim());
        })
    );
}

async function pauseOnError(message) {
    console.error(`[ERROR] ${message}`);
    console.log("[INFO] Press Enter to exit...");
    await askQuestion(""); // Ожидает нажатия Enter перед завершением
    process.exit(1);
}

async function main() {
    console.log("[INFO] Starting bot setup...");

    const token = (await askQuestion("Enter your bot token: ")).trim();
    const guildId = (await askQuestion("Enter your guild ID: ")).trim();

    if (!token || !guildId) {
        await pauseOnError("Bot token and Guild ID are required.");
    }

    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    const rest = new REST({ version: "10" }).setToken(token);

    try {
        console.log("[INFO] Logging in with provided token...");
        await client.login(token);

        const clientId = client.user?.id;
        if (!clientId) {
            await pauseOnError("Failed to retrieve Client ID from bot token.");
        }

        console.log(`[INFO] Logged in as ${client.user.tag} (Client ID: ${clientId})`);

        console.log("[INFO] Checking bot's presence on the server...");
        const guild = await client.guilds.fetch(guildId).catch(() => null);

        if (!guild) {
            await pauseOnError(
                "Bot is not a member of the server or the server ID is invalid."
            );
        }

        console.log(`[INFO] Bot is a member of provided server.`);

        console.log("[INFO] Registering slash command...");
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: [command.data.toJSON()],
        });

        console.log("[SUCCESS] Command registered successfully!");

        client.once("ready", () => {
            console.log(`[INFO] Bot is now online and ready! Logged in as ${client.user.tag}`);
        });

        client.on("interactionCreate", async interaction => {
            if (interaction.isCommand() && interaction.commandName === "hello") {
                try {
                    console.log("[INFO] Received 'hello' command.");
                    await command.execute(interaction);
                } catch (error) {
                    console.error("[ERROR] Failed to execute 'hello' command:", error);
                    await interaction.reply({
                        content: "There was an error while executing this command!",
                        ephemeral: true,
                    });
                }
            }
        });
    } catch (error) {
        await pauseOnError(`An error occurred during setup: ${error.message}`);
    }
}

main().catch(async error => {
    await pauseOnError(`Unhandled exception: ${error.message}`);
});
