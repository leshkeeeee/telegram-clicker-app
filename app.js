const tg = window.Telegram.WebApp;

class CryptoClicker {
    constructor() {
        this.balance = 0;
        this.energy = 1000;
        this.maxEnergy = 1000;
        this.tapPower = 1;
        this.level = 1;
        this.profitPerHour = 0;
        this.totalTaps = 0;
        this.totalEarned = 0;

        this.boosts = {
            energy: { level: 1, cost: 100, multiplier: 1.5 },
            multiplier: { level: 1, cost: 50, multiplier: 1.5 },
            auto: { level: 0, cost: 500, increment: 10 },
            recharge: { level: 1, cost: 200, multiplier: 1.5 }
        };

        this.achievements = [
            { id: 'first_tap', name: 'First Tap', desc: 'Make your first tap', reward: 10, completed: false, icon: '👆' },
            { id: 'tap_100', name: 'Tapper', desc: 'Make 100 taps', reward: 50, completed: false, icon: '🔥' },
            { id: 'tap_1000', name: 'Pro Tapper', desc: 'Make 1000 taps', reward: 200, completed: false, icon: '⚡' },
            { id: 'earn_1000', name: 'First K', desc: 'Earn 1000 coins', reward: 100, completed: false, icon: '💰' },
            { id: 'earn_10000', name: 'Rich', desc: 'Earn 10000 coins', reward: 500, completed: false, icon: '💎' },
            { id: 'level_5', name: 'Level 5', desc: 'Reach level 5', reward: 250, completed: false, icon: '🏆' },
            { id: 'level_10', name: 'Level 10', desc: 'Reach level 10', reward: 1000, completed: false, icon: '👑' }
        ];

        this.rechargeRate = 1;
        this.lastUpdate = Date.now();
        this.particles = [];

        this.init();
    }

    init() {
        tg.ready();
        tg.expand();

        this.loadGameState();
        this.setupEventListeners();
        this.startEnergyRecharge();
        this.startAutoFarm();
        this.initParticles();
        this.updateUI();

        const user = tg.initDataUnsafe?.user;
        if (user) {
            document.getElementById('username').textContent = user.first_name || 'Player';
            if (user.photo_url) {
                document.getElementById('userAvatar').style.backgroundImage = `url(${user.photo_url})`;
                document.getElementById('userAvatar').textContent = '';
            }
        }
    }

