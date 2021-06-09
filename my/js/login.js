$(function() {
    let form = layui.form;

    //自定义表单验证
    form.verify({

        pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],

        repwd: function(value) {
            let pwd = $(".regBox input[name=password]").val();

            if(pwd !== value) {
                return "两次密码输入不一致！";
            }


        }

    })




    // 点击切换登录或者注册页面功能
    // 给regMsg绑定点击事件
    $(".regMsg").on("click",function() {

        // alert(11)

        $(".loginBox").animate({
            left: "-400px"
        },1000);

        $(".regBox").animate({
            left: "0px"
        },1000,function() {
            $(".loginAndReg").css("height","340px");

        });

    });

    //给loginMsg绑定点击事件
    $(".loginMsg").on("click",function() {

        // alert(11)

        $(".loginBox").animate({
            left: "0px"
        },1000,function() {
            $(".loginAndReg").css("height","300px");

        });

        $(".regBox").animate({
            left: "400px"
        },1000)

    });



});