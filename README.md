# 우리FISA 3기 런치게임! By Team KimKong ~~킹콩~~

## 서비스 소개
> 매일 점심시간마다 **"오늘은 뭐 먹지?"** 라는 행복한 고민을 하는 사람들도 있는 반면, 매일 점심메뉴 고르는 것이 가장 힘든 사람들이 있습니다. 바로 우리 KimKong처럼요. 뭐든 잘 먹지만 선택이 어려운 분들을 위해 만들게 되었습니다.

## 페이지 사용법
블라블라

## UI Style Guide Line
1. 폰트 서체 및 폰트 사이즈
- 폰트 서체 : 우리다움체(Wooridaum)
- 폰트 사이즈 : 13px, 16px, 19px, 20px

2. 컬러 배색
- background-color : #D1E9FF
- point-color : #2D31A6

![Group 1](https://github.com/yaejinkong/note/assets/127467781/a7440d0a-a39a-4502-9ef3-d8c73c4e345b)
<br>

- 참고한 color pallete
  
![color1](https://github.com/woorifisa-service-dev-3rd/frontend-1st-lunch-game/assets/127467781/a9d16dc0-3540-4b9a-adfa-2df3909ac79d)
![image](https://github.com/woorifisa-service-dev-3rd/frontend-1st-lunch-game/assets/127467781/ab1dd59e-47d0-4660-974b-c3e310078954)

3. 여백 및 정렬
    ~~~css
    .content {
    background-color: #FFFEFF;
    border-radius: 1cm;
    width: 50%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    ~~~

## Light House 성능지표

- media="print"로 설정하여 초기 로딩 시 렌더링을 차단하지 않도록
- onload="this.media='all'"을 사용하여 CSS 파일이 로드된 후 media 속성을 all로 변경하여 스타일을 적용
- CSS 파일을 페이지 렌더링을 방해하지 않도록 비동기적으로 로드한 후, 로드가 완료되면 CSS를 실제로 적용

**개선 전**
![스크린샷 2024-07-12 002438](https://github.com/woorifisa-service-dev-3rd/frontend-1st-lunch-game/assets/142154451/d5b1eb6c-7836-471c-8d49-2890b86ac241)

**개선 후**
![스크린샷 2024-07-12 003646](https://github.com/woorifisa-service-dev-3rd/frontend-1st-lunch-game/assets/142154451/1842637e-ec7c-4be4-a12d-4e8c503abca5)

개선 추가
![picture](image-1.png)

## 팀 Commit Rule

### Message Head
- 처음 파일을 만드는 경우 [INIT]
- 처음 파일을 작성하는 경우 [ADD]
- 기능을 수정하거나 바꾸는 경우 [UPDATE]
- 버그를 수정한 경우 [FIX]

### Message Body
- 커밋 메시지는 영어로 진행
- 커밋 메시지의 첫 단어의 첫 글짜는 대문자로 시작
- 커밋 메시지의 띄어쓰기는 _로 변경
