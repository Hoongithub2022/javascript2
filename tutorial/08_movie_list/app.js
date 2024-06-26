const movies = [
  {
    id: 1,
    title: "로마",
    director: "알폰소 쿠아론",
    poster:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99EE9D3F5C7D368E35",
    text: "1971년 멕시코 시티 로마 거리의 한 중산층 가정에서 일하고 있는 클레오와 안주인 소피아가 인생에 있어서 가장 큰 시련을 겪게 되고 이것을 가족애란 메세지로 헤쳐나간다는 내용의 작품",
  },
  {
    id: 2,
    title: "언어의 정원",
    director: "	신카이 마코토",
    poster:
      "https://i.pinimg.com/736x/23/20/2c/23202ccea0e000f0c5c8b6b3fa0af735.jpg",
    text: "영화는 구두장이를 꿈꾸는 15세의 아키즈키 타카오와 27세의 여인 유키노 유카리가 비 오는 아침마다 신주쿠 교엔에서 이어가는 만남을 그린다. 타카오는 구두 디자인을 하기 위해 등교를 늦게 하고, 유키노는 직장에서의 개인적 문제 때문에 일을 나가지 않는다.",
  },
  {
    id: 3,
    title: "컨택트",
    director: "드니 빌뇌브",
    poster: "http://cfile5.uf.tistory.com/image/2707524458916B0027898A",
    text: "2016년 11월에 개봉한 미국의 SF 영화이다. 드니 빌뇌브가 감독을 맡았으며, 테드 창의 단편 소설 《당신 인생의 이야기》가 영화의 원작이다. 에이미 아담스, 제러미 레너, 포리스트 휘터커가 출연한다. 대한민국에서는 제21회 부산 국제 영화제에서 최초로 상영되었으며, 2017년 2월 2일 극장에서 개봉되었다.",
  },
  {
    id: 4,
    title: "생활의 발견",
    director: "홍상수",
    poster:
      "https://blog.kakaocdn.net/dn/boHRX2/btqxKABnrtx/B5fbEpKAZotvmXESuH2aKk/img.jpg",
    text: "연극계에서 제법 알려진 배우 경수(김상경 분). 잘 아는 감독만 믿고 영화에 출연했는데 흥행이 시원치 않다. 런닝 개런티를 부득부득 우겨 받아내는데 딸랑 100만 원. 약속했던 차기작 캐스팅은 날아가 버렸고. 이제 뭘 하지?",
  },
  {
    id: 5,
    title: "예언자",
    director: "자크 오디아르",
    poster:
      "http://image.cine21.com/resize/cine21/still/2010/0205/M0020009__still_02[S600,600].jpg",
    text: "6년 형을 선고 받고 감옥에 들어가게 된 19살의 말리크(타하르 라힘 분). 읽을 줄도 쓸 줄도 모르던 그에게 감옥은 선생님이 되고, 집이 되고, 친구가 된다. 감옥을 지배하던 코르시카 계 갱 두목 루치아노(닐스 아르스트럽 분)의 강요로 ",
  },
];

const poster = document.querySelector(".poster img");
const num = document.querySelector(".num");
const title = document.querySelector(".title");
const director = document.querySelector(".director span");
const text = document.querySelector(".text");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

next.addEventListener("click", () => {
  current++;
  if (current > movies.length - 1) current = 0;
  paintMovie(current);
});

prev.addEventListener("click", () => {
  current--;
  if (current < 0) current = movies.length - 1;
  paintMovie(current);
});

function paintMovie(current) {
  const item = movies[current];
  poster.src = item.poster;
  num.textContent = item.id;
  title.textContent = item.title;
  director.textContent = item.director;
  text.textContent = item.text;
}

function init() {
  paintMovie(current);
}

init();
