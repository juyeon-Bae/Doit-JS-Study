function calc() {
    var currentYear = new Date().getFullYear();  // 올해 연도
    var birthYear = parseInt(prompt("태어난 연도를 입력하세요"));  // 태어난 연도
    var age = currentYear - birthYear + 1;  // 계산한 나이

    // id값이 result인 태그를 선택하고 html에 삽입한다.
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세 입니다.";
}

calc();  // 함수를 호출하여 나이를 계산하고 결과를 출력한다.