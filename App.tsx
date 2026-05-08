DeadlineFlow/
├── android/                    # Android native build files
│   ├── app/
│   │   ├── build.gradle
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       └── res/
│   │           ├── mipmap-hdpi/ic_launcher.png
│   │           ├── mipmap-xhdpi/ic_launcher.png
│   │           └── values/strings.xml
├── src/
│   ├── components/
│   │   ├── TaskCard.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── ProgressRing.tsx
│   │   ├── PomodoroTimer.tsx
│   │   ├── WeeklyChart.tsx
│   │   ├── QuoteCard.tsx
│   │   └── PriorityBadge.tsx
│   ├── screens/
│   │   ├── AuthScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── TasksScreen.tsx
│   │   ├── FocusScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── store/
│   │   ├── taskStore.ts         # Zustand state management
│   │   └── settingsStore.ts
│   ├── hooks/
│   │   ├── useCountdown.ts
│   │   ├── usePomodoro.ts
│   │   └── useTheme.ts
│   ├── utils/
│   │   ├── deadlineUtils.ts
│   │   ├── notifications.ts
│   │   └── pdfExport.ts
│   ├── constants/
│   │   ├── theme.ts
│   │   ├── categories.ts
│   │   └── quotes.ts
│   └── types/
│       └── index.ts
├── assets/
│   ├── icon.png                # 1024x1024 app icon
│   ├── splash.png              # Splash screen
│   └── adaptive-icon.png
├── app.json                    # Expo config
├── package.json
├── tsconfig.json
├── babel.config.js
└── README.md
