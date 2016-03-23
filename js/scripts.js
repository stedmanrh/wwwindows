//initialize positions
for(var i=0; i<$('.window').length; i++){
    $('.window').eq(i).css({
        "top": 50*(i+1),
        "left": 75*(i+1)
    });
}

//set viewport heights
$('.viewport').height(function(){
    var win = $(this).parents('.window');
    var h = win.height() - win.find('.title-bar').height();
    return h;
});

//movable and resizable windows
$('.window').draggable(
        {containment: "window"},
        { handle: ".title-bar" })
    .resizable(
        {handles: "se"},
        {resize: function( event, ui ) {
            var h = $(this).height() - $(this).find('.title-bar').height();
            $(this).find('.viewport').height(h);
        }}
    );


//bring clicked windows to front
var z = 1;
$('.window').mousedown(function(){
    $(this).css('z-index', function(){
        return z;
    });
    z++;
    $('.window').removeClass('active');
    $(this).addClass('active');
    switchBG();
});

//maximize windows
$('.action.max').click(function(){
    var win = $(this).parents('.window');
    var view = win.find('.viewport');
    if(win.data("max")===false){
        var h = $(window).height();
        win.data("max", "true");
        win.data("top", win.css("top"));
        win.data("left", win.css("left"));
        win.data("w", win.css("width"));
        win.data("h", win.css("height"));
        win.data("z", win.css("z-index"));
        win.css({
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": h,
            "z-index": "-1"
        });
        view.height(h - win.find('.title-bar').height());
        win.data("max", true);
    }
    else{
        win.css({
            "top": win.data("top"),
            "left": win.data("left"),
            "width": win.data("w"),
            "height": win.data("h"),
            "z-index": win.data("z")
        });
        var h = win.height() - win.find('.title-bar').outerHeight(true);
        view.height(h);
        win.data("max", false);
    }
});

//close windows
$('.action.close').click(function(){
    var parent = $(this).parents('.window');
    var index = parent.index();
    var nextWindow = $('.window').eq(index-1);
    parent.remove();
    nextWindow.addClass('active');
    switchBG();
});

//background switching
function switchBG(){
    if($('.definition').hasClass('active')){
        $('body').css({
            "background": "url('img/yosemite.png')",
            "background-size": "cover"
        });
    }
    if($('.cli').hasClass('active')){
        $('body').css({
            "background": "url('img/matrix.gif')",
            "background-size": "cover"
        });
    }
    if($('.xerox').hasClass('active')){
        $('body').css({
            "background": "url('img/xerox-bg-lt.png')"
        });
    }
    if($('.win2').hasClass('active')){
        $('body').css({
            "background": "#52ffff"
        });
    }
    if($('.win95').hasClass('active')){
        $('body').css({
            "background": "url('img/bliss.png')",
            "background-size": "cover"
        });
    }
}

//easter eggs
$('#popup').click(function(){
    $(this).remove();
    if(confirm("Ay bruh, u wanna bigger d*ck?")){
        alert("Keep dreaming, Romeo.");
    }
    else if(confirm("Well I'm also a Nigerian banker. Click \"OK\" to accept your prize moneys!")){
        $('#supahot').show().addClass('active');
    }
    else{
        alert("Well done, ambition leads to ruin anyway.");
        $('#porn').show().addClass('active');
    }
});
