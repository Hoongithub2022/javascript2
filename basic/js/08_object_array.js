// Array 배열
// 1. 배열 만들기
{
  // const arr1 = new Array()
  // console.log(arr1);
  // arr1[0] = 10
  // arr1[1] = 'hello'
  // console.log(arr1);
  // const arr2 = [1, 3, 5, 7, 9]
  // console.log(arr2);
  // const arr3 = ['what', 'are', 'u', 'doing', 100, true]
  // console.log(arr3);
  // const arr4 = [
  //     'a',
  //     {model: 'apple', price: 1000},
  //     {model: 'galaxy', price: 2000}
  // ]
  // console.log(arr4);
  // console.log(arr4[1].model);
  // console.log(arr4[3]); // undefined
}

// 2. 배열 출력
{
  const books = ["html", "css", "javascript"];
  console.log(books);
  console.log(books.length);
  console.log(books[0]); // 배열의 첫번째 요소를 반환
  console.log(books[books.length - 1]); // 배열의 마지막 요소를 반환

  // for
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
  }

  // for of
  for (let book of books) {
    console.log(book);
  }

  // for in
  for (let i in books) {
    console.log(books[i]);
  }

  // for in
  //-----화살표함수-----//
  // function() {
  //     // 실행문
  // }
  // () => {
  //     //실행문
  // }
  //---------------------//

  books.forEach(function (book) {
    console.log(book + " is good");
  });

  books.forEach((book) => {
    console.log("📗" + book);
  });

  // map : 새로운 배열을 리턴
  const newBooks = books.map(function (book) {
    return `👩 ${book}`;
  });
  console.log(newBooks);

  const newBooks2 = books.map((item) => `${item} 🎅`);
  console.log(newBooks2);
}
