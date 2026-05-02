# 🤖 Настройка Telegram бота

## Способ 1: Через @BotFather (рекомендуется)

**Не требует запуска Python бота!**

### 1. Создайте бота
```
@BotFather → /newbot
```
- Имя: `My Clicker`
- Username: `my_clicker_bot`
- **Скопируйте токен**

### 2. Создайте Mini App
```
@BotFather → /newapp
```
- Выберите вашего бота
- Название: `Crypto Clicker`
- Описание: `Tap to earn crystals!`
- Фото: любое 640x360
- GIF: `/empty`
- **Web App URL**: ваш URL (Vercel или GitHub Pages)
- Short name: `clicker`

### 3. Готово!
Откройте бота → нажмите "Play" 🎮

---

## Способ 2: Python бот (опционально)

Если хотите добавить команды боту:

### 1. Установите библиотеку
```bash
pip install pytelegrambotapi
```

### 2. Настройте bot.py
Откройте `bot.py` и вставьте:
```python
TOKEN = "ваш_токен_от_BotFather"
WEB_APP_URL = "ваш_url"
```

### 3. Запустите
```bash
python bot.py
```

---

## ❓ Проблемы?

**Бот не открывает игру:**
- Проверьте что URL правильный
- Убедитесь что сайт открывается в браузере
- URL должен начинаться с `https://`

**Ошибка "Invalid token":**
- Скопируйте токен полностью из @BotFather
- Токен в кавычках: `TOKEN = "1234567890:ABC..."`

**Python бот не запускается:**
```bash
pip install pytelegrambotapi
```
