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
@#include <hanyang.h>;%
#include <huhs_since_1982.h>;%
%
string $title = ^“hanging university hard & software”;%
@public void $print_title() {%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~~~~ㅁㅁㅁㅁ|~$”);%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ||||~~~$”);%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ||||~~~$”);%
|printf(“^ㅁㅁ~ㅁㅁㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁㅁ~ㅁㅁㅁ~~~~~~~~ㅁㅁㅁ||$”);%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~~~~~~~~~~~~~~~ㅁ|~$”);%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~~~~ㅁ~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~~~~~~~~~~~~~~~ㅁ|~$”);%
|printf(“^ㅁ~~~~~~~~~~ㅁ~~~~~~~~ㅁㅁㅁㅁ~~~~~~~~~ㅁ~~~~~~~~~~ㅁ~~~~~~ㅁㅁㅁㅁ|~~~~$”);%
}%
%
@public void $start() {%
|print_title();%
^|study(various_studys); //다양한 프로그래밍 스터디%
|friend(party_people); ~~~//매 계절별 MT와 소풍 등%
$|if(huhs) {%
%
|}%
^|you = club |~//실력%
|can++; ||~~~//제한%
|get.come |~~//없음%
|whatever |~~//관심%
|you = join |~//있는%
|want++; ||//당신%
}%
%
@public void $contact(string case) {%
|if(^case == “회장”$)%||printf(^“010-5591-6121”$);%
|else if(^case==“부회장”$)%||printf(^“010-2285-1094”$);%
|else if(^case==“페이스북”$)%||printf(^“www.facebook.com/huhs.hanyang”$);%
}
`;

var current_id;
const black = [".black0",".black1",".black2",".black3"];
const gray = [".gray0",".gray1",".gray2",".gray3",".gray4",".gray5",".gray6",".gray7",".gray8",
".gray9",".gray10",".gray11",".gray12",".gray13",".gray14",".gray15",".gray16",".gray17"];
const white = [".white0",".white1",".white2",".white3",".white4",".white5",".white6",".white7",
".white8",".white9",".white10",".white11",".white12",".white13",".white14",".white15"];
var switcher = [0,0,0];

var page = -1;
const title = ['신환회','MT','스터디','집회','동방파티','창립제']
const description = ['신입생 여려분들을 격하게 환영해주는 휴즈 행사','동아리하면 빠질 수 없는 친목의 장','컴퓨터 관련 다양한 주제를 깊이 있게 배울 수 있는\n 자율적인 컴퓨터 학습 시스템.','IT, 컴퓨터 분야에 대한 옴니버스식 세미나','학교 축제기간 동아리방에서 즐기는\n 휴즈만의 축제','39년 역사와 전통을 자랑하는 휴즈의 선배님들과\n 함께하는 휴즈 창립 축하행사']
const image1 = ['p_welcome01.jpg','p_MT01.jpg','p_study01.jpg','p_seminar01.jpg','p_party01.jpg','p_foundation01.jpg'];
const image2 = ['p_welcome02.jpg','p_MT02.jpg','p_study02.jpg','p_seminar02.jpg','p_party02.jpg','p_foundation02.jpg'];

var typingBool = false;
var typingIndex = 0;

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
        if(typingTxt[typingIndex] == '@') {//Black
            current_id = black[switcher[0]];
            switcher[0]++;
            typingIndex++;
        } else if(typingTxt[typingIndex] == '$') {//Gray
            current_id = gray[switcher[1]];
            switcher[1]++;
            typingIndex++;
        } else if(typingTxt[typingIndex] == '^') {//White
            current_id = white[switcher[2]];
            switcher[2]++;
            typingIndex++;
        } else {
            if(typingTxt[typingIndex] == '%') {
                $(current_id).append('<br>');
            } else if(typingTxt[typingIndex] == '|') {
                $(current_id).append('&nbsp;&nbsp;&nbsp;&nbsp;');
            } else if(typingTxt[typingIndex] == '~') {
                $(current_id).append('&nbsp;');
            } else if(typingTxt[typingIndex] == 'ㅁ') {
                $(current_id).append('<font face="Wingdings">n</font>');
            } else {
                $(current_id).append(typingTxt[typingIndex]);
            }
            typingIndex++;
        }
    } else {
        clearInterval(tyInt); //모든 글자를 붙였으면 반복 종료.
        $(window).width(function() {
            if($(window).width() > 768) { //PC버전: vh단위
                setTimeout(showLoading_pc, 600);
            } else { //모바일버전: vw단위
                setTimeout(showLoading_mobile, 600);
            }
        });
    }
}

function showLoading_pc() {
    $(".white_alpha").css("display","inline");
    animateCSS('.alert', 'fadeIn')
    animateCSS('.progressbar', 'fadeIn', function() {
        var loadingAni = setInterval(loading, 50);

        function loading() {
            if(prg) {
                p++;
                if(p <= 79)
                {
                    prg.style.backgroundPosition = p + "vh 0px";
                    pct++;
                    if(pct >= 0)
                        {pct = -79;}
                    prg.style.left = pct + "vh";
                } else {
                    clearInterval(loadingAni);
        
                    animateCSS('.progressbar', 'bounceOutDown', function() {
                        $(".progressbar").css("display", "none");
                        $(".white_alpha").css("display", "none");

                        animateCSS('.code', 'fadeOutDown', function() {
                            $(".code").css("display", "none");
    
                            $("html body").animate({ backgroundColor: "#195E9E" }, 1000);
                            pageSetting();
                            $(".info_page").css("opacity", 1);
                            $(".info_page").css("display", "inline");
                            animateCSS('.info_page', 'bounceInDown', function() {
                                play();
                            });
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

function showLoading_mobile() {
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
    
                            $("html body").animate({ backgroundColor: "#195E9E" }, 1000);
                            pageSetting();
                            $(".info_page").css("opacity", 1);
                            $(".info_page").css("display", "inline");
                            animateCSS('.info_page', 'bounceInDown', function() {
                                play();
                            });
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

function play() {
    if(page == 5) {
        animateCSS('.info_title', 'fadeIn', function() {
            $(".info_title").css("opacity", 1);
            animateCSS('.img_up', 'fadeIn', function() {
                $(".img_up").css("opacity", 1);
                animateCSS('.img_down', 'fadeIn', function() {
                    $(".img_down").css("opacity", 1);
                    animateCSS('.info_description', 'fadeIn', function() {
                        $(".info_description").css("opacity", 1);

                        setTimeout(function() {
                            animateCSS('.info_page', 'fadeOut', function() {
                                $(".info_page").css("opacity", 0);
                                $(".info_page").css("display", "none");

                                $(".join_page").css("display", "inline");
                                animateCSS('.join_page', 'fadeIn', function() {
                                    $(".join_page").css("opacity", 1);
                                });
                            })
                        }, 600);
                    });
                });
            });
        });

        return;
    } else {
        animateCSS('.info_title', 'fadeIn', function() {
            $(".info_title").css("opacity", 1);
            animateCSS('.img_up', 'fadeIn', function() {
                $(".img_up").css("opacity", 1);
                animateCSS('.img_down', 'fadeIn', function() {
                    $(".img_down").css("opacity", 1);
                    animateCSS('.info_description', 'fadeIn', function() {
                        $(".info_description").css("opacity", 1);

                        setTimeout(function() {
                            animateCSS('.info_title', 'zoomOut');
                            animateCSS('.info_description', 'zoomOut');
                            animateCSS('.img_up', 'zoomOut');
                            animateCSS('.img_down', 'zoomOut', function() {
                                pageSetting();
                                $(".info_title").css("opacity", 0);
                                $(".info_description").css("opacity", 0);
                                $(".img_up").css("opacity", 0);
                                $(".img_down").css("opacity", 0);

                                play();
                            });
                        }, 600);
                    });
                });
            });
        });
    }
}

function pageSetting() {
    page++;
    $(".info_title").text(title[page]);
    $(".info_description").text(description[page]);
    $(".img_up").attr("src","image/"+image1[page]);
    $(".img_down").attr("src","image/"+image2[page]);
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
