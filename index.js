//code 내의 특수문자 처리
//% == <br>
//| == &nbsp;&nbsp;&nbsp;&nbsp; (탭 처리)
//~ == &nbsp;
//@ == <font color="#5A5A5A">
//$ == <font color="#898989">
//^ == <font color="#FFFFFF">
//! == </font>
//ㅅ == <font size="20pt">&nbsp;</font>

var code = `
#include <hanyang.h>;%
#include <huhs_since_1982.h>;%
%
string $title = ^“hanging university hard & software”;%
public void print_title() {%
|printf(“■~~~~~~~~~~ㅅ■~~~~~■~~~~~~~~~~~~~■~~~~~■~~~~~~~~~~ㅅ■~~~~~~~~■■■■|~”);%
|printf(“■~~~~~~~~~~ㅅ■~~~~~■~~~~~~~~~~~~~■~~~~~■~~~~~~~~~~ㅅ■~~~~~■||||~~~”);%
|printf(“■~~~~~~~~~~ㅅ■~~~~~■~~~~~~~~~~~~~■~~~~~■~~~~~~~~~~ㅅ■~~~~~■||||~~~”);%
|printf(“■■■■■~~~~~■~~~~~~~~~~~~~■~~~~ㅅㅅ■■■■■~~~~~~~~■■■||”);%
|printf(“■~~~~~~~~~~ㅅ■~~~~~■~~~~~~~~~~~~~■~~~~~■~~~~~~~~~~ㅅ■~~~~~~~~~~~~~~~~~~~■|~”);%
|printf(“■~~~~~~~~~~ㅅ■~~~~~■~~~~~~~~~~~~~■~~~~~■~~~~~~~~~~ㅅ■~~~~~~~~~~~~~~~~~~~■|~”);%
|printf(“■~~~~~~~~~~ㅅ■~~~~~~~~■■■■~~~~~~~~■~~~~~~~~~~ㅅ■~~~~~~■■■■|~~~~”);%
}%
%
public void start() {%
|print_title();%
|study(various_studys); //다양한 프로그래밍 스터디%
|friend(party_people); //매 계절별 MT와 소풍 등%
|if(huhs) {%
%
|}%
|you = club |~//실력%
|can++; ||~~~//제한%
|get.come |~~//없음%
|whatever |~~//관심%
|you = join |~//있는%
|want++; ||//당신%
}%
%
public void contact(string case) {%
|if(case == “회장”)%||printf(“010-5591-6121”);%
|else if(case==“부회장”)%||printf(“010-2285-1094”);%
|else if(case==“페이스북”)%||printf(“www.facebook.com/huhs.hanyang”);%
}
`;

var typingBool = false;
var typingIndex = 0;
var typingTxt = $(".code").text();

var p = 0;
var pct = 0;
var prg = document.getElementById("progress");

typingTxt = code.split(""); //한 글자씩 자른다.
if(typingBool == false) {//타이핑이 진행되지 않았으면
    typingBool = true;

    var tyInt = setInterval(typing, 20); //반복동작
}

function typing() {
    if(typingIndex < typingTxt.length) { //글자수만큼 1글자씩 붙이는 걸 반복한다.
        if(typingTxt[typingIndex] == '%') {
            $(".code").append('<br>');
        } else if(typingTxt[typingIndex] == '|') {
            $(".code").append('&nbsp;&nbsp;&nbsp;&nbsp;');
        } else if(typingTxt[typingIndex] == '~') {
            $(".code").append('&nbsp;');
        } else if(typingTxt[typingIndex] == '@') {
            $(".code").append('<font color="#5A5A5A">');
        } else if(typingTxt[typingIndex] == '$') {
            $(".code").append('<font color="#898989">');
        } else if(typingTxt[typingIndex] == '^') {
            $(".code").append('<font color="#FFFFFF">');
        } else if(typingTxt[typingIndex] == '!') {
            $(".code").append('</font>');
        } else if(typingTxt[typingIndex] == 'ㅅ') {
            $(".code").append('<font size="1">&nbsp;</font>'); //4.5pt
        } else {
            $(".code").append(typingTxt[typingIndex]);
        }
        typingIndex++;
    } else {
        clearInterval(tyInt); //모든 글자를 붙였으면 반복 종료.
        setTimeout(showLoading, 600);
    }
}

function showLoading() {
    $(".white_alpha").css("display","inline");
    animateCSS('.alert', 'fadeIn')
    animateCSS('.progressbar', 'fadeIn', function() {
        var loadingAni = setInterval(loading, 50);

        function loading() {
            if(prg) {
                p++;
                if(p <= 79)
                {
                    prg.style.backgroundPosition = p + "vw 0px";
                    pct++;
                    if(pct >= 0)
                        {pct = -79;}
                    prg.style.left = pct + "vw";
                } else {
                    clearInterval(loadingAni);
        
                    animateCSS('.progressbar', 'bounceOutDown', function() {
                        $(".progressbar").css("display", "none");
                        $(".white_alpha").css("display", "none");
                        
                        animateCSS('.code', 'fadeOutDown', function() {
                            $(".code").css("display", "none");
    
                            $(".page_second").css("display", "inline");
                            $(".invite").css("display", "inline");
                            animateCSS('.invite', 'fadeInUp');
                        });
                    })
                    animateCSS('.alert', 'bounceOutDown', function() {
                        $(".alert").css("display", "none");
                    })
                }
            }
        }
    })
}

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
