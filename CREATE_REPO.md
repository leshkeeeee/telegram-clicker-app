# 📦 Создание репозитория на GitHub

## Быстрая инструкция (2 минуты)

### Шаг 1: Создайте репозиторий

1. Откройте: https://github.com/new
2. Заполните:
   - **Repository name**: `telegram-clicker-app`
   - **Description**: `💎 Crypto Clicker - Telegram Mini App`
   - **Public** (выберите публичный)
   - ❌ НЕ добавляйте README, .gitignore, license
3. Нажмите **"Create repository"**

### Шаг 2: Подключите локальный репозиторий

Скопируйте ваш username с GitHub, затем выполните:

```bash
git remote set-url origin https://github.com/ВАШ_USERNAME/telegram-clicker-app.git
git push -u origin main
```

Замените `ВАШ_USERNAME` на ваш GitHub username.

### Шаг 3: Активируйте GitHub Pages

1. Откройте: `https://github.com/ВАШ_USERNAME/telegram-clicker-app/settings/pages`
2. Source: выберите **"GitHub Actions"**
3. Подождите 1-2 минуты

### Шаг 4: Проверьте сайт

Откройте: `https://ВАШ_USERNAME.github.io/telegram-clicker-app/`

✅ Работает? Создавайте бота в @BotFather!

---

## Альтернатива: Vercel (быстрее)

Если GitHub Pages не работает:

1. Откройте: https://vercel.com/signup
2. Войдите через GitHub
3. Import репозиторий `telegram-clicker-app`
4. Нажмите Deploy
5. Получите URL: `https://telegram-clicker-app.vercel.app`

---

## Что дальше?

После деплоя:
1. Скопируйте URL вашего сайта
2. Откройте @BotFather
3. Создайте Mini App с этим URL
4. Играйте! 🎮

Подробная инструкция: `README.md`
