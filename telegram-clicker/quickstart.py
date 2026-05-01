#!/usr/bin/env python3
"""
Quick start script for Crypto Clicker development
"""

import os
import sys
import webbrowser
import time
from pathlib import Path

def main():
    print("""
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     💎 CRYPTO CLICKER - TELEGRAM MINI APP 💎            ║
║                                                          ║
║     Quick Start Guide                                    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    """)

    # Check if we're in the right directory
    if not Path('index.html').exists():
        print("❌ Error: index.html not found!")
        print("   Please run this script from the telegram-clicker directory")
        sys.exit(1)

    print("✅ Project files found!")
    print("\n📋 Available commands:\n")
    print("  1. Start development server")
    print("  2. Open test page")
    print("  3. View README")
    print("  4. View deployment guide")
    print("  5. Exit")
    print()

    choice = input("Enter your choice (1-5): ").strip()

    if choice == '1':
        print("\n🚀 Starting development server...")
        print("   Server will run on http://localhost:8000")
        print("   Press Ctrl+C to stop\n")
        time.sleep(1)
        os.system('python server.py')

    elif choice == '2':
        print("\n🧪 Opening test page...")
        webbrowser.open('http://localhost:8000/test.html')
        print("   If server is not running, choose option 1 first")

    elif choice == '3':
        if Path('README.md').exists():
            with open('README.md', 'r', encoding='utf-8') as f:
                print("\n" + "="*60)
                print(f.read())
                print("="*60)
        else:
            print("❌ README.md not found")

    elif choice == '4':
        if Path('DEPLOY.md').exists():
            with open('DEPLOY.md', 'r', encoding='utf-8') as f:
                print("\n" + "="*60)
                print(f.read())
                print("="*60)
        else:
            print("❌ DEPLOY.md not found")

    elif choice == '5':
        print("\n👋 Goodbye!")
        sys.exit(0)

    else:
        print("\n❌ Invalid choice!")
        sys.exit(1)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Stopped by user. Goodbye!")
        sys.exit(0)
