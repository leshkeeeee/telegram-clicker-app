#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Project validation script for Crypto Clicker
Checks that all files are present and valid
"""

import os
import sys
from pathlib import Path

def check_file(filepath, min_size=0):
    """Check if file exists and meets minimum size"""
    if not Path(filepath).exists():
        return False, "Missing"

    size = Path(filepath).stat().st_size
    if size < min_size:
        return False, f"Too small ({size} bytes)"

    return True, f"OK ({size} bytes)"

def main():
    print("\n" + "="*60)
    print("  CRYPTO CLICKER - PROJECT VALIDATION")
    print("="*60)

    # Define required files with minimum sizes
    required_files = {
        'Core Application': {
            'index.html': 5000,
            'app.js': 15000,
            'style.css': 8000,
            'manifest.json': 400
        },
        'Development Tools': {
            'server.py': 2000,
            'test.html': 4000,
            'quickstart.py': 1500,
            'start.bat': 200,
            'start.sh': 200,
            'examples.html': 8000
        },
        'Documentation': {
            'README.md': 4000,
            'README_RU.md': 8000,
            'DEPLOY.md': 5000,
            'QUICKREF.md': 4000,
            'START_HERE.md': 3000,
            'CHANGELOG.md': 2000
        },
        'Configuration': {
            'package.json': 500,
            '.gitignore': 100,
            'PROJECT_COMPLETE.txt': 5000
        }
    }

    all_valid = True
    total_files = 0
    total_size = 0

    for category, files in required_files.items():
        print(f"\n{category}:")
        print("-" * 60)

        for filename, min_size in files.items():
            total_files += 1
            valid, status = check_file(filename, min_size)

            if valid:
                icon = "[OK]"
                size = Path(filename).stat().st_size
                total_size += size
            else:
                icon = "[FAIL]"
                all_valid = False

            print(f"  {icon} {filename:<25} {status}")

    print("\n" + "=" * 60)
    print(f"\nSummary:")
    print(f"  Total files: {total_files}")
    print(f"  Total size: {total_size / 1024:.1f} KB")

    if all_valid:
        print("\n[SUCCESS] All files present and valid!")
        print("\nReady to deploy!")
        print("\nNext steps:")
        print("  1. python server.py          - Test locally")
        print("  2. git init && git add .     - Initialize git")
        print("  3. Deploy to hosting         - See DEPLOY.md")
        print("  4. Create Telegram bot       - @BotFather")
        return 0
    else:
        print("\n[ERROR] Some files are missing or invalid!")
        print("   Please check the errors above.")
        return 1

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n👋 Validation cancelled.")
        sys.exit(1)
