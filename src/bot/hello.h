#pragma once
#include <dpp/dpp.h>

void register_hello_command(dpp::cluster& bot, dpp::snowflake guild_id) {
    dpp::slashcommand hello_cmd("hello", "Hi!", bot.me.id);

    bot.guild_command_create(hello_cmd, guild_id, [](const dpp::confirmation_callback_t& res) {
        if (res.is_error()) {
            std::cerr << "[ERROR] Command registration failed: " << res.get_error().message << "\n";
            throw std::runtime_error("Command registration failed");
        }
    });
}

void handle_hello_command(const dpp::slashcommand_t& event) {
    dpp::embed embed = dpp::embed()
        .set_title("Hello there!")
        .set_color(dpp::colors::yellow)
        .set_description("You're about to get a dev badge!");

    dpp::component button = dpp::component()
        .set_type(dpp::cot_button)
        .set_label(u8"Leave a star ⭐")
        .set_style(dpp::cos_link)
        .set_url("https://github.com/intjiraya/GetDiscordDevBadge");

    dpp::message msg(event.command.channel_id, embed);
    msg.add_component(dpp::component().add_component(button));
    
    event.reply(msg);
}