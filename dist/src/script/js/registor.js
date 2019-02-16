
!function ($) {
    //验证数据是否正确
    $(function () {
        $("#redails").validate({
            rules: {//匹配的规则
                phone: {
                    required: true,
                    digits: true,
                    rangelength: [11, 11]
                },
                password: {
                    required: true,
                    rangelength: [6, 20]
                },

            },

            messages: {//输出提示
                phone: {
                    required: "请正确填写您的手机号码",
                    digits: "必须是整数",
                    rangelength: "号码有误"
                },
                password: {
                    required: "请输入密码",
                    rangelength: "密码长度必须介于6 到 20位之间"
                },
            }

        });
    });


}(jQuery);