$(window).load(function(){$("#loader").delay(1e3).fadeOut("slow")});var i=0,dragging=!1;$("#dragbar").mousedown(function(e){e.preventDefault(),dragging=!0;var a=$("#right"),o=$("<div>",{id:"ghostbar",css:{height:a.outerHeight(),top:a.offset().top,left:a.offset().left}}).appendTo("body");$(document).mousemove(function(e){o.css("left",e.pageX+1)})}),$(document).mouseup(function(e){dragging&&($("#left").css("width",e.pageX+1),$("#right").css("left",e.pageX+1),$("#ghostbar").remove(),$(document).unbind("mousemove"),dragging=!1)});var editor=ace.edit("editor");ace.require("ace/ext/language_tools"),ace.require("ace/ext/modelist"),editor.setTheme("ace/theme/chrome"),editor.session.setMode("ace/mode/yml"),editor.session.setValue(""),editor.setOptions({fontFamily:"consolas",fontSize:"12px"}),editor.focus(),editor.getSession().on("change",function(){var e=editor.getSession().getValue();if(""==e)$("#right").html('<h2 style="color:#bababa">Getting started</h2><h3 style="color:#bababa">- Go to folder /logs in your server folder<br/>- Open the latest.log (or any from the archives)<br/>- Copy and paste the file in to the editor<br/>- Wait for it to fully load and you are done :)<br/></h3>');else{$("#right").html(""),$("#res").html('<h4 style="color:#a5a5a5">- Click on the number to go to line<br/>- Click on Bukkit/Spigot to search for help</h4>');for(var a=e.split("\n"),o=0;o<a.length;o++){var r=a[o];null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g)||r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g);r=(r=r.replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"<a id='line${i}' href='#line${i}' style='color:${split};font-family:Consolas'>${i}</a> <span style='color:#757575'><span style='font-size:18px;font-weight:bold;color:${split}'>│</span></span> ${string.match(/[[0-9]+:[0-9]+:[0-9]+]/g)}")).replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+INFO]:/g,"<span style='color:#757575'> →</span>"),null!=a[o-1]&&null==a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g)?(r=(r=r.replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")).replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"<span style='color:#e0c502'><strong>"),$("#res").append("<span style='color:#e0c502'>- WARN at [<a href='#line"+o+"' style='color:#e0c502'><strong>"+o+"</strong></a>] [<strong><a style='color:#e0c502' href='//google.com/search?q=url:spigotmc.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Spigot</a></strong>] [<strong><a style='color:#e0c502' href='//google.com/search?q=url:bukkit.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Bukkit</a></strong>] </span><span style='color:#cecece'>"+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"</span><br/>")):r=null!=a[o-1]&&null!=a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g)?(r=r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"&nbsp;&nbsp;<span style='color:#e0c502'><strong>")).replace(/[[0-9]+:[0-9]+:[0-9]+]/g,""):r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"&nbsp;&nbsp;<span style='color:#e0c502'><strong>"),null!=a[o-1]&&null==a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g)?(r=(r=r.replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")).replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g,"<span style='color:#e20000'><strong>"),$("#res").append("<span style='color:#e20000'>- ERROR at [<a href='#line"+o+"' style='color:#e20000'><strong>"+o+"</strong></a>] [<strong><a style='color:#e20000' href='//google.com/search?q=url:spigotmc.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Spigot</a></strong>] [<strong><a style='color:#e20000' href='//google.com/search?q=url:bukkit.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Bukkit</a></strong>] </span><span style='color:#cecece'>"+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"</span><br/>")):r=null!=a[o-1]&&null!=a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g)?(r=r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g,"<span style='color:#e20000'><strong>")).replace(/[[0-9]+:[0-9]+:[0-9]+]/g,""):r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+ERROR]:/g,"<span style='color:#e20000'><strong>"),null!=a[o-1]&&null==a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g)?(r=(r=r.replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")).replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g,"<span style='color:#ff0000'><strong>"),$("#res").append("<span style='color:#ff0000'>- FATAL at [<a href='#line"+o+"' style='color:#ff0000'><strong>"+o+"</strong></a>] [<strong><a style='color:#ff0000' href='//google.com/search?q=url:spigotmc.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Spigot</a></strong>] [<strong><a style='color:#ff0000' href='//google.com/search?q=url:bukkit.org "+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+WARN]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"' target='_blank'>Bukkit</a></strong>] </span><span style='color:#cecece'>"+a[o].replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g,"").replace(/[[0-9]+:[0-9]+:[0-9]+]/g,"")+"</span><br/>")):r=null!=a[o-1]&&null!=a[o-1].match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g)&&null!=r.match(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g)?(r=r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g,"<span style='color:#ff0000'><strong>")).replace(/[[0-9]+:[0-9]+:[0-9]+]/g,""):r.replace(/[[a-zA-Z0-9/\-!@#$%^&*() ]+FATAL]:/g,"<span style='color:#ff0000'><strong>");for(var l=0;l<20;l++)r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace("[21m","</strong><strong>")).replace("[4m","</i><span style='text-decoration:underline'>")).replace("[3m","</i><i>")).replace("[5m","")).replace("[9m","</strong></span></i><span style='text-decoration:line-through'>")).replace("[0;30;1m","</strong></span><span style='color:#000'>")).replace("[0;31;1m","</strong></span><span style='color:#e20000'>")).replace("[0;32;1m","</strong></span><span style='color:#0fbf00'>")).replace("[0;33;1m","</strong></span><span style='color:#e0c502'>")).replace("[0;34;1m","</strong></span><span style='color:#004ce5'>")).replace("[0;35;1m","</strong></span><span style='color:#bc00bc'>")).replace("[0;36;1m","</strong></span><span style='color:#01819b'>")).replace("[0;37;1m","</strong></span><span style='color:#ededed'>")).replace("[0;30;22m","</strong></span><span style='color:#000'>")).replace("[0;31;22m","</strong></span><span style='color:#e20000'>")).replace("[0;32;22m","</strong></span><span style='color:#0fbf00'>")).replace("[0;33;22m","</strong></span><span style='color:#e0c502'>")).replace("[0;34;22m","</strong></span><span style='color:#004ce5'>")).replace("[0;35;22m","</strong></span><span style='color:#bc00bc'>")).replace("[0;36;22m","</strong></span><span style='color:#01819b'>")).replace("[0;37;22m","</strong></span><span style='color:#ededed'>")).replace("[m","</i></strong></span>");$("#right").append("${string}<br/>")}}});
