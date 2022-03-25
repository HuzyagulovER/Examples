var BuyCar = new Vue({ //Cre 2AC
	el: '#app',
	data: {
		active: true,
		carImage: "img/car-image.png",
		carName: "ELEGY FT",
		carNumber: "MI33KE",
		carLogoImg: "img/car-logo.png",
		carProps: [4, 3, 4, 4],
		carTechs: [5, 3, 2, 2, 2],
		player: "MIKE ROBOX",
		price: '350 000',
	},
	methods: {
		setinfo(json) {
			this.carName = json[0]
			this.carNumber = json[1]
			this.carLogoImg = json[2]
			this.carProps = json[3]
			this.carTechs = json[4]
			this.player = json[5]
			this.price = addSpaces(json[6])
		},
		replaceImg() {
			if (this.imgupload) this.familyurl = "images/hype.png"
		},
		btnAccept() { },
		closeMenu() {
			this.active = false;
		},
	}
});

function addSpaces(str) {
	let i = 0,
		j = 0,
		reverseStr,
		mod,
		endStr = [];

	reverseStr = String(str).split('').reverse();
	console.log(reverseStr);


	while (i < reverseStr.length) {
		mod = (i + 1) % 3;

		endStr[j] = reverseStr[i];
		if (mod === 0) {
			endStr[++j] = ' ';
			i++; j++;
			continue
		}
		i++; j++;
	}

	return endStr.reverse().join('');
}