cmake_minimum_required(VERSION 3.14)
project(GetDiscordDevBadge LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(${CMAKE_SOURCE_DIR}/src)

find_package(dpp REQUIRED)

add_executable(GetDiscordDevBadge
        src/main.cpp
        src/bot/hello.h
)

target_link_libraries(GetDiscordDevBadge PRIVATE dpp::dpp)