//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = yy+'-'+mm+'-'+dd+'&emsp;'+h+' : '+m+' : '+ s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = yy+'-'+mm+'-'+dd+'&emsp;0'+h+' : '+m+' : '+ s;
    }

    if(m < 10)
    {
        curTime[0].innerHTML = yy+'-'+mm+'-'+dd+'&emsp;'+h+' : 0'+m+' : '+ s;
    }

    if(s < 10)
    {
        curTime[0].innerHTML = yy+'-'+mm+'-'+dd+'&emsp;'+h+' : '+m+' : 0'+ s;
    }
}

//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper_grid = new Swiper('.swiper-mygrid', {
        slidesPerView: 5,
        spaceBetween: 30,
        grid: {
            fill: 'row',
            rows: 2,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        },
    });
})

//mainArea topList
$(function(){
    $(".mainArea .topList .list li").on("click",function(){
        var n = $(this).offset().left;
        var cur = $(".mainArea .topList .list .cur");
        var curL = $(cur).offset().left;
        var tar = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(cur)
        .offset({
            left : n,
        })

        if(curL - n < 0)
        {
            $(cur)
            .addClass("moveRight");

            setTimeout(function(){
                $(cur)
                .removeClass("moveRight");
            },750);
        }
        else
        {
            $(cur)
            .addClass("moveLeft");

            setTimeout(function(){
                $(cur)
                .removeClass("moveLeft");
            },750);
        }

        if(tar == 0)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("all");
        }
        else if(tar == 1)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("sport");
        }
        else if(tar == 2)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("live");
        }
        else if(tar == 3)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("slot");
        }
        else if(tar == 4)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("lottery");
        }
        else if(tar == 5)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("fish");
        }
        else if(tar == 6)
        {
            $(".mainArea .topList .title .inner")
            .removeClass("all sport live slot lottery fish board")
            .addClass("board");
        }
    })

    $(window).resize(function(){
        var moveN = $(".mainArea .topList .list li.active").offset().left;
        var cur = $(".mainArea .topList .list .cur");

        $(cur)
        .offset({
            left : moveN,
        })
    })
})