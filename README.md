## Assignment (React Native)

This repository contains a React Native application bootstrapped with the React Native CLI and written in TypeScript.

### Setup

Prerequisites:
- Node.js (>=20 recommended)
- Yarn (preferred) or npm
- Watchman (macOS recommended)
- JDK 11+ (for Android builds)
- Android Studio with an Android SDK and an emulator or device
- Xcode (for iOS builds on macOS)

Quick setup commands (from project root):

```bash
yarn install
# macOS / iOS only: install CocoaPods and pods
cd ios && bundle install && bundle exec pod install && cd ..
yarn start       # starts Metro
yarn android     # build + install on Android device/emulator
yarn ios         # build + run on iOS simulator (macOS only)

```

Notes:
- If you encounter native dependency issues on iOS, run `bundle exec pod install` inside the `ios/` folder. If CocoaPods is not installed system-wide, use Bundler as shown above.
- For Android, ensure `ANDROID_HOME` or `ANDROID_SDK_ROOT` is set and the emulator/device is available.

### Key technical decisions & tradeoffs

- **React Native + TypeScript**: chosen for fast cross-platform development and strong typing. Tradeoff: some native features require bridging and extra platform-specific work.

- **Project structure (features/screens/services/utils)**: keeps UI, navigation, and services decoupled for clarity and easier testing. Tradeoff: initial boilerplate but better long-term maintainability.

- **Navigation**: `react-navigation` (assumed). Provides flexible stacks.

- **State management**: lightweight approach using React state and hooks for most screens (scoped state). Tradeoff: fewer moving parts and easier onboarding, but may need migration to Redux/Zustand for large-scale shared state or complex caching.

- **API layer**: centralized services (see `src/services`) to isolate network logic. Tradeoff: slight upfront structure cost. benefits include easier testing and retries.

- **Authentication Management**: The app uses token-based authentication. On app launch, checks if a valid token exists in AsyncStorage. Tradeoff: If a token is found, the user is considered authenticated and navigates directly to the MainNavigator (protected screens). If no token is found, the AuthNavigator (login/signup screens) is shown

- **Assets & icons**: vector icons and a centralized assets folder for reusable images/fonts. Tradeoff: includes native linking or pod updates on some icon libraries.
=

### What I would improve with more time

- **Add E2E tests**: integrate Detox or Playwright to cover sign-in flows, navigation, and native integrations.
- **CI/CD pipeline**: add GitHub Actions (or similar) for automated linting, tests, building Android/iOS artifacts, and deploying staging builds (with Fastlane for iOS/Android releases).
- **Performance profiling & optimizations**: measure slow screens, reduce re-renders, and optimize large lists with proper keying and memoization.
- **Stronger offline support & caching**: add a caching layer (e.g., react-query or custom cache) and offline fallbacks for network failure scenarios.
- **Refactor state to a scalable solution**: evaluate Redux Toolkit or Zustand if shared global state grows more complex.


### Quick references

- App entry: `App.tsx`
- Navigation: `src/navigations/` (mainNavigator, authNavigator)
- Screens: `src/screens/`
- Services / API: `src/services/`

