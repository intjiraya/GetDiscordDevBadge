const {
    EmbedBuilder,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

exports.command = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Hi!"),
    async execute(interaction) {
        const embedMessage = new EmbedBuilder()
            .setTitle("Hello there!")
            .setColor("Yellow")
            .setDescription("You're about to get a dev badge!");

        const button = new ButtonBuilder()
            .setLabel("Leave a star ⭐")
            .setURL("https://github.com/intjiraya/GetDiscordDevBadge")
            .setStyle(ButtonStyle.Link);

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.reply({ embeds: [ embedMessage ], components: [ row ] });
    },
};
