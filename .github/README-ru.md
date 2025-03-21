﻿# GetDiscordDevBadge

Легко и безопасно получите **Active Developer Badge** для вашего профиля в Discord! Этот бот позволяет быстро настроить Discord-бота и выполнить простую команду, чтобы получить значок.

---

## Локализированные READMEs

[![RussianFlag](https://flagsapi.com/RU/flat/64.png)](README-ru.md)
[![USFlag](https://flagsapi.com/US/flat/64.png)](../README.md)

---

## Оглавление
1. [Установка](#установка)
2. [Начало работы](#начало-работы)
   - [Создание Discord-сервера](#создание-discord-сервера)
   - [Настройка бота](#настройка-бота)
   - [Запуск бота](#запуск-бота)
3. [Использование](#использование)
4. [Часто задаваемые вопросы](#часто-задаваемые-вопросы)
5. [Поддержка](#поддержка)
6. [Участие в разработке](#участие-в-разработке)
7. [Лицензия](#лицензия)

---

## Установка

1. Перейдите на страницу [релизов](https://github.com/intjiraya/GetDiscordDevBadge/releases).
2. Скачайте последнюю стабильную версию (файл `.exe`).
3. Сохраните файл в удобное место на вашем компьютере.

---

## Начало работы

### Создание Discord-сервера
1. Создайте новый Discord-сервер или используйте существующий.
   - Чтобы создать новый сервер:
      - Нажмите кнопку "+" в Discord.
      - Выберите "Создать свой" и включите функцию **Сообщество** (Настройки сервера > Включить сообщество).
      - Следуйте инструкциям Discord для завершения настройки.
   - **Примечание**: Вы также можете использовать существующий сервер.

---

### Настройка бота
1. Перейдите на [Discord Developer Portal](https://discord.com/developers/applications) и войдите в систему.
2. Создайте новое приложение:
   - Нажмите кнопку **New Application** в правом верхнем углу.
   - Назовите ваше приложение (например, "DevBadgeBot").
   - **Примечание**: Вы также можете использовать существующее приложение.
3. Настройте бота:
   - Перейдите на вкладку **Bot** и нажмите **Add Bot**.
   - На вкладке **OAuth2** выберите область `bot`.
   - В разделе **Text Permissions** включите:
      - `Send Messages`
      - `Embed Links`
   - Альтернативно, вы можете выдать разрешение `Administrator` (менее безопасно).
4. Скопируйте сгенерированный URL OAuth2 и откройте его в браузере.
5. Выберите сервер, на который хотите добавить бота, и авторизуйте его.

---

### Запуск бота
1. Запустите скачанный файл `.exe`.
2. Вернитесь на [Discord Developer Portal](https://discord.com/developers/applications), перейдите на страницу вашего бота и откройте раздел **Bot**.
3. Нажмите **Reset Token** и скопируйте токен.
4. Вставьте токен в консольное приложение, когда появится запрос.
5. Скопируйте ID вашего сервера:
   - Щелкните правой кнопкой мыши на аватар сервера в Discord.
   - Выберите **Copy Server ID** (если опция недоступна, включите режим разработчика в настройках Discord: Настройки пользователя > Дополнительно > Режим разработчика).
6. Введите ID сервера в программу.

---

## Использование
1. После запуска бота перейдите в любой текстовый канал на вашем сервере.
2. Введите команду `/hello`.
3. Бот ответит сообщением, и вы получите право на **Active Developer Badge**.
4. После выполнения команды перейдите по ссылке https://discord.com/developers/active-developer, выберите сервер, на котором была выполнена команда, и выберите бота, связанного с этой командой.

---

## Часто задаваемые вопросы

### 1. Нужно ли создавать новый сервер?
Нет, вы можете использовать существующий сервер. Однако, если у вас его нет, рекомендуется создать новый.

### 2. Какие разрешения нужны боту?
Боту требуются следующие разрешения:
- `Send Messages`
- `Embed Links`

Альтернативно, вы можете выдать разрешение `Administrator`, но это менее безопасно.

### 3. Как включить режим разработчика в Discord?
- Перейдите в **Настройки пользователя** > **Дополнительно**.
- Включите **Режим разработчика**.

### 4. Что делать, если я потерял токен бота?
Вы можете сбросить токен на [Discord Developer Portal](https://discord.com/developers/applications) в разделе **Bot**.

---

## Поддержка
Если у вас возникли проблемы или вопросы, вы можете:
- Создать issue в [репозитории GitHub](https://github.com/intjiraya/GetDiscordDevBadge/issues).

---

## Участие в разработке
Мы приветствуем вклад в проект! Если вы хотите помочь:
1. Форкните репозиторий.
2. Создайте новую ветку для вашей функции или исправления.
3. Отправьте pull request с подробным описанием ваших изменений.

---

## Лицензия
Этот проект лицензирован под MIT License. Подробнее см. в файле [LICENSE](../LICENSE).

---

### Примечания
- **Active Developer Badge** выдается Discord пользователям, которые создали и поддерживают активного бота. Этот инструмент упрощает процесс получения значка.
- Убедитесь, что вы соблюдаете [Условия использования Discord](https://discord.com/terms) и [Политику разработчика](https://discord.com/developers/docs/policy).
