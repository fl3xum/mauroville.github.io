
	var timer = setInterval(refresh, 5000);

	var motto = [
	"Me gusta el anime :v", 
	"vivan los videogames",
	"Dance for life",
	"Por la razón o la chaucha",
	"안녕하세요 Annyeonghaseyo",
	"Quiero ir a Japón",
	"Mamma Mia",
	"Make Mauro Great Again"
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
