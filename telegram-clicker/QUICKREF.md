# 🎮 Crypto Clicker - Quick Reference

## 🚀 Quick Start

```bash
# Start server
python server.py

# Or use quick start menu
python quickstart.py
```

## 📁 Project Structure

```
telegram-clicker/
├── index.html          # Main app page
├── app.js             # Game logic (2.5KB)
├── style.css          # Styles & animations (4KB)
├── manifest.json      # PWA manifest
├── server.py          # Dev server
├── test.html          # Testing page
├── quickstart.py      # Quick start menu
├── start.bat          # Windows launcher
├── start.sh           # Unix launcher
├── README.md          # Full documentation
├── DEPLOY.md          # Deployment guide
├── CHANGELOG.md       # Version history
└── package.json       # Project metadata
```

## 🎯 Game Mechanics

### Energy System
- Start: 1000 energy
- Cost per tap: 1 energy (increases with upgrades)
- Recharge: 1 energy/second (upgradeable)

### Upgrades

| Upgrade | Effect | Base Cost | Cost Multiplier |
|---------|--------|-----------|-----------------|
| 🔋 Energy | +50% max energy | 100 💎 | 1.8x |
| ⚡ Tap Power | +50% per tap | 50 💎 | 1.6x |
| 🤖 Auto Farm | +10/hour | 500 💎 | 2.0x |
| ⚡ Recharge | +50% speed | 200 💎 | 1.7x |

### Level Formula
```javascript
level = floor(log10(balance + 1) * 2) + 1
```

## 🎨 Customization

### Colors (style.css)
```css
:root {
    --bg-primary: #0a0e27;      /* Dark blue background */
    --accent-primary: #6c5ce7;   /* Purple accent */
    --energy: #ffeaa7;           /* Yellow energy */
}
```

### Game Balance (app.js)
```javascript
this.energy = 1000;          // Starting energy
this.tapPower = 1;           // Starting tap power
this.rechargeRate = 1;       // Energy per second
```

### Particles (app.js)
```javascript
// Line ~200: Change particle count
for (let i = 0; i < 50; i++) {  // Reduce for performance
```

## 🔧 Development

### Test Locally
```bash
python server.py
# Open http://localhost:8000
```

### Debug Mode
```javascript
// In browser console (F12)
localStorage.clear()  // Reset progress
```

### Mock Telegram API
Open `test.html` for testing without Telegram

## 📱 Telegram Integration

### Required in BotFather
1. Bot name: Your choice
2. Bot username: Must end with 'bot'
3. App URL: Your deployed URL (HTTPS)
4. Short name: 6-32 characters

### Telegram API Features Used
- `tg.ready()` - Initialize app
- `tg.expand()` - Full screen
- `tg.HapticFeedback` - Vibration
- `tg.showPopup()` - Alerts
- `tg.CloudStorage` - Save data
- `tg.initDataUnsafe.user` - User info

## 🐛 Common Issues

### App doesn't load in Telegram
- Check HTTPS (required)
- Verify URL in BotFather
- Check browser console

### Haptic doesn't work
- Only works in Telegram app
- Not available in browser

### Progress not saving
- Check localStorage enabled
- Verify CloudStorage permissions

### Slow performance
- Reduce particles (line ~200 in app.js)
- Disable background animation

## 📊 Analytics Ideas

Track these metrics:
- Total taps
- Total earned
- Session duration
- Upgrade purchases
- Achievement completion rate

## 🚀 Deployment Checklist

- [ ] Test all features locally
- [ ] Check console for errors
- [ ] Verify mobile responsiveness
- [ ] Test offline earnings
- [ ] Create bot in BotFather
- [ ] Deploy to hosting
- [ ] Set URL in BotFather
- [ ] Test in Telegram
- [ ] Share with friends!

## 💡 Feature Ideas

### Easy to add:
- Daily rewards
- Combo multipliers
- Sound effects
- More achievements
- Leaderboard

### Medium difficulty:
- Referral system
- Mini-games
- Skins/themes
- Special events
- Premium features

### Advanced:
- Backend integration
- Real-time multiplayer
- NFT integration
- Blockchain rewards
- Social features

## 📞 Support

- Check `README.md` for full docs
- Check `DEPLOY.md` for deployment
- Check `CHANGELOG.md` for updates
- Open issue on GitHub

## 🎓 Learning Resources

- [Telegram Mini Apps Docs](https://core.telegram.org/bots/webapps)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [JavaScript Game Dev](https://developer.mozilla.org/en-US/docs/Games)

---

**Made with 💜 | Version 1.0.0 | 2026**
