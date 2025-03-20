# GetDiscordDevBadge

Easily and securely obtain the **Active Developer Badge** for your Discord profile! This bot allows you to quickly set up a Discord bot and run a simple command to qualify for the badge.

---

## Localized READMEs

[![RussianFlag](https://flagsapi.com/RU/flat/64.png)](.github/README-ru.md)
[![USFlag](https://flagsapi.com/US/flat/64.png)](README.md)

---

## Table of Contents
1. [Installation](#installation)
2. [Getting Started](#getting-started)
   - [Creating a Discord Server](#creating-a-discord-server)
   - [Setting Up the Bot](#setting-up-the-bot)
   - [Running the Bot](#running-the-bot)
3. [Usage](#usage)
4. [FAQ](#faq)
5. [Support](#support)
6. [Contributing](#contributing)
7. [License](#license)

---

## Installation

1. Go to the [Releases Page](https://github.com/intjiraya/GetDiscordDevBadge/releases).
2. Download the latest stable version (`.exe` executable file).
3. Save the file to a convenient location on your computer.

---

## Getting Started

### Creating a Discord Server
1. Create a new Discord server or use an existing one.
   - To create a new server:
      - Click the "+" button in Discord.
      - Select "Create My Own" and enable the **Community** feature (Server Settings > Enable Community).
      - Follow Discord's prompts to complete the setup.
   - **Note**: You can also use an existing server.

---

### Setting Up the Bot
1. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and log in.
2. Create a new application:
   - Click the **New Application** button in the top right corner.
   - Name your application (e.g., "DevBadgeBot").
   - **Note**: You can also use an existing application.
3. Set up the bot:
   - Navigate to the **Bot** tab and click **Add Bot**.
   - Under the **OAuth2** tab, select the `bot` scope.
   - In the **Text Permissions** section, enable:
      - `Send Messages`
      - `Embed Links`
   - Alternatively, you can grant the `Administrator` permission (less secure).
4. Copy the generated OAuth2 URL and open it in your browser.
5. Select the server where you want to add the bot and authorize it.

---

### Running the Bot
1. Run the downloaded `.exe` file.
2. Return to the [Discord Developer Portal](https://discord.com/developers/applications), navigate to your bot's page, and go to the **Bot** section.
3. Click **Reset Token** and copy the token.
4. Paste the token into the console application when prompted.
5. Copy your server ID:
   - Right-click your server's avatar in Discord.
   - Select **Copy Server ID** (if the option is not visible, enable Developer Mode in Discord settings: User Settings > Advanced > Developer Mode).
6. Enter the server ID into the program.

---

## Usage
1. Once the bot is running, go to any text channel in your server.
2. Type the command `/hello`.
3. The bot will respond with a message, and you will qualify for the **Active Developer Badge**.
4. After running the command, go to https://discord.com/developers/active-developer, select the server where the command was executed, and choose the bot associated with the command.

---

## FAQ

### 1. Do I need to create a new server?
No, you can use an existing server. However, if you don't have one, creating a new server is recommended.

### 2. What permissions does the bot need?
The bot requires the following permissions:
- `Send Messages`
- `Embed Links`

Alternatively, you can grant the `Administrator` permission, but this is less secure.

### 3. How do I enable Developer Mode in Discord?
- Go to **User Settings** > **Advanced**.
- Toggle on **Developer Mode**.

### 4. What if I lose my bot token?
You can reset the token in the [Discord Developer Portal](https://discord.com/developers/applications) under the **Bot** section.

---

## Support
If you encounter any issues or have questions, feel free to:
- Open an issue on the [GitHub repository](https://github.com/intjiraya/GetDiscordDevBadge/issues).

---

## Contributing
We welcome contributions! If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Notes
- The **Active Developer Badge** is awarded by Discord to users who have created and maintained an active bot. This tool simplifies the process of qualifying for the badge.
- Ensure you comply with Discord's [Terms of Service](https://discord.com/terms) and [Developer Policy](https://discord.com/developers/docs/policy).