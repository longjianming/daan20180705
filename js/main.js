/**
 * Created by Administrator on 2017/7/13.
 */
$(window).ready(function(){
    $('body').on('touchstart',function(){});
    $(function() {
        FastClick.attach(document.body);
    });
    $(window).click(function(){
        $('.search,.friend-text').removeClass('active');
        $('.friend-list').slideUp();
    });
    var height1=$('.header-top').height();
    $(window).scroll(function(){
        if($(window).scrollTop()>=height1){
            $('.header').addClass('active');
        }else{
            $('.header').removeClass('active');
        }
    });
    $('.weixin-online-btn').click(function(){
        $('.weixin-online').hide();
    });
    $('#menu-handler').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('on');
    });
    $('#menu-handler2').click(function(){
        $(this).toggleClass('active');
        $('.platform-header-con').toggleClass('active');
    });
    //搜索
    $('.search-box').click(function(e){
        e.stopPropagation();
        $(this).find('.search').addClass('active');
    });
    $('.title1 li').click(function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.title1').siblings('.index-b-tab').find('.index-b-page').eq(index).show().siblings().hide();
    });
    $('.qyxcp').click(function(){
        var _src=$(this).attr('data-mp4');
        $('.mp4Box').show().find('.mp4Box-con-nr').html("<video src='"+_src+"'controls autoplay>您的浏览器不支持 video 标签。</video>");
    });
    $('.mp4close').click(function(){
        $(this).siblings('.mp4Box-con-nr').html('').parents('.mp4Box').hide();
    });
    $('.friend').click(function(e){
        e.stopPropagation();
        $(this).find('.friend-list').slideToggle();
        $(this).find('.friend-text').toggleClass('active');
    });
    $('.tiwen').click(function(){
        $('.facebox').show();
    });
    $('.face-close').click(function(){
        $('.facebox').hide();
    });
    //平台
    $('.menu3-er').eq(0).show();
    $('.menu3-yi').click(function(){
        $(this).siblings('.menu3-er').stop().slideToggle().parent().toggleClass('active').siblings().removeClass('active').find('.menu3-er').slideUp();
    });
    $('.gybzk-yi').click(function(){
        $(this).siblings().slideToggle();
    });
    $('.clk-si-cotrol a').click(function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings().find('.clk-si-page').eq(index).addClass('active').siblings().removeClass('active');
    });

    $('.clk-san,.clk-yi,.clk-er').click(function(){
        $(this).toggleClass('active').siblings().stop().slideToggle();
    });

});