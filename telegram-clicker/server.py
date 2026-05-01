#!/usr/bin/env python3
"""
Simple HTTP server for testing Telegram Mini App locally
Usage: python server.py
"""

import http.server
import socketserver
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔══════════════════════════════════════════════════════════╗
║  🚀 Telegram Mini App - Development Server               ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Server running at:                                      ║
║  📱 http://localhost:{PORT}                                ║
║  🧪 http://localhost:{PORT}/test.html                      ║
║                                                          ║
║  Press Ctrl+C to stop the server                         ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
        """)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped. Goodbye!")

if __name__ == "__main__":
    main()
