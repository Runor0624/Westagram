### 프로젝트 소개

위코드 에서 진행한 Westagram의 리팩토링 프로젝트

새롭게 배운 TypeScript를 사용하여 기존 JavaScript를 리팩토링 하며

당시 반영하지 못한 반응형 등 일부를 추가하는 프로젝트입니다.

https://github.com/wecode-bootcamp-korea/28-React-Westagram-4/pull/2

이때 진행한 프로젝트를 개선하는것을 목표로 합니다.

##### 진행 기간

2022.04.17 - 2022.04.24

##### 해당 프로젝트 초기 목표

우선 상단의 링크에서 당시 구현한건 구현함을 목표로 한다.
단 기존처럼 JavaScript가 아닌 TypeScript 로 하여 TypeScript+React 로 소규모 프로젝트를 만드는것을 목표로 한다.
React를 제외한 나머지는 당시 사용하지 않은것을 사용하여 진행하는것을 목표로 한다.

##### 어떤걸 달성했나?

- 우선 타입스크립트 + 리액트를 최초 사용하여 소규모 프로젝트를 구현하였음.
- 메인페이지, 로그인, 회원가입 페이지만 존재하나 당시 구현한 걸 구현하였음
- 당시 하지 못하던 반응형을 간단하게 구현하였음
  - 크기를 일정 크기 이상 감소시킬시, Nav와 Aside가 사라지도록 구현

##### 어떤걸 달성하지 못했나?

- 우선 로그인,회원가입 서버를 구축하지 못해 당시에 Back-End와 하던 서버와의 통신을 구현하지 못했음.

#### Skill

React, TypeScript, Recoil, Styled-Components

#### 실행 방법

npm install 이후
npm run start

#### Lighthouse 점수 개선 전/후 비교

##### 개선 전

![LightHouseBefore](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fqw2aw%2FbtrAh8bwiUt%2FmbNRFHMni7lVX5LCUMEgUk%2Fimg.png)
