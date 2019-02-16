!function($){
   

    //----------------用心生活数据-----------------------------------
    $.ajax({
        url:'http://10.31.161.43/mkfeng/php/index_data.php',
        dataType:'json'
    }).done(function(data){
        var $strhtml='';
        $.each(data,function(index,value){//index:索引      value:索引对应的值.
            $strhtml+=`<a href="details.html?sid=${value.sid}">
            <img src="${value.url0}" class="imgter">
            <p>${value.title}</p>
            <div class="jiage clear">
                <div class="moneyss">
                    <i>￥</i>
                    <b>${value.price}</b>
                </div>
                <div class="itr">京造精选</div>
            </div>
        </a>`;
        });
        $('.lives').html($strhtml)
    });



    

    // ------------------------轮播图-------------------------------------

            var $div=$('.menu_carousel');
            var $zuo=$('.zuo');
            var $you=$('.you');
            var $li=$('.menu_carousel .ul1 li');
            var $dian=$('.menu_carousel .tab span');
            var $index=0;
            var $time=null;
            $time=setInterval(function(){
                $index++;
                if($index>$dian.length){
                    $index=0;
                }
                $dian.eq($index).addClass('active').siblings().removeClass('active');    
                $li.eq($index).fadeIn(200).siblings().fadeOut(200); 
           },1000)
            $div.on('mouseover',function(){
                $zuo.show();
                $you.show();
                clearInterval($time);
            })
            $div.on('mouseout',function(){
                $zuo.hide();
                $you.hide();
                $time=setInterval(function(){
                    $index++;
                    if($index>$dian.length){
                        $index=0;
                    }
                    $dian.eq($index).addClass('active').siblings().removeClass('active');    
                    $li.eq($index).fadeIn(200).siblings().fadeOut(200); 
               },1000)
            })

            $dian.on('mouseover',function(){
                $index=$(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $li.eq($index).fadeIn(200).siblings().fadeOut(200);
            })
            //左右按钮点击Tab切换
            $zuo.on('click',function(){
                 $index--;
                 if($index<0){
                     $index=$dian.length-1;
                 }
             $dian.eq($index).addClass('active').siblings().removeClass('active');    
             $li.eq($index).fadeIn(200).siblings().fadeOut(200); 
            });
            $you.on('click',function(){
                $index++;
                if($index>$dian.length-1){
                    $index=0;
                }
            $dian.eq($index).addClass('active').siblings().removeClass('active');    
            $li.eq($index).fadeIn(200).siblings().fadeOut(200); 
           }) 
           


           //-------------------------楼梯效果----------------------------------------

        var $louti=$('#loutinav');
        var $louti_li=$('#loutinav li');
        var $louceng=$('#mian_ceng .louceng');
        var $index=0;
        $(window).on('scroll',function(){
            var $scrolltop=$(window).scrollTop();
            if($scrolltop>=480){
                $louti.show();
            }else{
                $louti.hide();
            }


            $louceng.each(function(index,element){
                var $top=$louceng.eq(index).offset().top+$(this).innerHeight()/2;
                if($top>$scrolltop){
                    $louti_li.removeClass('active');
                    $louti_li.eq($(this).index()).addClass('active');
                    return false;
                }
            })
            
         });


        $louti_li.not('.last').click(function(){
            $index=$(this).index();
            var $top=$louceng.eq($index).offset().top;
            $(this).addClass('active').siblings('li').removeClass('active');
            $('html,body').animate({
                scrollTop:$top
            })
        });



        //点击TOP回到顶部
        $('.last').click(function(){
            $('html,body').animate({
                scrollTop:0
            })
        })




           
}(jQuery);