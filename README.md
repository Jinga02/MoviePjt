# 제목 0. 프로젝트 설정

## Backend

backend/beomflix/movies/fixtures 안에 있는 json 파일을 loaddata 합니다. <br>
필수!!<br>
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

### 공용

navbar (페이지 상단 메뉴바)<br>
로고 클릭 시 메인 페이지 이동

### 영화 검색창

모든 영화에서 사용자가 입력한 영화 제목을 필터링 후 모두 출력

### 프로필 페이지

로그인 한 유저 페이지 이동
로그아웃

### 배경화면

iframe을 활용한 영상을 배경으로 삽입

### mainView.js (메인 페이지)

추천 영화, 현재 상연중 인 영화, 인기 영화, 애니메이션 별 출력 (swiper를 통한 출력)<br>
영화 클릭시 영화 상세 정보 요약 or 상세보기 페이지로 이동

### movieDetail.js

선택한 영화 상세 정보 출력<br>
ifram을 활용한 영화 예고편 출력

#### 리뷰

평점을 별점으로 출력<br>
좋아요 클릭 시 속이 찬 하트, 좋아요 취소 시 빈 하트 출력<br>
리뷰 작성자 클릭 시 작성자 프로필 이동<br>
영화 좋아요

평점을 별점으로 출력<br>
사용자가 좋아요 한 영화 목록들 중 현재 페이지의 영화 id와 일치하는지 여부에 따라 좋아요 표시 구분<br>
좋아요 클릭 시 속이 찬 하트, 좋아요 취소 시 빈 하트 출력

### profileView.js

#### 유저 정보 출력

유저 이름, 팔로워, 팔로잉, 자기소개 출력<br>
로그인 유저와 프로필 페이지의 유저가 동일 할 때만 자기소개입력창 출력 및 입력 가능

#### 팔로우

팔로우와 팔로잉 한 사람의 수, 팔로우 여부에 따른 모양 구분<br>
로그인 유저와 프로필 페이지의 유저가 동일 하지 않을 시 팔로워한 사람만 조회 가능<br>
로그인 유저와 프로필 페이지의 유저가 동일 할 시 팔로잉한 사람 조회 가능<br>
좋아요 한 영화 목록

유저가 좋아요 한 영화 목록 조회 후 영화 데이터에 있는 좋아요 한 유저 아이디와 프로필 페이지의 유저 아이디가 동일 한 영화만 출력<br>
좋아요 한 영화 제목 클릭 시 해당 영화 상세 페이지로 이동<br>

#### 방명록

로그인 유저와 프로필 페이지의 유저가 동일하지 않을 때 만 방명록 입력창 출력 및 입력 가능<br>
다른 유저들이 남긴 방명록 출력

## BE

### Account

회원가입<br>
로그인<br>
로그아웃<br>
유저 프로필 조회<br>
id로 조회<br>
username으로 조회<br>
유저 프로필 수정<br>
프로필 사진 업로드, 수정<br>
프로필 자기소개 작성<br>
유저가 좋아요 한 영화 목록 조회

### Movie

모든 영화 조회<br>
현재 상영중인 영화 조회<br>
영화 상세 조회<br>
영화 장르별 조회<br>
특정 영화 좋아요<br>
영화에 리뷰 작성<br>
영화 내 리뷰 조회, 수정, 삭제<br>
특정 리뷰 좋아요<br>
유저별 맞춤 영화 추천

### Community

팔로우 기능<br>
유저 프로필에 방명록 작성<br>
유저 프로필에 있는 방명록 목록 조회<br>
자신의 프로필에 있는 특정 방명록 삭제 2. 목표 서비스 구현 및 실제 구현 정도<br>
100% 구현 완료

### Account

회원가입<br>
로그인<br>
로그아웃<br>
유저 프로필 조회<br>
id로 조회<br>
username으로 조회<br>
유저 프로필 수정<br>
프로필 자기소개 작성<br>
유저가 좋아요 한 영화 목록 조회

[API 명세(Notion 링크)]("https://www.notion.so/42465bfdbc4a4c75a1d7c8b7819d2d73?v=c345e91b8ee647a7979c0e485f5d2e97")

# 3. 데이터 베이스 모델링 (ERD)

![ERD]("https://github.com/Jinga02/MoviePjt/assets/110621233/754b4259-cc8d-4de3-be2c-081051e6e4b1")

# 4. 영화 추천 알고리즘

유저가 좋아요 한 영화들의 장르를 분석하여 비율이 가장 높은 장르별 영화를 추천

# 5. 서비스 대표 기능 및 페이지 설명

## 1. 첫 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/5bb0cb8a-6116-4bfd-9906-e486afa0a44b">

## 2. 메인 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/8fd935e2-b839-4ee7-9bf0-3d93d8923c40">

## 3. 영화 검색

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/57beda39-c1f6-41d1-b119-b6d48d5ca0d4">

## 4. 영화 상세 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/385e455e-e128-49e9-a75f-cb5bed4dc600">

## 5. 프로필 페이지

<img src="https://github.com/Jinga02/MoviePjt/assets/110621233/d332f813-e710-4eef-a732-7de1a922d25f">

# 6. 소감

이번 영화추천 웹사이트 개발에서 프론트엔드를 담당하며, 많은 것을 느꼈습니다. Vue와 JavaScript를 배운 기간이 길지 않아 걱정이 앞섰지만, 도전적인 자세로 프로젝트를 진행했습니다.<br> 그 과정에서 필요한 라이브러리를 하나하나 찾아가며 사용법을 익히고 적용하는 경험도 했습니다. 하지만, 코드 가독성과 유지보수를 위해 모듈 세분화의 중요성을 뒤늦게 깨달았습니다. 이를 통해 프로젝트 초기부터 코드의 모듈화 계획을 철저히 세우는 것의 중요함을 배웠습니다. 또한, 백엔드에서 제공하는 데이터를 어떻게 사용할지에 대한 계획이 중요하다는 것도 알게 되었습니다. 데이터를 그저 페이지에 출력하는 것이 아니라, 필요한 데이터와 속성을 미리 파악하고 이를 최대한 효율적으로 활용해야 한다는 것을 깨달았습니다.

이번 프로젝트를 통해 프론트엔드와 백엔드 중 어느 것에 더 집중해야 할지에 대한 답을 찾았습니다. 프론트엔드 개발자로서의 역량을 키우기 위해 남은 시간동안 더욱 집중하고 노력해야겠다고 마음 먹게 되었습니다.

무엇보다, 처음부터 끝까지 웹 페이지를 만들어낸 이 경험이, 지금까지 내가 잘하고 있는지, 이게 맞는지에 대한 의구심을 해결해주었습니다. 이번 프로젝트경험은 저에게 더 큰 동기부여가 되었으며, 남은 기간 동안 프론트엔드 개발 역량을 키우는 데 도움이 될 것이라 확신합니다.

다음 프로젝트에서는 이번에 느낀 실수와 개선점들을 반영하여, 더욱 성공적인 결과물을 만들어내는 데 집중하고 싶습니다. 이 프로젝트를 통해 얻은 교훈과 경험을 바탕으로 더 멋진 프로젝트를 성공시킬 것입니다.
