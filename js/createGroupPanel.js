// 封装底部弹出选择面板
function downListData(dataObj) {
    var newDom = '';
    var itemData = '';
    var className = '';
    var style = "";
    if (dataObj.isChoose || dataObj.isChoose == true) {
        className = dataObj.className;
    } else {
        className = '';
        style = 'display:none';
    }
    newDom += "<div class='selectOut' id='" + dataObj.groupPanelId + "' style='display: none;'>";
    newDom += " <ul>";
    for (var i = 0; i < dataObj.arr.length; i++) {
        newDom += " <li>";
        newDom += " <div class='mui-input-row mui-left mui-" + className + " '>";
        newDom += " <input name=\"checkbox\" value=\"Item 1\" type='" + className + "' style='" + style + "'>";
        newDom += " </i>";
        newDom += " <a>";
        newDom += dataObj.arr[i];
        newDom += " </a>";
        newDom += " </div>";
        newDom += " </li>";
    }
    newDom += " </ul>";
    $(".main-Panel").append(newDom);
    showList(dataObj.groupId, dataObj.groupPanelId, dataObj.className);
}

function showList(iptId, groupPanelId, groupClassName) {
    $('#' + iptId).click(function (event) {
        //取消事件冒泡 
        event.stopPropagation();
        $('#' + groupPanelId).fadeIn();
        // 根据点击改变单选多选的形式
        if (groupClassName.indexOf("radio") >= 0) {
            raidoOption(iptId);
        } else {
            formultiOption(iptId);
        }
    });
    //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
    $(document).click(function (event) {
        var _con = $('.selectOut ul'); // 设置目标区域
        if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
            $('#' + groupPanelId).hide(); //淡出消失
        }
    });
}
// 多选
function formultiOption(iptId) {
    var userUlClickIndex = 0;
    $(".selectOut ul li").click(function (even) {
        // var groupText = $("#" + iptId + ' input').val();
        // var newGroupArr = groupText.split(','); //把加入的字符串转成新数组
        userUlClickIndex++;
        if (userUlClickIndex % 2 !== 0) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
            // if (groupText.indexOf(even.target.text) >= 0) {
            //     return
            // } else {
            //     $("#" + iptId + ' input').val(even.target.text + ','); //向input框里插入数据
            // }
        }
    })
} // 单选
function raidoOption(iptId) {
    $(".selectOut ul li").click(function (even) {
        $(this).addClass('selected').siblings().removeClass('selected');
        // var groupText = $("#" + iptId + ' input').val();
        // if (groupText.indexOf(even.target.text) >= 0) {
        //     return
        // } else {
        //     $("#" + iptId + ' input').val(even.target.text); //向input框里插入数据
        // }
    })
}