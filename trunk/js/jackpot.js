function jackpot_value(){
	$("span[id^='jp_']").each(function(){
		var randomnumber=Math.floor(Math.random()*15)/100;
		//alert($.parseNumber(this.innerHTML, {format:"#,###.00", locale:"us"}));
		var nValue = $.parseNumber(this.innerHTML, {format:"#,###.00", locale:"us"}) + randomnumber;
		$(this).text($.formatNumber(nValue, {format:"#,###.00", locale:"us"}));
	});
	setTimeout(jackpot_value, 3000);
}
function jackpotSingle_value(){
	var jp_value = '';
	var randomnumber=Math.floor(Math.random()*15)/100;
	y = 0;
	$("span[id^='jp_']").each(function(){
		jp_value += $(this).html();
		y++;
	});
	var nValue = $.parseNumber(jp_value, {format:"#,###.00", locale:"us"}) + randomnumber;
	nValueStr = $.formatNumber(nValue, {format:"####.00", locale:"us"});

	c = 0;
	for(x=0; x<y; x++){
		if(y-x == nValueStr.length-c)
			$("#jp_"+(x+1)).html(nValueStr.charAt(c++));
	}
	
	setTimeout(function(){ jackpotSingle_value(); }, 3000);
}