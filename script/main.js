// 헤더 메뉴 스크립트 시작 - 스크롤 내리면 사라짐, 스크롤 올리면 생김
var lastScrollTop = 0, delta = 15;

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop() /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
    // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
    if (Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
        return; // ~ 리턴

    if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
        /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
        $(".scrollMenu").css("top", "-100px");
    } else {
        $(".scrollMenu").css("top", "0px");
    }
    lastScrollTop = scrollTop;
});
// 헤더 메뉴 스크립트 끝

// 슬라이드 이미지 첫번째 스크립트 시작
var i = 0;
function slide() {
    i++;
    if (i > $('.slide li:last').index()) {
        i = 0;
    }
    $('.slide li').eq(i).stop().fadeIn('slow');
    $('.slide li').eq(i - 1).stop().fadeOut('slow');
}
setInterval(slide, 10000);
// 슬라이드 이미지 첫번째 스크립트 끝