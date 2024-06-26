// Date

{
  const today = new Date();
  console.log(today);
  console.log(today.toLocaleString());

  const somday = new Date("2022/11/10");
  console.log(somday.toLocaleString());
}

{
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  const today = `${year}년 ${month + 1}월 ${date}일`;
  document.querySelector(".text").innerHTML = today;
}

{
  // 현재 날짜 ~ 특정 날짜 얼마나 남았는지 구하기
  // 남은 일 수 (m/s) = 특정 날짜(m/s) - 현재 날짜(m/s)
  // getTime() : 1970년 1월 1일 부터 현재까지 경과된 시간을 밀리초로 표시
  // Math.ceil : 소수점 첫째 자리부터 무조건 올림하여 정수를 반환
  // 1초 = 1000m/s
  // 1분 = 1000m/s * 60
  // 1시간 = 1000m/s * 60 * 60
  // 1일 = 1000m/s * 60 * 60 * 24

  // 현재 날짜 ~ 연말 까지 남은 일 수 구하기
  const today = new Date();
  console.log(today.getTime());

  const year = today.getFullYear();
  const endDate = new Date(year, 11, 31);
  const remainDate = endDate.getTime() - today.getTime();

  const result = Math.ceil(remainDate / (1000 * 60 * 60 * 24));
  console.log(result);
}
