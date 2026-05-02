# Проверка GitHub Actions

## Если workflow не запускается

### 1. Проверьте что Actions включены

Откройте:
```
https://github.com/leshkeeeee/telegram-clicker-app/settings/actions
```

Убедитесь что:
- ✅ "Allow all actions and reusable workflows" выбрано
- ✅ "Read and write permissions" включено в Workflow permissions

### 2. Проверьте вкладку Actions

Откройте:
```
https://github.com/leshkeeeee/telegram-clicker-app/actions
```

Если видите сообщение "Workflows aren't being run on this repository":
- Нажмите зеленую кнопку "I understand my workflows, go ahead and enable them"

### 3. Запустите workflow вручную

1. Откройте: https://github.com/leshkeeeee/telegram-clicker-app/actions
2. Слева выберите "Deploy to GitHub Pages"
3. Справа нажмите "Run workflow"
4. Нажмите зеленую кнопку "Run workflow"

### 4. Проверьте логи

Если workflow запустился но упал:
1. Нажмите на название workflow
2. Посмотрите какой шаг упал (красный крестик)
3. Откройте логи этого шага

---

## Альтернативное решение: Vercel

Если GitHub Actions не работают, используйте Vercel:

1. Откройте: https://vercel.com/signup
2. Войдите через GitHub
3. Импортируйте репозиторий telegram-clicker-app
4. Нажмите Deploy
5. Готово! Получите URL типа: https://telegram-clicker-app.vercel.app

Подробная инструкция: `VERCEL_DEPLOY.txt`
