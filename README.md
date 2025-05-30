# WiFiSuite

A cross-platform suite to view, copy, share, and sync your Wi-Fi/network info — with easy login, cloud sync, QR sharing, and history!  
Supports **Android**, **iOS**, and **Web/PWA**.

## Features

- Modern UI: Material (Android), SwiftUI (iOS), React (Web)
- Login: Google (Android/Web), Sign in with Apple (iOS)
- Network info card (SSID, BSSID, IP, signal, speed, etc.)
- Copy, share, QR code, and save network info
- History (local and optional cloud sync via Firebase)
- PWA install support on web

## Monorepo Structure

```
WiFiSuite/
├── android/      # Android project (Kotlin, Jetpack Compose)
├── ios/          # iOS project (SwiftUI)
├── web/          # Web app (React, Firebase, PWA)
├── .github/      # Workflows, issue templates, PR templates
├── README.md     # This file
```

## Setup

**Android:** Open in Android Studio, configure Firebase for Google Auth, run on device/emulator.  
**iOS:** Open in Xcode, enable Sign in with Apple, run on device/simulator.  
**Web:**  
```bash
cd web
npm install
# Edit src/firebase.js with your Firebase project
npm start
```

## Contributions

PRs, issues, and feature requests welcome!