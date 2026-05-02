# 💎 Crypto Clicker - Telegram Mini App

Простая игра-кликер для Telegram с системой улучшений и достижений.

## 🎮 Что это?

Telegram Mini App - игра где нужно тапать по монете, зарабатывать кристаллы и покупать улучшения.

**Особенности:**
- 🎯 Система тапов с энергией
- ⚡ 4 типа улучшений
- 🏆 7 достижений с наградами
- 💾 Автосохранение прогресса
- 📱 Работает на всех устройствах

---

## 🚀 Быстрый старт

### Вариант 1: Деплой на Vercel (рекомендуется)

**Время: 2 минуты**

1. Откройте: https://vercel.com/signup
2. Нажмите "Continue with GitHub"
3. Найдите репозиторий `telegram-clicker-app`
4. Нажмите "Import" → "Deploy"
5. Скопируйте URL (например: `https://telegram-clicker-app.vercel.app`)

✅ Готово! Переходите к созданию бота ⬇️

---

### Вариант 2: GitHub Pages

**Время: 3-5 минут**

1. **Активируйте GitHub Pages:**
   - Откройте: https://github.com/leshkeeeee/telegram-clicker-app/settings/pages
   - Source: выберите **"GitHub Actions"**

2. **Включите Actions (если нужно):**
   - Откройте: https://github.com/leshkeeeee/telegram-clicker-app/settings/actions
   - Выберите "Allow all actions and reusable workflows"
   - Включите "Read and write permissions"

3. **Запустите деплой:**
   - Откройте: https://github.com/leshkeeeee/telegram-clicker-app/actions
   - Если видите "Workflows aren't being run" - нажмите "Enable"
   - Выберите "Deploy to GitHub Pages" → "Run workflow"

4. **Дождитесь зеленой галочки ✅**

5. **Проверьте сайт:**
   - https://leshkeeeee.github.io/telegram-clicker-app/

✅ Работает? Переходите к созданию бота ⬇️

---

## 🤖 Создание Telegram бота

### Шаг 1: Создайте бота

1. Откройте @BotFather в Telegram
2. Отправьте: `/newbot`
3. Придумайте имя (например: `My Clicker`)
4. Придумайте username (например: `my_clicker_bot`)
5. **Скопируйте токен** (выглядит как `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Шаг 2: Создайте Mini App

1. В @BotFather отправьте: `/newapp`
2. Выберите вашего бота
3. Название: `Crypto Clicker`
4. Описание: `Tap to earn crystals!`
5. Фото: загрузите любую картинку 640x360
6. GIF: пропустите (отправьте `/empty`)
7. **Web App URL**: вставьте ваш URL
   - Vercel: `https://telegram-clicker-app.vercel.app`
   - GitHub Pages: `https://leshkeeeee.github.io/telegram-clicker-app/`
8. Short name: `clicker`

### Шаг 3: Настройте бота (опционально)

Если хотите запустить Python бота:

1. Откройте файл `bot.py`
2. Вставьте ваш токен:
   ```python
   TOKEN = "ваш_токен_от_BotFather"
   WEB_APP_URL = "ваш_url_vercel_или_github_pages"
   ```
3. Установите библиотеку:
   ```bash
   pip install pytelegrambotapi
   ```
4. Запустите:
   ```bash
   python bot.py
   ```

**Примечание:** Python бот не обязателен! Mini App работает и без него.

---

## ✅ Готово!

Откройте вашего бота в Telegram и нажмите кнопку "Play" или отправьте `/start`

Игра должна открыться! 🎉

---

## 🧪 Локальное тестирование

Для тестирования на компьютере:

```bash
# Запустите локальный сервер
python server.py
# или
python -m http.server 8000

# Откройте в браузере
http://localhost:8000
```

⚠️ **Важно:** Telegram API работает только внутри Telegram, не в обычном браузере.

---

## 📁 Структура проекта

```
telegram-clicker-app/
├── index.html          # Главная страница игры
├── app.js              # Логика игры
├── style.css           # Стили и анимации
├── test.html           # Тестовая страница
├── manifest.json       # PWA манифест
├── bot.py              # Python бот (опционально)
├── server.py           # Локальный сервер
├── start.bat           # Запуск на Windows
├── start.sh            # Запуск на Mac/Linux
└── .github/workflows/  # GitHub Actions
```

---

## 🎮 Игровая механика

### Улучшения

| Улучшение | Эффект | Цена |
|-----------|--------|------|
| 🔋 Energy Limit | +50% энергии | 100 💎 |
| ⚡ Tap Power | +50% силы тапа | 50 💎 |
| 🤖 Auto Farm | +10 монет/час | 500 💎 |
| ⚡ Recharge Speed | +50% восстановления | 200 💎 |

### Достижения

- 👆 First Tap - первый тап (10 💎)
- 🔥 Tapper - 100 тапов (50 💎)
- ⚡ Pro Tapper - 1000 тапов (200 💎)
- 💰 First K - 1000 монет (100 💎)
- 💎 Rich - 10000 монет (500 💎)
- 🏆 Level 5 - 5 уровень (250 💎)
- 👑 Level 10 - 10 уровень (1000 💎)

---

## ❓ Проблемы?

### GitHub Pages показывает 404
- Проверьте что выбрано "GitHub Actions" в Source
- Убедитесь что workflow завершился успешно (зеленая галочка)
- Подождите 2-3 минуты после деплоя
- Очистите кэш браузера (Ctrl+F5)

### GitHub Actions не запускаются
- Проверьте что Actions включены в настройках
- Запустите workflow вручную через "Run workflow"
- Используйте Vercel как альтернативу

### Бот не открывает игру
- Проверьте что URL правильный (без лишних слешей)
- Убедитесь что сайт открывается в браузере
- Проверьте что URL начинается с `https://`

### Не работает в Telegram
- Убедитесь что используете актуальную версию Telegram
- Проверьте что Mini App создан через @BotFather
- Попробуйте переоткрыть бота

---

## 🛠️ Технологии

- **Frontend:** Vanilla JavaScript (ES6+)
- **API:** Telegram Web App API
- **Стили:** CSS3 с анимациями
- **Хранилище:** LocalStorage + Telegram Cloud Storage
- **Деплой:** Vercel / GitHub Pages

---

## 📞 Поддержка

- 📝 [Создать issue](https://github.com/leshkeeeee/telegram-clicker-app/issues)
- 📚 [Telegram Mini Apps Docs](https://core.telegram.org/bots/webapps)
- 🤖 [@BotFather](https://t.me/BotFather)

---

## 📝 Лицензия

MIT License - используйте свободно!

---

<div align="center">

**Сделано с 💜 для Telegram**

⭐ Поставьте звезду если проект был полезен!

</div>
