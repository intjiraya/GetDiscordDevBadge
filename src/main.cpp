#include <dpp/dpp.h>
#include <iostream>
#include <string>
#include "bot/hello.h"

using namespace std;

string get_input(const string& prompt) {
    cout << prompt;
    string input;
    getline(cin, input);
    return input;
}

void await_exit(dpp::cluster& bot) {
    cout << "\n[INFO] Press Enter to exit...";
    cin.ignore();
    bot.shutdown();
    exit(0);
}

int main() {
    cout << "[INFO] Starting bot setup...\n";

    string token = get_input("Enter your bot token: ");
    string guild_id_str = get_input("Enter your guild ID: ");

    if (token.empty() || guild_id_str.empty()) {
        cerr << "[ERROR] Missing required parameters\n";
        return 1;
    }

    dpp::snowflake guild_id;
    try {
        guild_id = stoull(guild_id_str);
    } catch (...) {
        cerr << "[ERROR] Invalid guild ID format\n";
        return 1;
    }

    dpp::cluster bot(token);

    bot.on_log([](const dpp::log_t& log) {
        if (log.severity > dpp::ll_debug)
            cout << "[" << dpp::utility::loglevel(log.severity) << "] " << log.message << "\n";
    });

    bot.on_ready([&bot, guild_id](const dpp::ready_t& event) {
        cout << "[INFO] Logged in as " << bot.me.username << "\n";

        bot.guild_get(guild_id, [&bot, guild_id](const dpp::confirmation_callback_t& res) {
            if (res.is_error()) {
                cerr << "[ERROR] Bot is not in the specified guild\n";
                bot.shutdown();
                await_exit(bot);
            } else {
                cout << "[INFO] Registering commands...\n";
                register_hello_command(bot, guild_id);
            }
        });
    });

    bot.on_slashcommand([&bot](const dpp::slashcommand_t& event) {
        if (event.command.get_command_name() == "hello") {
            cout << "[INFO] Received 'hello' command\n";
            handle_hello_command(event);
        }
    });

    bot.start(dpp::st_wait);
    return 0;
}