d3.helper={};d3.helper.nulltooltip=function(){return function(e){e.on("mouseover.tooltip",null).on("mousemove.tooltip",null).on("mouseout.tooltip",null)}};
d3.helper.ruleTooltip=function(e){function b(a){a.on("mouseover.tooltip",function(f){d3.select("body").selectAll("div.ruleTooltip").remove();d=d3.select("body").append("div").attr("class","ruleTooltip");var a=d3.mouse(g);d.style({left:a[0]+10+"px",top:a[1]-40+"px","background-color":"rgba(242, 242, 242, .9)",padding:"5px",position:"absolute","z-index":1001,opacity:.8,"box-shadow":"0 1px 2px 0 #656565"});var c=f.filter(function(a){return 0!=a.z})[0].rule,b={};c.it.forEach(function(a){b[a.aname]=a.aval});
var h=[];e.forEach(function(a){a in b&&h.push(a+"="+b[a])});f="<div>"+h.join(", ")+"</div>";a="<span>Support = "+(100*c.m[0]).toFixed(2)+"%, </span>";var k="<span>Confidence = "+(100*c.m[1]).toFixed(2)+"%, </span>";c="<span>Lift = "+ +c.m[2].toFixed(2)+" </span>";d.html(f+a+k+c)}).on("mousemove.tooltip",function(a){a=d3.mouse(g);d.style({left:a[0]+10+"px",top:a[1]-40+"px"})}).on("mouseout.tooltip",function(a){d.remove()})}var d,g=d3.select("body").node();b.attr=function(a){if(!arguments.length)return attrs;
attrs=a;return this};b.style=function(a){if(!arguments.length)return styles;styles=a;return this};return b};