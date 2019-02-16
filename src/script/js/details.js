!function($){
   
//详情页的数据引入
$.ajax({
    url:'http://10.31.161.43/mkfeng/php/details.php',
    data:{
        sid:location.search.substring(1).split('=')[1]
    },
    dataType:'json'
}).done(function(data){
 $('.img0').attr('sid',data[0].sid);
 $('.img0').attr('src',data[0].url0);
 $('.img1').attr('src',data[0].url1);
 $('.img2').attr('src',data[0].url2);
 $('.img3').attr('src',data[0].url3);
 $('.img4').attr('src',data[0].url4);
 $('.name h3').html(data[0].title);
 $('.strs').html(data[0].price);
});



//    ------------------------放大镜-------------------------------------------
var $xiao_pic=$('.preview .pic_xiao');
var $sf=$('.pic_xiao .sf');
var $bf=$('.preview .bf');
var $bigimg=$('.preview .bf .bigimg');
   //1.鼠标移入显示小放大镜和大放大镜
$xiao_pic.hover(function(){
   // console.log($bf)
  $sf.css('visibility','visible');
  $bf.css('visibility',' visible');
  //算出小放大镜的尺寸
  $sf.width($(this).width()*$bf.width()/$bigimg.width());
  $sf.height($(this).height()*$bf.height()/$bigimg.height());
   //大小图的比例

   var $bili=$bigimg.width()/$xiao_pic.width();

   //小放大镜在小图上移动时的位置
   $xiao_pic.on('mousemove',function(ev){
      var $left=ev.pageX-$xiao_pic.offset().left-$sf.width()/2;
      var $top=ev.pageY-$xiao_pic.offset().top-$sf.height()/2;
      if($left<=0){
        $left=0;
    }else if($left>=$xiao_pic.width()-$sf.width()){
        $left=$xiao_pic.width()-$sf.width();
    }
    
    
    if($top<=0){
        $top=0;
    }else if($top>=$xiao_pic.height()-$sf.height()){
        $top=$xiao_pic.height()-$sf.height();
    }
      $sf.css({
          left:$left,
          top:$top
      })
      $bigimg.css({
        left:-$bili*$left,
        top:-$bili*$top
    })
   })

},function(){//移出
    $sf.css('visibility','hidden');
    $bf.css('visibility','hidden');
});


var $li=$('.imgMenu ul li');
var $ul=('.imgMenu ul');

$li.on('click',function(){
    var url=$(this).find('img').attr('src');
    $xiao_pic.find('img').attr('src',url);
    $bigimg.attr('src',url);
    $(this).addClass('active').siblings('li').removeClass('active');
})




//-----------------------购物车---------------------------------------------
 //1、当点击加入购物车时，将商品的数量和sid存放到cookie中
  //先假设cookie中有数据
   var arrsid=[];//商品的信息
   var arrnum=[];//商品的数量
   //获取cookie中的数据。（封装函数）
    function cookiearray(){
          if(getcookie('cookiesid') && getcookie('cookienum')){
              arrsid=getcookie('cookiesid').split(',');//cookie中原有的数据sid
              arrnum=getcookie('cookienum').split(',');//cookie中原有的数据num
          }
    }

//当点击添加按钮时，将选中的商品和cookie中的数据匹配，如果存在，改变num值，如果不存在，添加新商品的信息和数量值
     // 判断当前的商品sid是否存在购物车(cookie)
     //判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较
     //获取当前的按钮对应的商品的sid
   $('.btn .addcart').on('click',function(){
       location.reload(true);
       var $sid=$(this).parents('.fangs').find('#img').attr('sid');//当前商品的信息
       cookiearray();
      //判断商品是否存在
      if($.inArray($sid,arrsid)!=-1){//存在，只改变num值，再添加进cookie
        var num= parseInt(arrnum[$.inArray($sid,arrsid)]) + parseInt($('#quantity').val());
        arrnum[$.inArray($sid,arrsid)]=num;
        addcookie('cookienum',arrnum.toString(),10);//数组存入cookie
         
      }else{//不存在 第一次存入
        arrsid.push($sid);
        addcookie('cookiesid',arrsid.toString(),10);
        arrnum.push($('#quantity').val());
        addcookie('cookienum',arrnum.toString(),10);
      }
   })


}(jQuery);