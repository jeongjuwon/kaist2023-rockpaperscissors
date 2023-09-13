# npm 설치

```
npm install
npx pod-install # 또는 cd ios && pod install
```

# 아이폰 실행

번들러는 자동으로 뜨지만 다음처럼 직접 실행하여 통제하는게 편하다.

```
# 터미널을 하나 실행한다.
npx react-native start --reset-cache
```

```
# 다른 터미널을 하나더 실행한다.
npx react-native run-ios
```

## 디바이스 실행

디비이스 빌드시엔 xcode를 통해 프로필 정보가 등록되어야합니다.

```
xed -b ios
```

프로필 정보 등록 후 실행

```
npx react-native run-ios
```

# 안드로이드 실행(디바이스 or 에뮬레이터)

```
npx react-native run-android
```
