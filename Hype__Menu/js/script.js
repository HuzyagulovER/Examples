var menu = new Vue({ //Cre 2AC
	el: '#app',
	data: {
		active: true,
		main: true,
		report: false,
		quests: false,
		settings: false,
		adminPanel: false,
		faq: false,
		donat: false,

		licensesList: ["ლიცენზია 01", "ლიცენზია 02", "ლიცენზია 01", "ლიცენზია 01", "ლიცენზია 01", "ლიცენზია 01", "ლიცენზია 01",],
		coinMultiplier: 5,
		activeModal: false,
		balanceCheck: false,
		warningRemoveModal: false,
		wheelModalActive: false,
		inventoryModalActive: false,
		convertCoinActive: false,
		packsActive: false,
		buyLicensesActive: false,
		acceptCaseActive: false,
		carNumberPlateActive: false,
		idChangeActive: false,
		nameChangeActive: false,
		visualChangeActive: false,
		carsStuffActive: false,
		carsActive: false,
		stuffActive: false,
		show: "",
		carsList: [
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF91S", "img/cars/cars-image/car-1.png", "5.000.000", "img/cars/cars-logo/car-logo-2.png", [3, 2, 5, 4, 2]],
			["FERRARI", "SF92S", "img/cars/cars-image/car-2.png", "5.000.000", "img/cars/cars-logo/car-logo-3.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 5, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
			["FERRARI", "SF90S", "img/cars/cars-image/ferrari.png", "5.000.000", "img/cars/cars-logo/car-logo-1.png", [3, 2, 2, 4, 2]],
		],
		// CarsList Pattern:	[Car_name, Car_model, Car_image_link, Car_worth, Car_logo, [Car_characteristics]]
		stuffList: [
			["FERRARI", "SF90S",
				["img/stuff/stuffName_1/stuffName_1-1.png",
					"img/stuff/stuffName_1/stuffName_1-2.png",
					"img/stuff/stuffName_1/stuffName_1-3.png",
					"img/stuff/stuffName_1/stuffName_1-4.png",
					"img/stuff/stuffName_1/stuffName_1-5.png",
					"img/stuff/stuffName_1/stuffName_1-6.png",
					"img/stuff/stuffName_1/stuffName_1-7.png",],
				"5.000.000",
				0],
			["FERRARI", "SF90S",
				["img/stuff/stuffName_2/stuffName_2-1.png",
					"img/stuff/stuffName_2/stuffName_2-2.png",
					"img/stuff/stuffName_2/stuffName_2-3.png",
					"img/stuff/stuffName_2/stuffName_2-4.png",
					"img/stuff/stuffName_2/stuffName_2-5.png",
					"img/stuff/stuffName_2/stuffName_2-6.png",
					"img/stuff/stuffName_2/stuffName_2-7.png",],
				"5.000.000",
				1],
			["FERRARI", "SF90S",
				["img/stuff/stuffName_1/stuffName_1-1.png",
					"img/stuff/stuffName_1/stuffName_1-2.png",
					"img/stuff/stuffName_1/stuffName_1-3.png",
					"img/stuff/stuffName_1/stuffName_1-4.png",
					"img/stuff/stuffName_1/stuffName_1-5.png",
					"img/stuff/stuffName_1/stuffName_1-6.png",
					"img/stuff/stuffName_1/stuffName_1-7.png",],
				"5.000.000",
				0],
			["FERRARI", "SF90S",
				["img/stuff/stuffName_2/stuffName_2-1.png",
					"img/stuff/stuffName_2/stuffName_2-2.png",
					"img/stuff/stuffName_2/stuffName_2-3.png",
					"img/stuff/stuffName_2/stuffName_2-4.png",
					"img/stuff/stuffName_2/stuffName_2-5.png",
					"img/stuff/stuffName_2/stuffName_2-6.png",
					"img/stuff/stuffName_2/stuffName_2-7.png",],
				"5.000.000",
				0],
			["FERRARI", "SF90S",
				["img/stuff/stuffName_1/stuffName_1-1.png",
					"img/stuff/stuffName_1/stuffName_1-2.png",
					"img/stuff/stuffName_1/stuffName_1-3.png",
					"img/stuff/stuffName_1/stuffName_1-4.png",
					"img/stuff/stuffName_1/stuffName_1-5.png",
					"img/stuff/stuffName_1/stuffName_1-6.png",
					"img/stuff/stuffName_1/stuffName_1-7.png",],
				"5.000.000",
				0],
			["FERRARI", "SF90S",
				["img/stuff/stuffName_2/stuffName_2-1.png",
					"img/stuff/stuffName_2/stuffName_2-2.png",
					"img/stuff/stuffName_2/stuffName_2-3.png",
					"img/stuff/stuffName_2/stuffName_2-4.png",
					"img/stuff/stuffName_2/stuffName_2-5.png",
					"img/stuff/stuffName_2/stuffName_2-6.png",
					"img/stuff/stuffName_2/stuffName_2-7.png",],
				"5.000.000",
				0],
		],
		// StuffList Pattern: [Stuff_name, Stuff_model, [Stuff_image_links_array], Stuff_worth, Stuff_gender(0: male, 1: female)]
		stuffCharacteristics: {
			"სიჩქარე": 3,
			"მართვა": 2,
			"მართვა": 2,
			"აჩქარება": 4,
			"მუხრუჭები": 2,
		},


		level: 5,
		nickname: 'Legenda_rus',
		ID: '15232',
		status: 'VIP',
		daysLeft: 25,
		balance: '10 000',
		modalHeader: '',
		experience: 31,
		levelProgress: 65,
		characterAbilities: ['95.000', '3.000.000', 'FBI', 13, 'Безработный', '745645', '14324950902', 'A | B | C | D'],
		characterInfo: [12, 22, 32, 42, 52, 62, 72, 82],
		transportModule: false,
		buisnessModule: false,
		parkingModule: false,
		housesModule: false,
		list: '',
		transportList: ['VAZ 2101', 'VAZ 2101', 'VAZ 2101', 'VAZ 2101', 'VAZ 2101', 'VAZ 2101', 'VAZ 2101',],
		buisnessList: [],
		parkingList: [],
		housesList: [],


		messageList: [
			{
				'nickname': 'Legenda_rus',
				'status': 'user',
				'time': '15:53',
				'text': 'ЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйте! Кажется меня убил читер. Его id я не запомнил моджете посмотреть в логах последнее убийство?',
				'id': '1'
			},
			{
				'status': 'chatinfo',
				'adminnickname': 'Ivan_NArkoman #4515'
			},
			{
				'nickname': 'Ivan_NArkoman #4515',
				'status': 'admin',
				'time': '15:54',
				'text': 'Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...',
				'id': '2'
			},
			{
				'nickname': 'Legenda_rus',
				'status': 'user',
				'time': '15:53',
				'text': 'ЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйте! Кажется меня убил читер. Его id я не запомнил моджете посмотреть в логах последнее убийство?',
				'id': '3'
			},
			{
				'nickname': 'Ivan_NArkoman #4515',
				'status': 'admin',
				'time': '15:54',
				'text': 'Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...',
				'id': '4'
			},
			{
				'nickname': 'Legenda_rus',
				'status': 'user',
				'time': '15:53',
				'text': 'ЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйте! Кажется меня убил читер. Его id я не запомнил моджете посмотреть в логах последнее убийство?',
				'id': '5'
			},
			{
				'nickname': 'Ivan_NArkoman #4515',
				'status': 'admin',
				'time': '15:54',
				'text': 'Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...',
				'id': '6'
			},
			{
				'nickname': 'Legenda_rus',
				'status': 'user',
				'time': '15:53',
				'text': 'ЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйте! Кажется меня убил читер. Его id я не запомнил моджете посмотреть в логах последнее убийство?',
				'id': '7'
			},
			{
				'nickname': 'Ivan_NArkoman #4515',
				'status': 'admin',
				'time': '15:54',
				'text': 'Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...',
				'id': '8'
			},
			{
				'nickname': 'Legenda_rus',
				'status': 'user',
				'time': '15:53',
				'text': 'ЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйтеЗдравствуйте! Кажется меня убил читер. Его id я не запомнил моджете посмотреть в логах последнее убийство?',
				'id': '9'
			},
			{
				'nickname': 'Ivan_NArkoman #4515',
				'status': 'admin',
				'time': '15:54',
				'text': 'Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...Здравствуйте! Сейчас гляну. Минуту...',
				'id': '10'
			},
		],

		questsList: [
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 10,
				'max': 15,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 30,
				'max': 64,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
			{
				'title': 'Почувствуй себя богом',
				'done': 15,
				'max': 24,
				'description': 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
			},
		],
		questsProgress: 62,

		settingsArray: [
			['TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB', 'TAB'],
			[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			[10, 30, 90, 100]
		],

		faqList: [
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия кондуктор автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">12$</span> до <span class="white">30$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
			{
				'title': 'Профессия водитель автобуса',
				'description': 'Одна из популярнейших профессия которая отлично подойдет как новичкам так и опытным игрокам. Суть професии заключается в том что вам нужно арендовать автобус и ездить по чекпоинтам отмеченным на карте. За каждый чекпоинт вы будете получать от <span class="white">15$</span> до <span class="white">36$</span>',
				'url': 'img/image__bus.jpg'
			},
		],
		checkedFaq: '',

	},
	methods: {
		setinfo(json) {
			this.level = json[X]
			this.nickname = json[X]
			this.ID = json[X]
			this.status = json[X]
			this.daysLeft = json[X]
			this.balance = json[X]
			this.modalHeader = json[X]
			this.experience = json[X]
			this.levelProgress = json[X]

			this.characterInfo = json[X]
			this.characterAbilities = addChars(this.characterAbilities, '.', 3)
		},
		openMyAchivements(type) {
			if (type == 'transport') {
				this.modalHeader = 'Мой транспорт'
				this.transportModule = true
				this.list = this.transportList
			}
			if (type == 'buisness') {
				this.modalHeader = 'Мой бизнес'
				this.buisnessModule = true
				this.list = this.buisnessList
			}
			if (type == 'parking') {
				this.modalHeader = 'Моя парковка'
				this.parkingModule = true
				this.list = this.parkingList
			}
			if (type == 'houses') {
				this.modalHeader = 'Мои дома'
				this.housesModule = true
				this.list = this.housesList
			}
		},
		openMain(event) {
			this.main = true
			if (!event.currentTarget.classList.contains('active')) {
				this.progressBars(this.characterInfo)
			}
		},
		openDonat() {
			this.donat = true
		},
		openReport() {
			this.report = true
			setTimeout(() => {
				document.querySelector('.chat .body__container').scrollTop = document.querySelector('.chat .body__container').scrollHeight
			}, 0);
		},
		openQuests(event) {
			this.quests = true
			if (!event.currentTarget.classList.contains('active')) {
				this.progressBars(this.questsProgress)
			}
			this.questsFunc()
		},
		openFaq() {
			this.faq = true
			this.checkedFaq = this.faqList[0]
			this.faqFunc()
		},
		openSettings(event) {
			this.settings = true
			if (!event.currentTarget.classList.contains('active')) {
				this.settingsFunc(this.settingsArray)
			}
		},
		openAdminPanel() {
			this.adminPanel = true
		},
		progressBars(array) {
			setTimeout(() => {
				var width = 400,
					height = 400,
					timeLimit = 100;

				var fields = [{
					val: [],
					value: timeLimit,
					size: timeLimit,
				}];

				let data = [];

				if (!Array.isArray(array)) array = [array]

				array.forEach((element, index) => {
					data[index] = element
				});
				if (this.main) data.unshift(this.experience, this.levelProgress);

				let lineThickness = 0.2,
					thickness = lineThickness,
					animTime = 800;

				var arc = d3.arc()
					.innerRadius(width * .5 * (1 - thickness))
					.outerRadius(width * .5)
					.startAngle(0)
					.endAngle(function (d) {
						return ((d.value / d.size) * 2 * Math.PI);
					});

				var svg = d3.selectAll(".roll").append("svg")
					.attr('viewBox', `0 0 ${width} ${height}`);

				var field = svg.selectAll('.field')
					.data(fields)
					.enter()
					.append('g')
					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
					.attr('class', "field");

				var back = field.append("path")
					.attr("class", "path path--background")
					.attr("d", arc);

				var path = field.append("path")
					.attr("class", "path path--foreground");

				let j = 0;
				field.each(function (d) {
					d.previous = 0;
					d.val[j] = timeLimit * data[j] / 100;
					j++;
				});

				setTimeout(() => {
					path.transition()
						.duration(animTime)
						.attrTween("d", arcTween);
				}, 700);


				j = 0;
				function arcTween(b) {
					b.value = b.val[j];
					var i = d3.interpolate({ value: b.previous }, b);
					j++
					return function (t) {
						return arc(i(t))
					};
				}
			}, 200);

		},
		questsFunc() {
			setTimeout(() => {
				document.querySelectorAll('.quests .item').forEach((element) => {

					element.onclick = function cl() {
						if (!element.classList.contains('active')) document.querySelectorAll('.quests .item').forEach((el) => { el.classList.remove('active'); el.lastChild.style.maxHeight = 0 })
						element.classList.toggle('active');
						if (element.classList.contains('active')) {
							element.lastChild.style.maxHeight = parseInt(window.getComputedStyle(element.lastChild.lastChild).height) + parseInt(window.getComputedStyle(document.querySelector('html')).fontSize) * 4 + 'px'
						} else {
							element.lastChild.style.maxHeight = 0
						}
					}

					element.lastChild.onclick = (event) => { event.stopPropagation() }
				})
			}, 10);
		},
		settingsFunc(array) {
			setTimeout(() => {
				document.querySelectorAll('.item__activation').forEach((el) => {
					el.onclick = (event) => {
						event.currentTarget.classList.toggle('active')
					}
				})
				document.querySelectorAll('input').forEach((el) => {
					el.onfocus = (event) => {
						event.currentTarget.parentNode.classList.add('focus')
					}
					el.onblur = (event) => {
						event.currentTarget.parentElement.classList.remove('focus')
					}
				})

				let binds = document.querySelectorAll('.binds .item__bind'),
					blur = new Event('blur');
				binds.forEach((el, i) => {
					el.childNodes[0].innerHTML = array[0][i]

					el.onclick = (event) => {
						binds.forEach((elem) => {
							elem.classList.remove('wait')
						})
						event.currentTarget.classList.add('wait')
						el.onkeydown = writeKey
					}
					el.onblur = (event) => {
						event.currentTarget.classList.remove('wait')
					}
					function writeKey(event) {
						let target = document.querySelector('.wait'),
							char, k = 0;

						try {
							if (event.keyCode == 16) {
								if (event.location == 1) {
									char = 'lshift'
								}
								if (event.location == 2) {
									char = 'rshift'
								}
							}
							if (event.keyCode == 17) {
								if (event.location == 1) {
									char = 'lctrl'
								}
								if (event.location == 2) {
									char = 'rctrl'
								}
							}
							if (event.keyCode == 18) {
								if (event.location == 1) {
									char = 'lalt'
								}
								if (event.location == 2) {
									char = 'ralt'
								}
							}
							if (event.keyCode == 32) {
								char = 'space'
							}
							if (event.keyCode != 16 && event.keyCode != 17 && event.keyCode != 19 && event.keyCode != 32) {
								char = event.key
							}
							char = char.toLowerCase()
							for (let i = 0; i < binds.length; i++) {
								if (binds[i].childNodes[0].innerHTML.toLowerCase() == char) {
									k++
								}
							}
							if (k == 0) {
								target.childNodes[0].innerHTML = char
							}
							target.classList.remove('wait')
						} catch (error) {
							return
						}

					}
				})

				let interfaceButtons = document.querySelectorAll('.interface .item__activation');
				interfaceButtons.forEach((el, i) => {
					if (array[1][i]) {
						el.classList.add('active')
					}
				})


				let slider = document.querySelectorAll('.slider .slider__container'),
					sliderTrack,
					sliderFill,
					sliderThumb,
					input;

				slider.forEach((el, i) => {
					input = el.querySelector('.slider__input');
					input.value = array[2][i];
					sliders(el)
					input.oninput = () => {
						sliders(el)
					}
				})

				function sliders(el) {
					sliderTrack = el.querySelector('.slider__track');
					sliderFill = el.querySelector('.slider__fill');
					sliderThumb = el.querySelector('.slider__thumb');
					inp = el.parentElement.querySelector('.slider__input');
					show = el.nextElementSibling;


					sliderFill.style.width = inp.value / inp.max * 100 + '%';
					sliderThumb.style.left = inp.value / inp.max * 100 + '%';
					show.querySelector('.value').innerHTML = inp.value;
				}
			}, 10);
		},
		faqFunc() {
			setTimeout(() => {
				document.querySelectorAll('.faq .item').forEach((el, i) => {
					el.onclick = () => {
						if (!el.classList.contains('active')) {
							document.querySelectorAll('.faq .item').forEach((elem) => {
								elem.classList.remove('active')
							})
							el.classList.add('active')
							this.checkedFaq = this.faqList[i]
							console.log(this.checkedFaq);

						}
					}
				})
			}, 10);
		},

		balanceCheck() {
			this.balanceCheck = true;
		},
		warningRemove() {
			this.warningRemoveModal = true;
		},
		wheelModal() {
			this.wheelModalActive = true
		},
		inventoryModal() {
			this.inventoryModalActive = true
		},
		convertCoin() {
			this.convertCoinActive = true;
			let mult = +this.coinMultiplier;
			setTimeout(function () {
				let input = document.querySelector('.convert-coin .convert-coin__input'),
					output = document.querySelector('.convert-coin .value');
				input.onkeyup = function (event) {
					if (+input.value > 10000000) {
						input.value = 10000000
					};
					output.innerHTML = Math.round(+input.value * mult);
				};
				preventDefaultButtons();
			}, 500)
		},
		packs() {
			this.packsActive = true
		},
		buyLicenses() {
			this.buyLicensesActive = true
		},
		acceptCase() {
			this.acceptCaseActive = true
		},
		carNumberPlate() {
			this.carNumberPlateActive = true

			setTimeout(function () {
				let inputs = document.querySelectorAll('.car-number-plate input');
				inputs[0].onkeyup = function () {
					if (inputs[0].value.length == inputs[0].getAttribute('maxlength')) {
						inputs[1].focus();
					};
					toggleFocus(this.closest('form'));
				}
				inputs[1].onkeydown = function (event) {
					toggleFocus(this.closest('form'))
					if (inputs[1].value == "" && event.keyCode === 8) {
						inputs[0].focus()
					}
				};
				preventDefaultButtons();
			}, 500)
		},
		idChange() {
			this.idChangeActive = true
			setTimeout(preventDefaultButtons, 500)
		},
		nameChange() {
			this.nameChangeActive = true
			setTimeout(preventDefaultButtons, 500)
		},
		visualChange() {
			this.visualChangeActive = true
		},
		cars() {
			this.carsStuffActive = true
			this.carsActive = true
			this.show = this.carsList[0]
			setTimeout(() => {
				if (document.querySelector('.cars-stuff__list')) {
					listClassToggle(document.querySelector('.cars-stuff__list'), 'active');
				}
				if (document.querySelector('.car-colors__container')) {
					listClassToggle(document.querySelector('.car-colors__container'), 'active')
				}
			}, 500)
		},
		stuff() {
			this.carsStuffActive = true
			this.stuffActive = true
			this.show = this.stuffList[0]

			setTimeout(() => {
				listClassToggle(document.querySelector('.cars-stuff__list'), 'active');
				let leftButton = document.querySelector('.counter__left-corner'),
					rightButton = document.querySelector('.counter__right-corner'),
					counterInput = document.querySelector('.counter__input'),
					previewImage = document.querySelector('.preview .preview__container img');

				leftButton.onclick = () => {
					if (counterInput.value != 0) {
						counterInput.value--
						previewImage.setAttribute('src', this.show[2][counterInput.value])
					}
				}

				rightButton.onclick = () => {
					if (counterInput.value < this.show[2].length - 1) {
						counterInput.value++
						previewImage.setAttribute('src', this.show[2][counterInput.value])
					}
				}
			}, 500)
		},
		changeShow(index) {
			if (this.carsActive) {
				this.show = this.carsList[index]
			}
			if (this.stuffActive) {
				this.show = this.stuffList[index]
				document.querySelector('.counter__input').value = 0
				document.querySelector('.preview .preview__container img').setAttribute('src', this.show[2][0])
			}
		},

		closeMenu() {
			this.main = false
			this.report = false
			this.settings = false
			this.quests = false
			this.donat = false
			this.faq = false
			this.adminPanel = false
		},
		closeModal() {
			this.transportModule = false
			this.buisnessModule = false
			this.parkingModule = false
			this.housesModule = false

			this.warningRemoveModal = false
			this.wheelModalActive = false
			this.inventoryModalActive = false
			this.convertCoinActive = false
			this.packsActive = false
			this.buyLicensesActive = false
			this.acceptCaseActive = false
			this.carNumberPlateActive = false
			this.idChangeActive = false
			this.nameChangeActive = false
			this.visualChangeActive = false
			this.carsStuffActive = false
			this.carsActive = false
			this.stuffActive = false
		},
	},
	mounted() {
		if (this.main) this.progressBars(this.characterInfo);
		if (this.quests) this.progressBars(this.questsProgress);

		if (this.report) document.querySelector('.chat .body__container').scrollTop = document.querySelector('.chat .body__container').scrollHeight

		if (this.quests) this.questsFunc()

		if (this.settings) this.settingsFunc(this.settingsArray)

		if (this.faq) {
			this.checkedFaq = this.faqList[0]
			this.faqFunc()
		}
	}
});


function addChars(str, char, div) {
	let i = 0,
		j = 0,
		reverseStr,
		mod,
		endStr = [];

	reverseStr = String(str).split('').reverse();

	while (i < reverseStr.length) {
		mod = (i + 1) % div;
		endStr[j] = reverseStr[i];
		if (mod === 0 && i !== reverseStr.length - 1) {
			endStr[++j] = char;
			i++; j++;
			continue
		}
		i++; j++;
	}

	return endStr.reverse().join('');
}
function checkInput(form) {
	let elems = form.childNodes,
		inputs = [],
		inputsValues = [];
	for (let i = 0; i < elems.length; i++) {
		if (elems[i].tagName == 'INPUT') {
			inputs.push(elems[i])
		}
	};
	for (let i = 0; i < inputs.length; i++) {
		(inputs[i].value != "") ? inputsValues.push(true) : inputsValues.push(false)
	};

	return (inputsValues.includes(true)) ? true : false
}
function toggleFocus(form) {
	let check = false;
	check = (checkInput(form)) ? true : false;
	(check) ? form.classList.add('focus') : form.classList.remove('focus');;
}
function preventDefaultButtons() {
	let buttons = document.querySelectorAll('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = (event) => {
			event.preventDefault();
		};
	}
}
function listClassToggle(list, className) {
	let childList = [], child, items = list.childNodes;
	for (let i = 0; i < items.length; i++) {
		if (items[i].tagName) childList.push(items[i]);
	}
	for (let j = 0; j < childList.length; j++) {
		child = childList[j];
		child.onclick = function () {
			if (!this.classList.contains(className)) {
				for (let p = 0; p < childList.length; p++) {
					childList[p].classList.remove(className)
				}
				this.classList.add(className)
			}
		}
	}
}