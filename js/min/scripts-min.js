function switchBG(){$(".definition").hasClass("active")&&$("body").css({background:"url('img/yosemite.png')","background-size":"cover"}),$(".cli").hasClass("active")&&$("body").css({background:"url('img/matrix.gif')","background-size":"cover"}),$(".xerox").hasClass("active")&&$("body").css({background:"url('img/xerox-bg-lt.png')"}),$(".win2").hasClass("active")&&$("body").css({background:"#52ffff"}),$(".win95").hasClass("active")&&$("body").css({background:"url('img/bliss.png')","background-size":"cover"})}for(var i=0;i<$(".window").length;i++)$(".window").eq(i).css({top:50*(i+1),left:75*(i+1)});$(".viewport").height(function(){var i=$(this).parents(".window"),a=i.height()-i.find(".title-bar").height();return a}),$(".window").draggable({containment:"window"},{handle:".title-bar"}).resizable({handles:"se"},{resize:function(i,a){var t=$(this).height()-$(this).find(".title-bar").height();$(this).find(".viewport").height(t)}});var z=1;$(".window").mousedown(function(){$(this).css("z-index",function(){return z}),z++,$(".window").removeClass("active"),$(this).addClass("active"),switchBG()}),$(".action.max").click(function(){var i=$(this).parents(".window"),a=i.find(".viewport");if(i.data("max")===!1){var t=$(window).height();i.data("max","true"),i.data("top",i.css("top")),i.data("left",i.css("left")),i.data("w",i.css("width")),i.data("h",i.css("height")),i.data("z",i.css("z-index")),i.css({top:0,left:0,width:"100%",height:t,"z-index":"-1"}),a.height(t-i.find(".title-bar").height()),i.data("max",!0)}else{i.css({top:i.data("top"),left:i.data("left"),width:i.data("w"),height:i.data("h"),"z-index":i.data("z")});var t=i.height()-i.find(".title-bar").outerHeight(!0);a.height(t),i.data("max",!1)}}),$(".action.close").click(function(){var i=$(this).parents(".window"),a=i.index(),t=$(".window").eq(a-1);i.remove(),t.addClass("active"),switchBG()}),$("#popup").click(function(){$(this).remove(),confirm("Ay bruh, u wanna bigger d*ck?")?alert("Keep dreaming, Romeo."):confirm('Well I\'m also a Nigerian banker. Click "OK" to accept your prize moneys!')?$("#supahot").show().addClass("active"):(alert("Well done, ambition leads to ruin anyway."),$("#porn").show().addClass("active"))});