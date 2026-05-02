"""
Простой Telegram бот для запуска Mini App
Использует python-telegram-bot библиотеку
"""

import logging
from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup, MenuButtonWebApp
from telegram.ext import Application, CommandHandler, ContextTypes

# Настройка логирования
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# URL вашего Web App
WEB_APP_URL = "https://leshkeeeee.github.io/telegram-clicker-app/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /start"""
    user = update.effective_user

    # Создаем inline кнопку с Web App
    keyboard = [
        [InlineKeyboardButton("🎮 Play Crypto Clicker", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        f"👋 Привет, {user.first_name}!\n\n"
        f"💎 Добро пожаловать в Crypto Clicker!\n\n"
        f"🎮 Нажми кнопку ниже, чтобы начать игру:\n"
        f"• Тапай и зарабатывай монеты\n"
        f"• Покупай улучшения\n"
        f"• Выполняй достижения\n"
        f"• Получай офлайн заработок\n\n"
        f"⚡ Удачи!",
        reply_markup=reply_markup
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /help"""
    await update.message.reply_text(
        "🎮 Crypto Clicker - Telegram Mini App\n\n"
        "📖 Команды:\n"
        "/start - Запустить игру\n"
        "/help - Показать эту справку\n\n"
        "🎯 Как играть:\n"
        "1. Нажми кнопку 'Play Crypto Clicker'\n"
        "2. Тапай по монете и зарабатывай 💎\n"
        "3. Покупай улучшения во вкладке Boosts\n"
        "4. Выполняй задания во вкладке Tasks\n"
        "5. Смотри статистику во вкладке Stats\n\n"
        "💰 Офлайн заработок работает автоматически!"
    )

async def post_init(application: Application) -> None:
    """Настройка кнопки меню после инициализации"""
    try:
        # Устанавливаем кнопку меню для всех пользователей
        await application.bot.set_chat_menu_button(
            menu_button=MenuButtonWebApp(
                text="🎮 Play Game",
                web_app=WebAppInfo(url=WEB_APP_URL)
            )
        )
        logger.info("Menu button set successfully!")
    except Exception as e:
        logger.error(f"Error setting menu button: {e}")

def main() -> None:
    """Запуск бота"""
    # ВАЖНО: Замените YOUR_BOT_TOKEN на токен вашего бота от @BotFather
    TOKEN = "YOUR_BOT_TOKEN"

    if TOKEN == "YOUR_BOT_TOKEN":
        print("\n" + "="*60)
        print("⚠️  ВНИМАНИЕ! Вам нужно указать токен бота!")
        print("="*60)
        print("\n📝 Инструкция:")
        print("1. Откройте @BotFather в Telegram")
        print("2. Создайте бота командой /newbot")
        print("3. Скопируйте токен, который выдаст BotFather")
        print("4. Откройте файл bot.py")
        print("5. Замените YOUR_BOT_TOKEN на ваш токен")
        print("6. Запустите бот снова: python bot.py")
        print("\n" + "="*60 + "\n")
        return

    # Создаем приложение
    application = Application.builder().token(TOKEN).post_init(post_init).build()

    # Регистрируем обработчики команд
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))

    # Запускаем бота
    print("\n" + "="*60)
    print("🤖 Бот запущен!")
    print("="*60)
    print("\n✅ Что дальше:")
    print("1. Откройте вашего бота в Telegram")
    print("2. Отправьте команду /start")
    print("3. Нажмите кнопку '🎮 Play Crypto Clicker'")
    print("4. Игра откроется!")
    print("\n💡 Также появится кнопка меню (☰) для быстрого запуска")
    print("\n" + "="*60 + "\n")

    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
