document.write('<script src="./js/jquery-3.6.1.js"></script>');
document.write('<script src="./js/LocaleSwitch.js"></script>');
function English_Locale(){
	document.title="Memory Card Game";
	for (var i=0;i<8;i++){
		$('#LocaleReq'+String(i)).jqmultilang('en');
	}
}
function Chinese_Locale(){
	document.title="記憶力翻牌小遊戲";
	for (var i=0;i<8;i++){
		$('#LocaleReq'+String(i)).jqmultilang('zh-tw');
	}
}
function Japanese_Locale(){
	document.title="メモリカードゲーム";
	for (var i=0;i<8;i++){
		$('#LocaleReq'+String(i)).jqmultilang('ja');
	}
}