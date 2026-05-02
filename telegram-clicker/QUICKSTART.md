# 💎 Crypto Clicker - Quick Start Guide

## 🚀 Быстрый запуск за 5 минут

### 1️⃣ Загрузите код на GitHub

```bash
# Перейдите в директорию проекта
cd telegram-clicker

# Инициализируйте git (если еще не сделано)
git init

# Добавьте все файлы
git add .

# Создайте коммит
git commit -m "Initial commit: Telegram Clicker Mini App"

# Создайте репозиторий на GitHub и подключите его
git remote add origin https://github.com/ВАШ_USERNAME/telegram-clicker.git
git branch -M main
git push -u origin main
```

### 2️⃣ Включите GitHub Pages

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Pages**
3. В разделе **Build and deployment**:
   - Source: выберите **GitHub Actions**
4. Подождите 1-2 минуты
5. Ваш URL: `https://ВАШ_USERNAME.github.io/telegram-clicker/`

### 3️⃣ Создайте Telegram бота

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте: `/newbot`
3. Введите имя: `Crypto Clicker Game`
4. Введите username: `your_clicker_bot` (должен заканчиваться на `bot`)

### 4️⃣ Создайте Mini App

1. В BotFather отправьте: `/newapp`
2. Выберите вашего бота
3. Введите название: `Crypto Clicker`
4. Введите описание: `💎 Качественная тапалка с улучшениями!`
5. Загрузите иконку 512x512px
6. Введите URL: `https://ВАШ_USERNAME.github.io/telegram-clicker/`
7. Short name: `clicker`

### 5️⃣ Готово! 🎉

Откройте вашего бота в Telegram и запустите игру!

---

## 📖 Подробная инструкция

Смотрите файл [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) для детальной инструкции.

## 🎮 Возможности игры

- ⚡ **Система энергии** - тапайте и зарабатывайте монеты
- 🚀 **4 типа улучшений** - увеличивайте мощность и эффективность
- 💰 **Офлайн заработок** - получайте монеты даже когда не играете
- 🎯 **7 достижений** - выполняйте задания и получайте награды
- 📊 **Статистика** - отслеживайте свой прогресс
- 💾 **Автосохранение** - прогресс сохраняется автоматически

## 🛠️ Технологии

- Vanilla JavaScript (ES6+)
- Telegram Web App API
- CSS3 Animations
- LocalStorage + Cloud Storage
- GitHub Pages

## 📱 Тестирование локально

```bash
# Запустите локальный сервер
python -m http.server 8000

# Или используйте Node.js
npx serve

# Откройте в браузере
http://localhost:8000
```

## 🎨 Кастомизация

### Изменить цвета

Отредактируйте переменные в `style.css`:

```css
:root {
    --bg-primary: #0a0e27;
    --accent-primary: #6c5ce7;
    /* ... другие цвета */
}
```

### Изменить баланс игры

В `app.js` измените начальные значения:

```javascript
this.energy = 1000;          // Начальная энергия
this.tapPower = 1;           // Сила тапа
this.rechargeRate = 1;       // Скорость восстановления
```

## 📞 Поддержка

Если возникли вопросы:
1. Проверьте [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) - раздел "Решение проблем"
2. Откройте issue в репозитории
3. Проверьте консоль браузера на ошибки

## 📝 Лицензия

MIT License - используйте свободно!

---

Сделано с 💜 для Telegram Mini Apps
