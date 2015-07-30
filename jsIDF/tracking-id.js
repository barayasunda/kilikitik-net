$(document).ready(function(e)
{
	var lang =  $('body').attr('class');

	function SetTargetWithQuerystring(t) { 
		var qs = location.search.substring(1, location.search.length);  
		var newURL = (t.indexOf('?') != -1) ? t + "&" + qs : t + "?" + qs;
		return newURL;
	}
	
	function changeURL(lang)
	{ 
		if ( lang !== undefined )
		{
			lang = '/' + lang;
		}
		else
		{
			lang = null;	
		}

		var m1 = document.getElementById("logo");
		m1.href=SetTargetWithQuerystring("http://www.df-bet.com/id");
		
		var m2 = document.getElementById("register-btn");
		m2.href=SetTargetWithQuerystring("https://join.wtcugf.com/casino/id");
		
		var m3 = document.getElementById("deposit-btn");
		m3.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-cashier");
		
		var m4 = document.getElementById("start-playing-btn");
		m4.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/promotions/cash-back-fdb");
		
		var m5 = document.getElementById("terms-and-conditions");
		m5.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/promotions/cash-back-fdb");
		
		var m6 = document.getElementById("privacy-policy");
		m6.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-privacy");
		
		var m7 = document.getElementById("terms-of-use");
		m7.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-terms-of-use");
		
		var m8 = document.getElementById("security");
		m8.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-security");
		
		var m9 = document.getElementById("responsible-gaming");
		m9.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-responsible-gaming");
		
		var m10 = document.getElementById("press");
		m10.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/online-casino-press-releases");
		
		var m11 = document.getElementById("jobs");
		m11.href=SetTargetWithQuerystring("http://vipdafa888.asia/id/recruitment");
		
		var m12 = document.getElementById("affiliates");
		m12.href=SetTargetWithQuerystring("http://affiliate.yulecheng888.com/");
		
        var m13 = document.getElementById("join_now");
		m13.href=SetTargetWithQuerystring("https://join.wtcugf.com/casino/id");
	}
	
	changeURL(lang);
});