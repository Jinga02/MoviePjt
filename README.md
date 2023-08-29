# 사용자 관심기반 영화추천 서비스🎬

## Backend

backend/beomflix/movies/fixtures 안에 있는 json 파일을 loaddata 합니다. <br>
actors.json, genre.json, movies.json, now_movies.json 순으로 합니다.<br>
python manage.py loaddata actors.json genre.json movies.json now_movies.json

## Frontend

frontend/beomflix 안에서 설정을 설치합니다.<br>
npm install<br>

만약 설치가 제대로 되지 않는다면 아래의 명령어를 터미널에 입력해주세요. (둘 중 하나만 입력하면 됩니다.)<br>
npm install --force npm install —legacy-peer-deps

# 1. 프로젝트 개요

## 1) 개발 기간

2023.06.17 ~ 2023.06.26 (총 9일)

## 2) 개발 도구

### Backend

Python 3.9.13<br>
Django 3.2.18<br>
Django REST framework 3.14.0

### Frontend

Node.js 18.16.0<br>
React 18.2.0

### Database

SQlite

# 2. 구현기능

## FE

## 공용

1. navbar (페이지 상단 메뉴바)
2. 로고 클릭 시 메인 페이지 이동

## 영화 검색창

1. 모든 영화에서 사용자가 입력한 영화 제목을 필터링 후 모두 출력

## 프로필 페이지

1. 로그인 한 유저 페이지 이동
2. 로그아웃

## 배경화면

1. iframe을 활용한 영상을 배경으로 삽입

## mainView.js (메인 페이지)

1. 추천 영화, 현재 상연중 인 영화, 인기 영화, 애니메이션 별 출력 (swiper를 통한 출력)<br>
2. 영화 클릭시 영화 상세 정보 요약 or 상세보기 페이지로 이동

## movieDetail.js

### - 영화 소개

1. 선택한 영화 상세 정보 출력<br>
2. ifram을 활용한 영화 예고편 출력

### - 리뷰

1. 평점을 별점으로 출력<br>
2. 좋아요 클릭 시 속이 찬 하트, 좋아요 취소 시 빈 하트 출력<br>
3. 리뷰 작성자 클릭 시 작성자 프로필 이동<br>
4. 영화 좋아요
5. 평점을 별점으로 출력<br>
6. 사용자가 좋아요 한 영화 목록들 중 현재 페이지의 영화 id와 일치하는지 여부에 따라 좋아요 표시 구분<br>
7. 좋아요 클릭 시 속이 찬 하트, 좋아요 취소 시 빈 하트 출력

### profileView.js

#### 유저 정보 출력

1. 유저 이름, 팔로워, 팔로잉, 자기소개 출력
2. 로그인 유저와 프로필 페이지의 유저가 동일 할 때만 자기소개입력창 출력 및 입력 가능

#### 팔로우

1. 팔로우와 팔로잉 한 사람의 수, 팔로우 여부에 따른 모양 구분
2. 로그인 유저와 프로필 페이지의 유저가 동일 하지 않을 시 팔로워한 사람만 조회 가능
3. 로그인 유저와 프로필 페이지의 유저가 동일 할 시 팔로잉한 사람 조회 가능

#### 좋아요 한 영화

1. 좋아요 한 영화 목록
2. 유저가 좋아요 한 영화 목록 조회 후 영화 데이터에 있는 좋아요 한 유저 아이디와 프로필 페이지의 유저 아이디가 동일 한 영화만 출력
3. 좋아요 한 영화 제목 클릭 시 해당 영화 상세 페이지로 이동

#### 방명록

1. 로그인 유저와 프로필 페이지의 유저가 동일하지 않을 때 만 방명록 입력창 출력 및 입력 가능
2. 다른 유저들이 남긴 방명록 출력

## BE

### Account

1. 회원가입<br>
2. 로그인<br>
3. 로그아웃<br>
4. 유저 프로필 조회<br>
5. id로 조회<br>
6. username으로 조회<br>
7. 유저 프로필 수정<br>
8. 프로필 사진 업로드, 수정<br>
9. 프로필 자기소개 작성<br>
10. 유저가 좋아요 한 영화 목록 조회

### Movie

1. 모든 영화 조회<br>
2. 현재 상영중인 영화 조회<br>
3. 영화 상세 조회<br>
4. 영화 장르별 조회<br>
5. 특정 영화 좋아요<br>
6. 영화에 리뷰 작성<br>
7. 영화 내 리뷰 조회, 수정, 삭제<br>
8. 특정 리뷰 좋아요<br>
9. 유저별 맞춤 영화 추천

### Community

