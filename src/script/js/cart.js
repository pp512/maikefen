!function(){
    

   //2.根据cookie中的sid,拼接数据

   function goodslist(id,count){
    $.ajax({
        url:'http://10.31.161.43/mkfeng/php/cart.php',
        dataType:'json'
    }).done(function(data){
        //console.log(data)
        $.each(data,function(index,value){
            if(id==value.sid){
                var $clonebox=$('.goods-item:hidden').clone(true,true);
                $clonebox.find('.goods-pic').find('img').attr('src',value.url0);
                $clonebox.find('.goods-pic').find('img').attr('sid',value.sid);
                $clonebox.find('.goods-d-info').find('a').html(value.title);
                $clonebox.find('.b-price').find('strong').html(value.price);
                $clonebox.find('.quantity-form').find('input').val(count);
                $clonebox.find('.b-sum').find('strong').html((value.price*count).toFixed(2));
                $clonebox.css('display','block');
                $('.item-list').append($clonebox);
                priceall();
             }
        });
    })
}



     //1.获取cookie中的sid和数量，封装
        if(getcookie('cookiesid') && getcookie('cookienum')){
        var s=getcookie('cookiesid').split(',');
        var n=getcookie('cookienum').split(',');
        //console.log(s)
        for(var i=0;i<s.length;i++){
             goodslist(s[i],n[i]);
        }
    } 

//3.如果购物车为空，显示empty-cart盒子(购物车空空的)
function kong(){
    if(getcookie('cookiesid') && getcookie('cookienum')){
        $('.empty-cart').hide();
    }else{
        $('.empty-cart').show();
    }
}
kong();

//4.价格和数量的累加，并渲染出来
function priceall(){
    var $sum=0;
    var $count=0;
     $('.goods-item:visible').each(function(index,element){
        if($(element).find('.cart-checkbox input').prop('checked')){
        $sum+=parseInt($(element).find('.quantity-form').find('input').val());
        $count+=parseFloat($(element).find('.b-sum').find('strong').html());
       } 
    });
    $('.amount-sum').find('em').html($sum);
    $('.totalprice').html('￥'+$count.toFixed(2));
}

//全选按钮
$('.allsel').on('click',function(){
    $('.goods-item:visible').find(':checkbox').prop('checked',$(this).prop('checked'));//this代表allsel
    $('.allsel').prop('checked',$(this).prop('checked'));//$(this).prop('checked')表示添加上
    priceall();
});

var $inputs=$('.goods-item:visible').find(':checkbox');//创建的复选按钮的集合，因为是创建的，无法选取到，需要事件委托来获取
$('.item-list').on('click',function(){//item-list委托元素
    if($('.goods-item:visible').find('input:checkbox').length==$('.goods-item:visible').find('input:checked').size()){
        $('.allsel').prop('checked',true);
    }else{
        $('.allsel').prop('checked',false);
    }
    priceall();
});


//改变数量
//点击按钮+，数量增加，不能超过99
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();//值
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);//赋值 数量
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(newprice($(this)));//改变后的价格
    priceall();
    setcookie($(this));
});
 //点击按钮-，数量减少，不能少于1
 $('.quantity-down').on('click',function(){
     var $count=$(this).parents('.goods-item').find('.quantity-form input').val();//原来数量值
     $count--;
      if($count<=1){
          $count=1;
      }
      $(this).parents('.goods-item').find('.quantity-form input').val($count);
      $(this).parents('.goods-item').find('.b-sum').find('strong').html(newprice($(this)));//改变后的价格
      priceall();
      setcookie($(this));

 });

 //当直接在框中填写数量时，
 $('.quantity-form input').on('input',function(){
     var $reg=/^\d+$/g;//设置只能输入数字
     var  $count=parseInt($(this).val());
     if($reg.test($count)){
        if($count>=99){
            $(this).val(99);
        }else if($count<=1){
            $(this).val(1);
        }else{
            $(this).val($count);
        }
     }else{
        $(this).val(1);
     }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(newprice($(this)));//改变后的价格
    priceall();
    setcookie($(this));
 });

 //点击删除，删除对应的单个商品（要使用事件委托）
 $('.item-list').on('click','.b-action a',function(ev){
    cookietoarray();
     if(confirm('你确定要删除吗？')){
        $(this).first().parents('.goods-info').remove();
     }
     delcook($(this).first().parents('.goods-info').find('img').attr('sid'),arrsid);
     priceall();

 });

 //点击删除全部商品
 $('.operation a:first').on('click',function(){
     cookietoarray();
     if(confirm('你确定全部删除吗？')){
         $('.goods-item:visible').each(function(){
            if($(this).find('input:checkbox').is(':checked')){
                $(this).remove();
                delcook($(this).find('img').attr('sid'),arrsid);
            } 
         });
         priceall();
     }
 });


//封装点击+-后的价格变化
function newprice(obj){
    var $danjia=parseFloat(obj.parents('.goods-item').find('.b-price').find('strong').html());//单价
    var $suliang=parseInt(obj.parents('.goods-item').find('.quantity-form input').val())//数量
    return ($danjia * $suliang).toFixed(2);
}

//点击后，cookie中的值也跟着改变
//点击按钮将商品的数量和id存放cookie中
var arrsid=[]; //商品的id
var arrnum=[]; //商品的数量
//提前获取cookie里面id和num
function cookietoarray(){
    if(getcookie('cookiesid') && getcookie('cookienum')){
        arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
        arrnum=getcookie('cookienum').split(',');//cookie商品的num
    }
}
function setcookie(obj) { //obj:当前操作的对象
    cookietoarray();//得到数组
    var $index = obj.parents('.goods-item').find('img').attr('sid');//通过id找数量的位置
    arrnum[$.inArray($index,arrsid)] = obj.parents('.goods-item').find('.quantity-form input').val();
    addcookie('cookienum', arrnum.toString(), 7);
}


//删除cookie封装
function delcook(sid,arrsid){//传入的this
   var $index=-1;
   $.each(arrsid,function(index,value){
       if(sid==value){
           $index=index;
       }
   });
    arrsid.splice($index,1);
    arrnum.splice($index,1);
    addcookie('cookiesid',arrsid.toString(),7);
    addcookie('cookienum',arrnum.toString(),7);
}


}();