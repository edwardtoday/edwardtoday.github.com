function onload() {
	// Your onload code goes here to initialize your page.
	// Finally, schedule a call for a second round of low-priority initialization.
	window.setTimeout(afterload, 1);
}

function afterload() {
	// Called a few ms after the page has loaded.
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29345258-1']);
_gaq.push(['_trackPageview']);

// Reset dynamo span height
$(window)
	.resize(function() {

});

// Enable popovers
$('.popover-test')
	.popover()
$("a[rel=popover]")
	.popover()
	.click(function(e) {
	e.preventDefault()
})
$('html')
	.click(function(e) {
	$('.popover-test')
		.popover('hide');
});

$('.popover-test')
	.popover({
	html: true,
	trigger: 'manual'
})
	.click(function(e) {
	$(this)
		.popover('toggle');
	e.stopPropagation();
});

$('audio,video')
	.mediaelementplayer({
	success: function(player, node) {
		$('#' + node.id + '-mode')
			.html('mode: ' + player.pluginType);
	}
});

var audio = document.getElementsByTagName("audio")[0];
// parse itexts and create an invisible menu for them
var itexts = new ItextCollection(jQuery(audio), "lyricsline");
// set callback for audio
audio.addEventListener("timeupdate", function() {
	if (audio.paused || audio.ended) {
		return;
	}
	itexts.show(self.audio.currentTime);
}, false);
(function(a){a.fn.dynamo=function(){return this.each(function(b,c){c=a(c);if(c.data("initialized")=="true")return;delay=parseInt(c.data("delay"))||3e3,speed=parseInt(c.data("speed"))||350,pause=c.data("pause")||!1,lines=c.data("lines").split(c.data("delimiter")||","),c.html(a("<span></span>").text(c.text())).data("initialized","true"),max=c.find("span:eq(0)").width();for(k in lines)span=a("<span></span>").text(lines[k]),c.append(span),max=Math.max(max,span.width());c.find("span").each(function(b,e){s=a(e).remove(),d=a("<div></div>").text(s.text()),d.width(max),c.append(d)}),height=c.find(">:first-child").height(),c.width(max).height(height).css({display:"inline-block",position:"relative",overflow:"hidden","vertical-align":"bottom","text-align":"left"}),c.data("center")&&c.css("text-align","center"),transition=function(){c.dynamo_trigger()},pause||setInterval(transition,delay)})},a.fn.dynamo_trigger=function(){return this.each(function(b,c){speed=parseInt(a(c).data("speed"))||350,a(c).find("div:first").slideUp(speed,function(){a(c).append(a(this).show())})})},a(".dynamo").dynamo()})(jQuery);
function parseLrc(b){var c=b.replace(/\r+/g,""),c=c.replace(/\n+/g,"\n"),c=c.replace(/^\s+|\s+$/g,""),c=c.replace(/<[a-zA-Z\/][^>]*>/g,""),b=[],a,d,e;e=null;lrclist=c.split("\n");for(c=0;c<lrclist.length;c+=1){var f=lrclist[c].match(/\[([^\]]+)\](.*)/);if(d=f[1].match(/(\d+):(\d+)(?:\.(\d+))?/))d=60*parseInt(d[1],10)+parseInt(d[2],10)+parseInt(d[3],10)/100,e&&b.push({start:a,end:d,content:e}),a=d,e=f[2]}e&&b.push({start:a,end:null,content:e});return b}
function languageName(b){var c={aa:"Afar",ab:"Abkhazian",ae:"Avestan",af:"Africaans",ak:"Akan",am:"Amharic",an:"Aragonese",anp:"Angika",ar:"Arabic","ar-ae":"Arabic (U.A.E.)","ar-bh":"Arabic (Bahrain)","ar-dz":"Arabic (Algeria)","ar-eg":"Arabic (Egypt)","ar-iq":"Arabic (Iraq)","ar-jo":"Arabic (Jordan)","ar-kw":"Arabic (Kuwait)","ar-lb":"Arabic (Lebanon)","ar-ly":"Arabic (Libya)","ar-ma":"Arabic (Morocco)","ar-om":"Arabic (Oman)","ar-qa":"Arabic (Qatar)","ar-sa":"Arabic (Saudi Arabia)","ar-sy":"Arabic (Syria)",
"ar-tn":"Arabic (Tunisia)","ar-ye":"Arabic (Yemen)",as:"Assamese",ast:"Asturian",av:"Avaric",ay:"Aymara",az:"Azerbaijani",ba:"Bashkir",be:"Belarusian",bg:"Bulgarian","bg-bg":"Bulgarian (Bulgaria)",bh:"Bihari",bi:"Bislama",bm:"Bambara",bn:"Bengali",bo:"Tibetan",br:"Breton",bs:"Bosnian",ca:"Catalan","ca-es":"Catalan (Catalan)",ce:"Chechen",ch:"Chamorro",co:"Corsican",cr:"Cree",cs:"Czech","cs-cz":"Czech (Czech Republic)",cu:"Church Slavic",cv:"Cuvash",cy:"Welsh",da:"Danish","da-dk":"Danish (Denmark)",
de:"German","de-at":"German (Austria)","de-ch":"German (Swiss)","de-de":"German (Germany)","de-li":"Deutsch (Lichtenstein)","de-lu":"Deutsch (Luxemburg)",dv:"Divehi",dz:"Dzongkha",ee:"Ewe",el:"Greek",en:"English","en-au":"English (Australia)","en-bz":"English (Belize)","en-ca":"English (Canada)","en-gb":"English (Great Britan)","en-ie":"English (Ireland)","en-jm":"English (Jamaica)","en-nz":"English (New Zealand)","en-ph":"English (Philippines)","en-uk":"English (Great Britan)","en-us":"English (United States)",
"en-tt":"English (Trinidad)","en-za":"English (South Africa)","en-zw":"English (Zimbabwe)",eo:"Ensperanto",es:"Spanish","es-ar":"Spanish (Argentina)","es-bo":"Spanish (Bolivia)","es-cl":"Spanish (Chile)","es-co":"Spanish (Colombia)","es-cr":"Spanish (Costa Rica)","es-do":"Spanish (Dominican Republic)","es-ec":"Spanish (Ecuador)","es-es":"Spanish (Spain)","es-gt":"Spanish (Guatemala)","es-hn":"Spanish (Honduras)","es-sv":"Spanish (El Salvador)","es-mx":"Spanish (Mexico)","es-nt":"Spanish (Nicaragua)",
"es-pa":"Spanish (Panama)","es-pe":"Spanish (Peru)","es-pr":"Spanish (Puerto Rico)","es-py":"Spanish (Paraguay)","es-uy":"Spanish (Uruguay)","es-ve":"Spanish (Venezuela)",et:"Estonian",eu:"Basque",fa:"Persian",ff:"Fulah",fi:"Finnish",fj:"Fijian",fo:"Faroese",fr:"French","fr-be":"French (Belgium)","fr-ca":"French (Canada)","fr-ch":"French (Swiss)","fr-fr":"French (France)","fr-lu":"French (Luxemburg)","fr-mc":"French (Mexico)",frr:"Frisian",fy:"Western Frisian",ga:"Irish",gd:"Gaelic",gl:"Galician",
gn:"Guarani",gu:"Gujarati",gv:"Manx",ha:"Hausa",he:"Hebrew",hi:"Hindi",ho:"Hiri Motu",hr:"Croatian",hsb:"High Sorbian",ht:"Haitian",hu:"Hungarian",hy:"Armenian",hz:"Herero",ia:"Interlingua",id:"Indonesian",ie:"Interlingue",ig:"Igbo",ii:"Sichuan Yi",ik:"Inupiaq","in":"Indonesian",io:"Ido",is:"Icelandic",it:"Italian","it-ch":"Italian (Swiss)",iu:"Inuktitut",iw:"Hebrew",ja:"Japanese",ji:"Yiddish",jv:"Javanese",ka:"Georian",kg:"Kongo",ki:"Kikuyu",kj:"Kuanyama",kk:"Kasakh",kl:"Kalaallisut",km:"Central Khmer",
kn:"Kannada",ko:"Korean","ko-kp":"Korean (North Korea)","ko-kr":"Korean (South Korea)",kr:"Kanuri",ks:"Kashmiri",ku:"Kurdish",kv:"Komi",kw:"Cornish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lg:"Ganda",li:"Limburgan",ln:"Lingala",lo:"Lao",lt:"Lithuanian",lu:"Luba-Katanga",lv:"Latvian",mg:"Malagasy",mh:"Marshallese",mi:"Maori",mk:"Macedonian","mk-mk":"Macedonian (F.J.R. Macedonia)",ml:"Malayalam",mn:"Mongolian",mo:"Moldavian",mr:"Marathi",ms:"Malay",mt:"Maltese",my:"Burmese",na:"Nauru",nb:"Nowegian Bokm&#xE5;l",
nd:"North Ndebele",ne:"Nepali",ng:"Ndonga",nl:"Dutch","nl-be":"Dutch (Belgium)",nn:"Nowegian Nynorsk",no:"Nowegian",nr:"South Ndebele",nv:"Navajo",ny:"Chichewa",oc:"Occitan",oj:"Ojibwa",om:"Oromo",or:"Oriya",os:"Ossetian",pa:"Panjabi",pi:"Pali",pl:"Polish",ps:"Pushto",pt:"Portuguese","pt-br":"Portuguese (Brasil)",qu:"Quechua",rm:"Romansh",rn:"Rundi",ro:"Romanian",ru:"Russian",rw:"Kinyarwanda",sa:"Sanskit",sc:"Sardinian",sd:"Sindhi",se:"Northern Sami",sg:"Sango",sh:"Serbo-Croatian",si:"Sinhala",sk:"Slovak",
sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian",ss:"Swati",st:"Southern Sotho",su:"Sundanese",sv:"Swedish","sv-fi":"Swedisch (Finnland)",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",ti:"Tigrinya",tk:"Turkmen",tl:"Tagalog",tn:"Tswana",to:"Tonga",tr:"Turkish",ts:"Tsonga",tt:"Tatar",tw:"Twi",ty:"Tahitian",ug:"Uighur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",ve:"Venda",vi:"Vietnamese",vo:"Volap&#xFC;k",wa:"Walloon",wo:"Wolof",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",za:"Zhuang",
zh:"Chinese","zh-chs":"Chinese (Simplified)","zh-cht":"Chinese (Traditional)","zh-cn":"Chinese (People's Republic of China)","zh-guoyu":"Mandarin","zh-hk":"Chinese (Hong Kong S.A.R.)","zh-min-nan":"Min-Nan","zh-mp":"Chinese (Macau S.A.R.)","zh-sg":"Chinese (Singapore)","zh-tw":"Chinese (Taiwan)","zh-xiang":"Xiang",zu:"Zulu"};return c[b]?c[b]:null}
function categoryName(b){var c={CC:"Captions",SUB:"Subtitles",TAD:"Audio Description",KTV:"Karaoke",TIK:"Ticker Text",AR:"Active Regions",NB:"Annotation",META:"Timed Metadata",TRX:"Transcript",LRC:"Lyrics",LIN:"Linguistic Markup",CUE:"Cue Points"};return c[b]?c[b]:null}var ITEXT_ERR={ABORTED:1,NETWORK:2,PARSE:3,SRC_NOT_SUPPORTED:4,LANG:5},LoadFile=function(b,c,a){this.load(b,c,a)};
LoadFile.prototype={url:null,textElements:[],error:0,load:function(b,c,a){this.url=b;var d=null,e=[],f=0;"text/srt"===a?d=parseSrt:"text/lrc"===a?d=parseLrc:this.error=ITEXT_ERR.SRC_NOT_SUPPORTED;jQuery.ajaxSetup({beforeSend:function(a){a.overrideMimeType("text/text; charset="+c)}});jQuery.ajax({type:"GET",url:b,data:{},success:function(a){e=d(a)},error:function(){f=ITEXT_ERR.NETWORK},dataType:"text",async:!1,cache:!1});!f&&!e?this.error=ITEXT_ERR.PARSE:f&&(this.error=f);this.textElements=e}};
var ItextTrack=function(b){this.init(b)};
ItextTrack.prototype={category:null,src:null,lang:null,langName:null,type:"text/srt",charset:null,display:"no",fetched:!1,enabled:!1,error:0,delayBy:0,allText:[],init:function(b){this.category=jQuery(b).attr("category");this.src=jQuery(b).attr("src");this.lang=jQuery(b).attr("lang");this.langName=languageName(this.lang);this.type=jQuery(b).attr("type")||"text/srt";this.charset=jQuery(b).attr("charset");this.display=jQuery(b).attr("display")||"no";"yes"===this.display&&(this.fetch(this.src),this.enabled=
!0)},fetch:function(b){b&&(this.src=b,"text/srt"===this.type||"text/lrc"===this.type?(b=new LoadFile(b,this.charset,this.type),this.error=b.error,this.allText=b.textElements,this.fetched=!0):this.error=ITEXT_ERR.SRC_NOT_SUPPORTED)},currentText:function(b){for(var c=[],a=0;a<this.allText.length;a++)this.allText[a].end?b>=this.allText[a].start&&b<this.allText[a].end&&c.push('<div class="text">'+this.allText[a].content+"</div>"):b>=this.allText[a].start&&c.push('<div class="text">'+this.allText[a].content+
"</div>");return 0===c.length?null:c.join("<br>\n")},enable:function(){this.enabled=!0;this.fetched||this.fetch(this.src)},disable:function(){this.enabled=!1},delay:function(b){this.delayBy=b}};var ItextCollection=function(b,c){this.init(b,c)};
ItextCollection.prototype={video:null,div_id:null,tracks:[],primary_lang:-1,init:function(b,c){this.video=b;this.div_id=c;this.load();for(var a in this.tracks)jQuery("#"+this.div_id).append("<div class='itext_"+a+"'></div>")},load:function(){var b={},c=[],a=[];this.video.find("itext").each(function(){var d=new ItextTrack(this);d.category in b||(b[d.category]={});b[d.category][d.lang]=d;c[d.category]||(c[d.category]=null);a[d.category]||(a[d.category]=null);"auto"===d.display&&(d.lang===window.navigator.language?
c[d.category]=d:d.lang===window.navigator.language.substr(0,2)&&(a[d.category]=d))});for(var d in b)c[d]||(c[d]=a[d]),c[d]&&!c[d].fetched&&(c[d].fetch(c[d].src),c[d].enabled=!0);this.tracks=b},itextMenu:function(b,c){var a;a='<div class="itextMenu" role="presentation">\n<ul class="catMenu" role="presentation">\n';for(var d in this.tracks){a+='<li role="menuitem" aria-haspopup="true" tabindex="0"> &lt; &nbsp;'+categoryName(d)+"\n";a+='<ul class="langMenu" role="menu" >\n';for(var e in this.tracks[d])a+=
'<li role="menuitemradio" tabindex="0"',a=this.tracks[d].display?a+' aria-checked="true"':a+' aria-checked="false"',a+='><a href="#" onclick="'+c+".itexts.tracks['"+d+"']['"+e+"'].enable();jQuery('.catMenu').css('visibility', 'hidden');return false;\">"+this.tracks[d][e].langName+"</a></li>\n";a+="</ul>\n</li>\n"}jQuery(b).append(a+"</ul></div>\n");jQuery(this.video).css("height").substr(0,jQuery(this.video).css("height").length-2);jQuery(".langMenu").css("height","240px");jQuery(".catMenu").css("visibility",
"hidden")},show:function(b){var c=[],a;for(a in this.tracks){c[a]=null;for(var d in this.tracks[a])this.tracks[a][d].enabled&&(c[a]=this.tracks[a][d].currentText(b))}b=jQuery(".mc").css("width").substr(0,jQuery(".mc").css("width").length-2);for(a in c)if(c[a]){if(jQuery("#"+this.div_id+" > .itext_"+a).html()!==c[a]&&(jQuery("#"+this.div_id+" > .itext_"+a).html(c[a]),"CUE"===a&&jQuery("#"+this.div_id+" > .itext_"+a+" > .text").prepend("Chapter: "),"TAD"===a&&(jQuery("#"+this.div_id+" > .itext_TAD").attr("aria-live",
"assertive"),jQuery("#"+this.div_id+" > .itext_TAD").css("max-width",b+"px")),"LRC"===a&&(jQuery("#"+this.div_id+" > .itext_LRC").css("max-width",b+"px"),jQuery("#"+this.div_id+" > .itext_"+a).css("left",5),d=jQuery("#"+this.div_id+" > .itext_LRC > .text").css("width").substr(0,jQuery("#"+this.div_id+" > .itext_LRC > .text").css("width").length-2)/2,jQuery("#"+this.div_id+" > .itext_LRC").css("left",b/2-d-7+"px")),jQuery("#"+this.div_id+" > .itext_"+a).css("visibility","visible"),"CC"===a||"SUB"===
a||"KTV"===a||"TRX"===a||"LIN"===a))jQuery("#"+this.div_id+" > .itext_"+a).css("max-width",b+"px"),jQuery("#"+this.div_id+" > .itext_"+a).css("left",5),d=jQuery("#"+this.div_id+" > .itext_"+a+" > .text").css("width").substr(0,jQuery("#"+this.div_id+" > .itext_"+a+" > .text").css("width").length-2)/2,jQuery("#"+this.div_id+" > .itext_"+a).css("left",b/2-d-7+"px")}else jQuery("#"+this.div_id+" > .itext_"+a).css("visibility","hidden")}};