1. 팔로우 기능<br>
2. 유저 프로필에 방명록 작성<br>
3. 유저 프로필에 있는 방명록 목록 조회<br>
4. 자신의 프로필에 있는 특정 방명록 삭제 2. 목표 서비스 구현 및 실제 구현 정도<br>

### Account

1. 회원가입<br>
2. 로그인<br>
3. 로그아웃<br>
4. 유저 프로필 조회<br>
5. id로 조회<br>
6. username으로 조회<br>
7. 유저 프로필 수정<br>
8. 프로필 자기소개 작성<br>
9. 유저가 좋아요 한 영화 목록 조회

[API 명세(Notion 링크)](https://www.notion.so/42465bfdbc4a4c75a1d7c8b7819d2d73?v=c345e91b8ee647a7979c0e485f5d2e97)

# 3. 데이터 베이스 모델링 (ERD)

![ERD](https://github.com/Jinga02/MoviePjt/assets/110621233/754b4259-cc8d-4de3-be2c-081051e6e4b1)

# 4. 영화 추천 알고리즘

유저가 좋아요 한 영화들의 장르를 분석하여 비율이 가장 높은 장르별 영화를 추천
![알고리즘](https://github.com/BeomeoMen/SSAFY_FINAL2/raw/main/readme.assets/recommend.png)

# 5. 서비스 대표 기능 및 페이지 설명

## 1. 첫 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/5bb0cb8a-6116-4bfd-9906-e486afa0a44b">

## 2. 메인 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/8fd935e2-b839-4ee7-9bf0-3d93d8923c40">

## 3. 영화 검색

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/57beda39-c1f6-41d1-b119-b6d48d5ca0d4">

## 4. 영화 상세 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/6f8ce01b-1ad1-469f-a7fb-a4c05f0b9b30">

## 5. 프로필 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/d332f813-e710-4eef-a732-7de1a922d25f">

# 6. 회고

## 느낀점
Backend와 Frontend 개발을 모두 맡아 진행한 1인 프로젝트인만큼 많은것을 느꼈습니다.

하지만 프로젝트를 모두 내 손으로 만들어낸다는 느낌을 많이 받아서 모든 과정이 즐거웠고, 프로젝트가 완성되었을때는 부족한 점도 많았지만 “해냈다!”라는 기쁨과 “개발의 즐거움”을 느낄 수 있었습니다.

다음은 제가 느낀 부족한 점과 개선할 점들입니다.

### 1. **폴더 구조와 컴포넌트**

### 부족한 점 :

1. 컴포넌트 설계를 하지 않고 기능을 구현하면서 그때그때 컴포넌트를 생성했다. 

### 개선 방안 :

1. 코드부터 치지 않고 계획을 최대한 할 수 있는 오래 세세하게 한다.
2. 폴더 구조를 만들 때는 처음 보는 사람도 프로젝트 구조를 쉽게 파악하고 이해할 수 있게 일관성과 가독성있게 구조화한다.
3. 컴포넌트는 각 기능 별로 그룹화하고 그 안의 작은 기능들까지 세분화하여 재사용성과 유지보수성을 높인다.

### 2. **UI와 디자인**

### 부족한 점:

1. 해상도마다 비율 설정을 해주지 않아 화면마다 페이지가 들쑥날쑥한다.
2. 버튼크기, 입렵창 크기 등 세세한 부분에 많은 신경을 쓰지 못했다.
3. 전체적인 디자인이 깔금하고 한눈에 파악하기 쉽다는 생각이 들지 않는다.

### 개선 방안 :

1. 다음 프로젝트에서는 반응형 웹 디자인을 통해 다양한 해상도에 대응할 수 도록 한다 .
2. 버튼 크기, 입력창 크기 등의 요소들을 일관성 있게 디자인하고, 사용자의 편의를 고려하여 직관적인 UI 요소를 구성한다.
3. 깔끔하고 사용자에게 친숙한 디자인을 구현하기 위해 다양한 UI/UX 디자인 가이드를 참고하고, 컬러 조합과 레이아웃도 신중히 선택한다.

### 3. **기능 구현**

### 부족한 점 :

1. 프로젝트의 서비스 범위가 너무 좁다.
2. 다양한 기능이 제공되지 않는다.

### 개선 방안 :

1. 다음 프로젝트에서는 현재보다 더 넓은 범위의 기능을 추가하여 사용자에게 다양한 경험을 제공할 수 있도록 노력한다. 사용자가 웹사이트를 더 많은 방식으로 활용할 수 있도록 고민한다.
2. 기능 추가를 위해 사용자의 니즈와 요구사항을 조사하고 분석한다. 어떤 부분이 더 사용자들의 관심을 끌 것인지를 고려하여 새로운 기능을 도입한다.
