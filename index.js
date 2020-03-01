//code 내의 특수문자 처리
//% == <br>
//| == &nbsp;&nbsp;&nbsp;&nbsp; (탭 처리)
//~ == &nbsp;
//@ == <font color="#5A5A5A">
//$ == <font color="#898989">
//^ == <font color="#FFFFFF">
//! == </font>

var code = `
#include <hanyang.h>;%
#include <huhs_since_1982.h>;%
%
string $title = ^“hanging university hard & software”;%
public void print_title() {%
|printf(“■~~~~~~~~~~■~~■~~~~~~~~~~~~~■~~■~~~~~~~~~~■~~~~~■■■■|~”);%
|printf(“■~~~~~~~~~~■~~■~~~~~~~~~~~~~■~~■~~~~~~~~~~■~~■||||~~~”);%
|printf(“■~~~~~~~~~~■~~■~~~~~~~~~~~~~■~~■~~~~~~~~~~■~~■||||~~~”);%
|printf(“■■■■■~~■~~~~~~~~~~~~~■~~■■■■■~~~~~■■■||”);%
|printf(“■~~~~~~~~~~■~~■~~~~~~~~~~~~~■~~■~~~~~~~~~~■~~~~~~~~~~~~~~~~■|~”);%
|printf(“■~~~~~~~~~~■~~■~~~~~~~~~~~~~■~~■~~~~~~~~~~■~~~~~~~~~~~~~~~~■|~”);%
|printf(“■~~~~~~~~~~■~~~~~■■■■~~~~~■~~~~~~~~~~■~~~■■■■|~~~~”);%
}%
%
public void start() {%
|print_title();%
|study(various_studys); //다양한 프로그래밍 스터디%
|friend(party_people); //매 계절별 MT와 소풍 등%
|if(huhs) {%
%
|}%
|you = cl //실력%
|can++; //제한%
|get.com//없음%
|whatever //관심%
|you = jo //있는%
|want++; //당신%
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
        } else {
            $(".code").append(typingTxt[typingIndex]);
        }
        typingIndex++;
    } else {
        clearInterval(tyInt); //모든 글자를 붙였으면 반복 종료.
        $(".white_alpha").css("display","inline");
        //$(".code").css("color","rgba(255,255,255,0.8)")
    }
}