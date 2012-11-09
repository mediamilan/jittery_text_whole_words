var m_rand, val;
$(function(){
	setInterval(function() {
		var m_rand = Math.random();
		var rand_num = Math.floor((Math.random()*2)+1);
		var m_rand = m_rand < 0.5 ? -1*rand_num : rand_num;
		var element = $('#full_jitter');
		
		if (m_rand%2 == 0) {
			element.css({
				top: m_rand
			});
		} else {
			element.css({
				left: m_rand
			});
		};
	}, 3 ); // every 1 second
	
});