    setupEventListeners() {
        const tapCircle = document.getElementById('tapCircle');

        tapCircle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleTap(e.touches[0]);
        });

        tapCircle.addEventListener('click', (e) => {
            this.handleTap(e);
        });

        document.getElementById('boostEnergy').addEventListener('click', () => this.buyBoost('energy'));
        document.getElementById('boostMultiplier').addEventListener('click', () => this.buyBoost('multiplier'));
        document.getElementById('boostAuto').addEventListener('click', () => this.buyBoost('auto'));
        document.getElementById('boostRecharge').addEventListener('click', () => this.buyBoost('recharge'));

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
                tg.HapticFeedback.impactOccurred('light');
            });
        });
    }

    handleTap(event) {
        if (this.energy < this.tapPower) {
            tg.HapticFeedback.notificationOccurred('error');
            return;
        }

        this.balance += this.tapPower;
        this.totalEarned += this.tapPower;
        this.energy = Math.max(0, this.energy - this.tapPower);
        this.totalTaps++;

        this.createFloatingNumber(event.clientX, event.clientY, this.tapPower);
        this.createParticleExplosion(event.clientX, event.clientY);

        tg.HapticFeedback.impactOccurred('medium');

        this.checkAchievements();
        this.updateLevel();
        this.updateUI();
        this.saveGameState();
    }

    createFloatingNumber(x, y, value) {
        const floatingNumber = document.createElement('div');
        floatingNumber.className = 'floating-number';
        floatingNumber.textContent = `+${value}`;

        const container = document.getElementById('floatingNumbers');
        const rect = container.getBoundingClientRect();

        floatingNumber.style.left = `${x - rect.left}px`;
        floatingNumber.style.top = `${y - rect.top}px`;

        container.appendChild(floatingNumber);

        setTimeout(() => {
            floatingNumber.remove();
        }, 1000);
    }

    createParticleExplosion(x, y) {
        const colors = ['#6c5ce7', '#a29bfe', '#ffeaa7', '#00b894'];
        const particleCount = 8;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            const container = document.getElementById('floatingNumbers');
            const rect = container.getBoundingClientRect();

            particle.style.left = `${x - rect.left}px`;
            particle.style.top = `${y - rect.top}px`;

            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 50 + Math.random() * 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);

            container.appendChild(particle);

            setTimeout(() => particle.remove(), 600);
        }
    }

    checkAchievements() {
        this.achievements.forEach(achievement => {
            if (achievement.completed) return;

            let shouldComplete = false;

            switch(achievement.id) {
                case 'first_tap':
                    shouldComplete = this.totalTaps >= 1;
                    break;
                case 'tap_100':
                    shouldComplete = this.totalTaps >= 100;
                    break;
                case 'tap_1000':
                    shouldComplete = this.totalTaps >= 1000;
                    break;
                case 'earn_1000':
                    shouldComplete = this.totalEarned >= 1000;
                    break;
                case 'earn_10000':
                    shouldComplete = this.totalEarned >= 10000;
                    break;
                case 'level_5':
                    shouldComplete = this.level >= 5;
                    break;
                case 'level_10':
                    shouldComplete = this.level >= 10;
                    break;
            }

            if (shouldComplete) {
                achievement.completed = true;
                this.balance += achievement.reward;
                tg.HapticFeedback.notificationOccurred('success');
                tg.showPopup({
                    title: `${achievement.icon} Achievement Unlocked!`,
                    message: `${achievement.name}\n+${achievement.reward} 💎`,
                    buttons: [{type: 'ok'}]
                });
            }
        });
    }

    initParticles() {
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(108, 92, 231, ${particle.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    buyBoost(type) {
        const boost = this.boosts[type];

        if (this.balance < boost.cost) {
            tg.HapticFeedback.notificationOccurred('error');
            tg.showAlert('Not enough balance!');
            return;
        }

        this.balance -= boost.cost;
        boost.level++;

        switch(type) {
            case 'energy':
                this.maxEnergy = Math.floor(this.maxEnergy * boost.multiplier);
                this.energy = this.maxEnergy;
                boost.cost = Math.floor(boost.cost * 1.8);
                break;
            case 'multiplier':
                this.tapPower = Math.floor(this.tapPower * boost.multiplier);
                boost.cost = Math.floor(boost.cost * 1.6);
                break;
            case 'auto':
                this.profitPerHour += boost.increment;
                boost.increment = Math.floor(boost.increment * 1.3);
                boost.cost = Math.floor(boost.cost * 2);
                break;
            case 'recharge':
                this.rechargeRate = Math.floor(this.rechargeRate * boost.multiplier);
                boost.cost = Math.floor(boost.cost * 1.7);
                break;
        }

        tg.HapticFeedback.notificationOccurred('success');
        this.updateUI();
        this.saveGameState();
    }

    startEnergyRecharge() {
        setInterval(() => {
            if (this.energy < this.maxEnergy) {
                this.energy = Math.min(this.maxEnergy, this.energy + this.rechargeRate);
                this.updateUI();
            }
        }, 1000);
    }

    startAutoFarm() {
        setInterval(() => {
            if (this.profitPerHour > 0) {
                const profit = Math.floor(this.profitPerHour / 3600);
                this.balance += profit;
                this.updateUI();
                this.saveGameState();
            }
        }, 1000);
    }

    updateLevel() {
        const newLevel = Math.floor(Math.log10(this.balance + 1) * 2) + 1;
        if (newLevel > this.level) {
            this.level = newLevel;
            tg.HapticFeedback.notificationOccurred('success');
            tg.showPopup({
                title: '🎉 Level Up!',
                message: `You reached level ${this.level}!`,
                buttons: [{type: 'ok'}]
            });
        }
    }

    updateUI() {
        document.getElementById('balance').textContent = this.formatNumber(this.balance);
        document.getElementById('energy').textContent = Math.floor(this.energy);
        document.getElementById('maxEnergy').textContent = this.maxEnergy;
        document.getElementById('level').textContent = this.level;
        document.getElementById('profitPerHour').textContent = this.formatNumber(this.profitPerHour);
        document.getElementById('tapMultiplier').textContent = `+${this.tapPower}`;

        document.getElementById('energyBoostLevel').textContent = this.boosts.energy.level;
        document.getElementById('energyBoostCost').textContent = this.formatNumber(this.boosts.energy.cost);

        document.getElementById('multiplierBoostLevel').textContent = this.boosts.multiplier.level;
        document.getElementById('multiplierBoostCost').textContent = this.formatNumber(this.boosts.multiplier.cost);

        document.getElementById('autoBoostLevel').textContent = this.boosts.auto.level;
        document.getElementById('autoBoostCost').textContent = this.formatNumber(this.boosts.auto.cost);

        document.getElementById('rechargeBoostLevel').textContent = this.boosts.recharge.level;
        document.getElementById('rechargeBoostCost').textContent = this.formatNumber(this.boosts.recharge.cost);

        ['energy', 'multiplier', 'auto', 'recharge'].forEach(type => {
            const card = document.getElementById(`boost${type.charAt(0).toUpperCase() + type.slice(1)}`);
            if (this.balance < this.boosts[type].cost) {
                card.classList.add('disabled');
            } else {
                card.classList.remove('disabled');
            }
        });

        this.updateAchievementsUI();
        this.updateStatsUI();
    }

    updateAchievementsUI() {
        const container = document.getElementById('achievementsList');
        if (!container) return;

        container.innerHTML = this.achievements.map(achievement => `
            <div class="achievement-card ${achievement.completed ? 'completed' : ''}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.desc}</div>
                </div>
                <div class="achievement-reward">
                    ${achievement.completed ? '✅' : `💎 ${achievement.reward}`}
                </div>
            </div>
        `).join('');
    }

    updateStatsUI() {
        const completedAchievements = this.achievements.filter(a => a.completed).length;

        document.getElementById('statTotalTaps').textContent = this.formatNumber(this.totalTaps);
        document.getElementById('statTotalEarned').textContent = this.formatNumber(this.totalEarned);
        document.getElementById('statLevel').textContent = this.level;
        document.getElementById('statTapPower').textContent = this.tapPower;
        document.getElementById('statProfitPerHour').textContent = this.formatNumber(this.profitPerHour);
        document.getElementById('statAchievements').textContent = `${completedAchievements}/${this.achievements.length}`;
    }

    switchTab(tab) {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        const sections = {
            home: ['balance-section', 'tap-section'],
            boosts: ['boostsTab'],
            tasks: ['tasksTab'],
            stats: ['statsTab']
        };

        document.querySelectorAll('.balance-section, .tap-section, .boost-section, .tasks-section, .stats-section').forEach(section => {
            section.classList.add('hidden');
        });

        if (sections[tab]) {
            sections[tab].forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.classList.remove('hidden');
                } else {
                    document.querySelector(`.${sectionId}`).classList.remove('hidden');
                }
            });
        }

        if (tab === 'tasks') {
            this.updateAchievementsUI();
        } else if (tab === 'stats') {
            this.updateStatsUI();
        }
    }

    formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
        return Math.floor(num).toString();
    }

    saveGameState() {
        const state = {
            balance: this.balance,
            energy: this.energy,
            maxEnergy: this.maxEnergy,
            tapPower: this.tapPower,
            level: this.level,
            profitPerHour: this.profitPerHour,
            boosts: this.boosts,
            rechargeRate: this.rechargeRate,
            totalTaps: this.totalTaps,
            totalEarned: this.totalEarned,
            achievements: this.achievements,
            lastUpdate: Date.now()
        };

        localStorage.setItem('cryptoClickerState', JSON.stringify(state));

        if (tg.CloudStorage) {
            tg.CloudStorage.setItem('gameState', JSON.stringify(state));
        }
    }

    loadGameState() {
        const savedState = localStorage.getItem('cryptoClickerState');

        if (savedState) {
            const state = JSON.parse(savedState);

            const timePassed = (Date.now() - state.lastUpdate) / 1000;
            const offlineProfit = Math.floor((state.profitPerHour / 3600) * timePassed);

            this.balance = state.balance + offlineProfit;
            this.energy = Math.min(state.maxEnergy, state.energy + Math.floor(timePassed * state.rechargeRate));
            this.maxEnergy = state.maxEnergy;
            this.tapPower = state.tapPower;
            this.level = state.level;
            this.profitPerHour = state.profitPerHour;
            this.boosts = state.boosts;
            this.rechargeRate = state.rechargeRate;
            this.totalTaps = state.totalTaps || 0;
            this.totalEarned = state.totalEarned || 0;

            if (state.achievements) {
                this.achievements = state.achievements;
            }

            if (offlineProfit > 0) {
                setTimeout(() => {
                    tg.showPopup({
                        title: '💰 Offline Earnings',
                        message: `You earned ${this.formatNumber(offlineProfit)} 💎 while you were away!`,
                        buttons: [{type: 'ok'}]
                    });
                }, 500);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CryptoClicker();
});
