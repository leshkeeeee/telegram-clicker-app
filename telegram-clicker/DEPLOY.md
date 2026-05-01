# 🚀 Деплой Telegram Mini App

## Варианты деплоя

### 1. GitHub Pages (Бесплатно, рекомендуется)

#### Шаг 1: Создайте репозиторий на GitHub

```bash
cd telegram-clicker
git init
git add .
git commit -m "Initial commit: Crypto Clicker Mini App"
```

#### Шаг 2: Загрузите на GitHub

```bash
# Создайте новый репозиторий на github.com
# Затем выполните:
git remote add origin https://github.com/YOUR_USERNAME/crypto-clicker.git
git branch -M main
git push -u origin main
```

#### Шаг 3: Включите GitHub Pages

1. Откройте Settings репозитория
2. Перейдите в Pages
3. Source: выберите `main` branch
4. Сохраните

Ваше приложение будет доступно по адресу:
`https://YOUR_USERNAME.github.io/crypto-clicker/`

---

### 2. Vercel (Бесплатно, быстро)

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
cd telegram-clicker
vercel

# Следуйте инструкциям в терминале
```

---

### 3. Netlify (Бесплатно)

#### Через веб-интерфейс:
1. Перейдите на [netlify.com](https://netlify.com)
2. Drag & Drop папку `telegram-clicker`
3. Готово!

#### Через CLI:
```bash
npm i -g netlify-cli
cd telegram-clicker
netlify deploy --prod
```

---

### 4. Cloudflare Pages (Бесплатно)

1. Перейдите на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Подключите GitHub репозиторий
3. Build settings:
   - Build command: (оставьте пустым)
   - Build output directory: `/`
4. Deploy

---

## Настройка Telegram Bot

### Шаг 1: Создайте бота

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте `/newbot`
3. Введите имя бота (например: `Crypto Clicker`)
4. Введите username (например: `CryptoClickerBot`)
5. Сохраните токен бота

### Шаг 2: Создайте Mini App

1. Отправьте `/newapp` в BotFather
2. Выберите вашего бота
3. Введите название приложения: `Crypto Clicker`
4. Введите описание: `Tap to earn crypto! Upgrade your power and compete with friends.`
5. Загрузите фото (640x360px) - можно создать в Canva
6. Загрузите GIF демо (опционально)
7. **Введите URL вашего приложения** (из GitHub Pages/Vercel/Netlify)
8. Выберите Short name: `clicker`

### Шаг 3: Протестируйте

Откройте вашего бота в Telegram и нажмите кнопку запуска приложения!

---

## Создание иконки для приложения

### Онлайн инструменты:
- [Canva](https://canva.com) - создайте дизайн 640x360px
- [Figma](https://figma.com) - профессиональный дизайн
- [Photopea](https://photopea.com) - бесплатный Photoshop онлайн

### Рекомендации:
- Размер: 640x360px (для превью)
- Формат: PNG или JPG
- Яркие цвета
- Четкий текст
- Иконка монеты/кристалла в центре

---

## Проверка перед деплоем

```bash
# Запустите локальный сервер
python server.py

# Откройте в браузере
http://localhost:8000

# Проверьте:
✅ Тапы работают
✅ Энергия восстанавливается
✅ Улучшения покупаются
✅ Прогресс сохраняется
✅ Анимации плавные
✅ Нет ошибок в консоли (F12)
```

---

## Troubleshooting

### Приложение не загружается в Telegram

1. Проверьте, что URL доступен через HTTPS
2. Убедитесь, что нет CORS ошибок
3. Проверьте консоль браузера (в Telegram Desktop: Settings → Advanced → Show Web Inspector)

### Haptic Feedback не работает

Это нормально в браузере. Работает только в официальном Telegram клиенте.

### Прогресс не сохраняется

1. Проверьте, что localStorage доступен
2. В настройках Telegram включите хранилище для Mini Apps

### Анимации тормозят

1. Уменьшите количество частиц в `app.js` (строка с `for (let i = 0; i < 50; i++)`)
2. Отключите фоновые частицы, закомментировав `this.initParticles()`

---

## Обновление приложения

### GitHub Pages:
```bash
git add .
git commit -m "Update: описание изменений"
git push
```

### Vercel/Netlify:
```bash
vercel --prod
# или
netlify deploy --prod
```

Изменения применятся автоматически через 1-2 минуты.

---

## Монетизация (опционально)

### Telegram Stars
Добавьте покупки через Telegram Stars API:
```javascript
tg.openInvoice(url, (status) => {
    if (status === 'paid') {
        // Выдайте награду
    }
});
```

### Реклама
Интегрируйте Telegram Ad Platform для показа рекламы.

---

## Поддержка

Если возникли проблемы:
1. Проверьте консоль браузера (F12)
2. Убедитесь, что все файлы загружены
3. Проверьте, что URL правильный в BotFather
4. Попробуйте очистить кэш Telegram

---

**Готово! Ваше приложение готово к запуску! 🚀**
