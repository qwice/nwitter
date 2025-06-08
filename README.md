# Nwitter (트위터 클론 프로젝트)

React + TypeScript + Firebase를 활용한 트위터 클론 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Styled Components
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **Routing**: React Router DOM
- **Deployment**: Firebase Hosting

## 📁 프로젝트 구조

```
nwitter-main/
├── src/
│   ├── components/              # 재사용 가능한 컴포넌트들
│   │   ├── auth-components.ts          # 인증 관련 스타일 컴포넌트
│   │   ├── github-btn-components.tsx   # GitHub 버튼 스타일 컴포넌트
│   │   ├── github-btn.tsx              # GitHub 로그인 버튼
│   │   ├── layout-components.tsx       # 레이아웃 스타일 컴포넌트
│   │   ├── layout.tsx                  # 메인 레이아웃 컴포넌트
│   │   ├── loading-screen-components.tsx # 로딩 화면 스타일
│   │   ├── loading-screen.tsx          # 로딩 화면 컴포넌트
│   │   ├── post-tweet-components.tsx   # 트윗 작성 스타일 컴포넌트
│   │   ├── post-tweet-form.tsx         # 트윗 작성 폼
│   │   ├── protected-route.tsx         # 보호된 라우트 컴포넌트
│   │   ├── timeline.tsx                # 타임라인 컴포넌트
│   │   ├── tweet.tsx                   # 개별 트윗 컴포넌트
│   │   └── tweets-components.tsx       # 트윗 스타일 컴포넌트
│   ├── routes/                  # 페이지 컴포넌트들
│   │   ├── create-account.tsx          # 회원가입 페이지
│   │   ├── firebase.ts                 # Firebase 설정
│   │   ├── home.tsx                    # 홈 페이지
│   │   ├── login.tsx                   # 로그인 페이지
│   │   └── profile.tsx                 # 프로필 페이지
│   ├── App.tsx                  # 메인 애플리케이션 컴포넌트
│   ├── main.tsx                 # 애플리케이션 진입점
│   └── vite-env.d.ts           # Vite 타입 정의
├── public/                      # 정적 파일들
│   ├── github-mark.svg         # GitHub 마크 아이콘
│   └── vite.svg                # Vite 로고
├── .firebase/                   # Firebase 설정 파일들
├── firebase.json               # Firebase 호스팅 설정
├── .firebaserc                 # Firebase 프로젝트 설정
├── package.json                # 의존성 관리
├── tsconfig.json               # TypeScript 설정
├── vite.config.ts              # Vite 설정
└── index.html                  # HTML 템플릿
```

## ⭐ 주요 기능

- 🔐 **사용자 인증**: Firebase Authentication을 활용한 이메일/비밀번호 및 GitHub OAuth 로그인
- 📝 **트윗 작성**: 텍스트와 이미지를 포함한 트윗 작성 기능
- 📱 **타임라인**: 실시간 트윗 피드
- 👤 **프로필 관리**: 사용자 프로필 정보 및 트윗 관리
- 🛡️ **보호된 라우트**: 인증된 사용자만 접근 가능한 페이지 구성
- 📱 **반응형 디자인**: 다양한 화면 크기에 최적화된 UI

## 🛠️ 설치 및 실행

### 사전 요구사항
- Node.js (v14 이상)
- Firebase 프로젝트 설정

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### Firebase 배포
```bash
npm run deploy
```

## 🔧 사용된 주요 라이브러리

- **react**: ^18.2.0 - React 프레임워크
- **react-router-dom**: ^6.14.2 - 클라이언트 사이드 라우팅
- **firebase**: ^10.7.1 - Backend as a Service
- **styled-components**: ^6.0.7 - CSS-in-JS 스타일링
- **vite**: ^4.4.5 - 빠른 빌드 도구

## 🚀 배포

이 프로젝트는 Firebase Hosting을 통해 배포됩니다. `npm run deploy` 명령어를 통해 자동으로 빌드 후 배포가 진행됩니다.

## 📄 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.
