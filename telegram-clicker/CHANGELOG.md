# Crypto Clicker - Changelog

## Version 1.0.0 (2026-05-01)

### ✨ Features
- 🎮 Smooth tap mechanics with haptic feedback
- ⚡ Energy system with automatic recharge
- 🚀 4 types of upgrades:
  - Energy Limit (increase max energy)
  - Tap Power (increase tap strength)
  - Auto Farm (passive income)
  - Recharge Speed (faster energy recovery)
- 💰 Offline earnings system
- 📊 Level progression system
- 🎯 7 achievements with rewards
- 📈 Statistics tracking
- 💾 Auto-save (localStorage + Telegram Cloud Storage)
- 🎨 Beautiful animations and particle effects
- 📱 Responsive design for all screen sizes
- 🌐 Multi-tab interface (Home, Boosts, Tasks, Stats)

### 🎨 Design
- Modern dark theme with purple accents
- Smooth animations and transitions
- Floating numbers on tap
- Particle explosion effects
- Animated background particles
- Glowing effects on tap circle

### 🛠️ Technical
- Vanilla JavaScript (ES6+)
- Telegram Web App API integration
- LocalStorage for persistence
- Cloud Storage API support
- Canvas-based particle system
- Optimized for mobile performance

### 📦 Files
- `index.html` - Main app page
- `app.js` - Game logic
- `style.css` - Styles and animations
- `server.py` - Local development server
- `test.html` - Testing page with mock Telegram API
- `manifest.json` - PWA manifest
- `README.md` - Documentation
- `DEPLOY.md` - Deployment guide

### 🎯 Achievements
1. 👆 First Tap - Make your first tap (10 💎)
2. 🔥 Tapper - Make 100 taps (50 💎)
3. ⚡ Pro Tapper - Make 1000 taps (200 💎)
4. 💰 First K - Earn 1000 coins (100 💎)
5. 💎 Rich - Earn 10000 coins (500 💎)
6. 🏆 Level 5 - Reach level 5 (250 💎)
7. 👑 Level 10 - Reach level 10 (1000 💎)

### 🚀 Getting Started
```bash
# Start local server
python server.py

# Open in browser
http://localhost:8000
```

### 📝 Notes
- Haptic feedback works only in official Telegram clients
- Cloud Storage requires Telegram Mini App context
- Offline earnings calculated on app open
- Progress auto-saves every action

---

Made with 💜 for Telegram Mini Apps
