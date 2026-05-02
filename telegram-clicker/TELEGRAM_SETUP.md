# 🚀 Инструкция по созданию Telegram Mini App

## Шаг 1: Деплой на GitHub Pages

### 1.1 Создайте репозиторий на GitHub
1. Перейдите на https://github.com/new
2. Назовите репозиторий, например: `telegram-clicker`
3. Сделайте репозиторий **Public**
4. Нажмите "Create repository"

### 1.2 Загрузите код в репозиторий

```bash
cd telegram-clicker
git init
git add .
git commit -m "Initial commit: Telegram Clicker Mini App"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/telegram-clicker.git
git push -u origin main
```

### 1.3 Включите GitHub Pages
1. Откройте настройки репозитория: Settings → Pages
2. В разделе "Build and deployment":
   - Source: выберите **GitHub Actions**
3. Подождите 1-2 минуты пока завершится деплой
4. Ваше приложение будет доступно по адресу:
   ```
   https://ВАШ_USERNAME.github.io/telegram-clicker/
   ```

## Шаг 2: Создание Telegram бота

### 2.1 Откройте BotFather
1. Найдите [@BotFather](https://t.me/BotFather) в Telegram
2. Нажмите "Start"

### 2.2 Создайте нового бота
1. Отправьте команду: `/newbot`
2. Введите имя бота (например: `Crypto Clicker Game`)
3. Введите username бота (должен заканчиваться на `bot`, например: `crypto_clicker_game_bot`)
4. Сохраните токен бота (он понадобится позже)

## Шаг 3: Создание Mini App

### 3.1 Создайте Web App
1. В BotFather отправьте: `/newapp`
2. Выберите вашего бота из списка
3. Введите название приложения: `Crypto Clicker`
4. Введите описание:
   ```
   💎 Качественная тапалка с системой улучшений!
   
   ⚡ Тапай, прокачивайся, зарабатывай!
   🚀 Офлайн заработок
   🎯 Достижения и статистика
   ```
5. Загрузите фото (512x512 px) - можно создать на https://www.canva.com
6. Загрузите GIF демонстрацию (опционально)

### 3.2 Укажите URL приложения
1. Введите URL вашего GitHub Pages:
   ```
   https://ВАШ_USERNAME.github.io/telegram-clicker/
   ```
2. Выберите Short name: `clicker` (или любое другое короткое имя)

### 3.3 Настройте кнопку запуска (опционально)
```
/setmenubutton
Выберите вашего бота
Введите текст кнопки: "🎮 Play Game"
Введите URL: https://ВАШ_USERNAME.github.io/telegram-clicker/
```

## Шаг 4: Тестирование

### 4.1 Откройте приложение
1. Найдите вашего бота в Telegram
2. Нажмите "Start"
3. Нажмите на кнопку меню или отправьте команду для запуска Mini App
4. Приложение должно открыться внутри Telegram

### 4.2 Проверьте функционал
- ✅ Тапы работают
- ✅ Энергия восстанавливается
- ✅ Улучшения покупаются
- ✅ Прогресс сохраняется
- ✅ Haptic feedback работает (вибрация)

## Шаг 5: Публикация (опционально)

### 5.1 Отправьте на проверку
1. В BotFather: `/mybots`
2. Выберите вашего бота
3. Выберите "Bot Settings" → "Submit for Verification"
4. Заполните форму

### 5.2 После одобрения
- Ваш бот появится в каталоге Telegram
- Пользователи смогут найти его через поиск
- Можно будет делиться ссылкой: `https://t.me/ВАШ_БОТ_USERNAME`

## 🔧 Дополнительные настройки

### Изменить иконку бота
```
/setuserpic
Выберите бота
Загрузите изображение
```

### Изменить описание
```
/setdescription
Выберите бота
Введите новое описание
```

### Добавить команды
```
/setcommands
Выберите бота
Введите список команд:
start - Запустить игру
help - Помощь
stats - Статистика
```

## 📱 Поделиться приложением

После создания можно делиться ссылками:
- Прямая ссылка на бота: `https://t.me/ВАШ_БОТ_USERNAME`
- Ссылка на Mini App: `https://t.me/ВАШ_БОТ_USERNAME/clicker`

## ⚠️ Важные замечания

1. **HTTPS обязателен** - GitHub Pages автоматически использует HTTPS
2. **Telegram Web App SDK** - уже подключен в index.html
3. **Тестирование** - всегда тестируйте в реальном Telegram перед публикацией
4. **Размер** - следите за размером приложения (рекомендуется < 5 MB)
5. **Производительность** - оптимизируйте для мобильных устройств

## 🐛 Решение проблем

### Приложение не открывается
- Проверьте что GitHub Pages активирован
- Убедитесь что URL правильный (без лишних слешей)
- Проверьте консоль браузера на ошибки

### Не работает Telegram API
- Убедитесь что подключен скрипт: `telegram-web-app.js`
- Проверьте что приложение открыто внутри Telegram
- Используйте `tg.ready()` перед другими вызовами

### Не сохраняется прогресс
- Проверьте localStorage в браузере
- Убедитесь что CloudStorage API доступен
- Проверьте права доступа к хранилищу

## 📚 Полезные ссылки

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [BotFather Commands](https://core.telegram.org/bots#botfather)
- [GitHub Pages Guide](https://pages.github.com/)
- [Web App Examples](https://core.telegram.org/bots/webapps#examples)

---

Удачи с вашим Telegram Mini App! 🚀
