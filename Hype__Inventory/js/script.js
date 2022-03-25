var Inventory = new Vue({
	el: '#app',
	data: {
		//Отображение элементов
		//Общее отображение
		active: true,
		//Отображение окружения
		environment: false,
		//Отображение обмена
		exchange: false,
		//Отображение модификаций
		modification: true,
		//Отображение багажника
		trunk: false,
		//Отображение контекстного меню
		context: false,
		//Отображение информации о предмете
		itemInfo: false,
		//Отображение меню "Разделить"
		divide: false,
		//Максимальное количество разделяемых предметов
		divideMax: 200,
		//Отображаемое количество предметов для разделения.
		//Начальное значение любое, которое нужно выводить при появлении этого меню.
		divideValue: 50,

		//Время активации отображения информации при наведении на предмет
		itemInfoTimeActivation: 0.5,



		thirstPercent: 86,
		hungryPercent: 92,

		//Мои ник и сумма
		nickname: 'Legenda_rus',
		amount: 26000000,
		//Ник и сумма оппонента при обмене
		opponentNickname: 'Ivan_Petrov',
		opponentAmount: 1000000,

		//Оставил массив всех предметов для отображения описания предмета при наведении.
		//В нем ищется предмет по id, на который наведён курсор, а потом методом changeInfoItem() информация
		//о предмете записывается в переменную itemInfoItem для отображения в окне информации.
		//Больше ни для чего этот массив здесь не нужен.
		//Думаю, получится реализовать отображение как это сделано у вас.
		allItems: [
			{
				'id': '1',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'class': 'medium',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это синий калаш.',
			},
			{
				'id': '2',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'class': 'ordinary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это серый калаш.',
			},
			{
				'id': '3',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'class': 'low',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это зеленый калаш.',
			},
			{
				'id': '4',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'class': 'epic',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это фиолетовый калаш.',
			},
			{
				'id': '5',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'class': 'legendary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это желтый калаш.',
			},
			{
				'id': '6',
				'name': 'Яд',
				'weight': 0.6,
				'amount': 200,
				'img': 'img/items/poison.png',
				'width': 2,
				'height': 2,
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Выпей яду',
			},
			{
				'id': '7',
				'name': 'WTF',
				'weight': 0.4,
				'amount': 5,
				'img': 'img/items/idk-wtf.png',
				'width': 1,
				'height': 1,
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Хз, что это. Но лучше не пить.',
			},
			{
				'id': '8',
				'name': 'Backpack',
				'weight': 1.2,
				'amount': 1,
				'img': 'img/items/backpack.png',
				'width': 2,
				'height': 2,
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Я рюкзак, я рюкзак!',
			},
			{
				'id': '9',
				'name': 'Яд',
				'weight': 0.6,
				'amount': 200,
				'img': 'img/items/poison.png',
				'width': 1,
				'height': 1,
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Выпей яду',
			},
		],
		itemInfoItem: '',

		//Если ли сумка
		bagShow: true,

		//Отображение готовности обмена
		exchangeReady: false,
		exchangeOpponentReady: true,

		//Нажатие на предмете
		mousedown: false,
		//Наведение на предмет
		mouseover: false,

		//Максимальная масса. Можно убрать и использовать свою.
		maxWeight: 30,



		itemsInventory: [
			{
				id: '1',
				name: 'АК 74',
				weight: 12.1,
				amount: 200,
				img: 'img/items/AK 74.png',
				width: 4,
				height: 2,
				slot_id: '20',
				class: 'medium',
				serialNumber: 'KFDF-0023-FDS5',
				description: 'Это синий калаш.',
			},
			{
				id: '7',
				name: 'WTF',
				weight: 0.4,
				amount: 5,
				img: 'img/items/idk-wtf.png',
				width: 1,
				height: 1,
				slot_id: '1',
				fast_slot_id: '1',
				serialNumber: 'KFDF-0023-FDS5',
				description: 'Хз, что это. Но лучше не пить.',
			},
		],
		itemsInventorySlots: {},

		itemsBug: [
			{
				'id': '1',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '3',
				'class': 'medium',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это синий калаш.',
			},
			{
				'id': '2',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '17',
				'class': 'ordinary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это серый калаш.',
			},
		],
		itemsBugSlots: {},

		itemsOpponent: [
			{
				'id': '1',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '3',
				'class': 'medium',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это синий калаш.',
			},
			{
				'id': '2',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '18',
				'class': 'ordinary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это серый калаш.',
			},
		],
		itemsOpponentSlots: {},

		itemsProponent: [
			{
				'id': '1',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '3',
				'class': 'medium',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это синий калаш.',
			},
			{
				'id': '2',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '18',
				'class': 'ordinary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это серый калаш.',
			},
		],
		itemsProponentSlots: {},

		itemsTrunk: [
			{
				'id': '1',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '3',
				'class': 'medium',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это синий калаш.',
			},
			{
				'id': '2',
				'name': 'АК 74',
				'weight': 12.1,
				'amount': 200,
				'img': 'img/items/AK 74.png',
				'width': 4,
				'height': 2,
				'slot_id': '21',
				'class': 'ordinary',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Это серый калаш.',
			},
			{
				'id': '8',
				'name': 'Рюкзак',
				'weight': 1.2,
				'amount': 1,
				'img': 'img/items/backpack.png',
				'width': 2,
				'height': 2,
				'slot_id': '34',
				'serialNumber': 'KFDF-0023-FDS5',
				'description': 'Я рюкзак, я рюкзак!',
			},
		],
		itemsTrunkSlots: {},

		itemsEnvironment: [
			{
				id: '1',
				name: 'АК 74',
				weight: 12.1,
				amount: 200,
				img: 'img/items/AK 74.png',
				width: 4,
				height: 2,
				slot_id: '3',
				class: 'medium',
				serialNumber: 'KFDF-0023-FDS5',
				description: 'Это синий калаш.',
			},
			{
				id: '2',
				name: 'АК 74',
				weight: 12.1,
				amount: 200,
				img: 'img/items/AK 74.png',
				width: 4,
				height: 2,
				slot_id: '21',
				class: 'ordinary',
				serialNumber: 'KFDF-0023-FDS5',
				description: 'Это серый калаш.',
			},
		],
		itemsEnvironmentSlots: {},

		fastSlotsInventory: {
			1: {
				isEmpty: true,
				item: {},
			},
			2: {
				isEmpty: true,
				item: {},
			},
			3: {
				isEmpty: true,
				item: {},
			},
			4: {
				isEmpty: true,
				item: {},
			},
		},

		characterSlotsInventory: {
			1: {
				slotId: 1,
				title: "ШАПКА",
				type: "Hat",
				item: {},
				img: "img/icon__hat.svg",
				isEmpty: true,
			},
			2: {
				slotId: 2,
				title: "МАСКА",
				type: "Mask",
				item: {},
				img: "img/icon__mask.svg",
				isEmpty: true,
			},
			3: {
				slotId: 3,
				title: "ОЧКИ",
				type: "Glasses",
				item: {},
				img: "img/icon__glasses.svg",
				isEmpty: true,
			},
			4: {
				slotId: 4,
				title: "ВЕРХ-ОДЕЖ",
				type: "Top",
				item: {},
				img: "img/icon__jacket.svg",
				isEmpty: true,
			},
			5: {
				slotId: 5,
				title: "БРОНЬ",
				type: "BodyArmor",
				item: {},
				img: "img/icon__jacket-life.svg",
				isEmpty: true,
			},
			6: {
				slotId: 6,
				title: "БРАСЛЕТЫ",
				type: "Braclets",
				item: {},
				img: "img/icon__bracelet.svg",
				isEmpty: true,
			},
			7: {
				slotId: 7,
				title: "МАЙКА",
				type: "Undershirt",
				item: {},
				img: "img/icon__t-shirt.svg",
				isEmpty: true,
			},
			8: {
				slotId: 8,
				title: "ПЕРЧАТКИ",
				type: "Gloves",
				item: {},
				img: "img/icon__gloves.svg",
				isEmpty: true,
			},
			9: {
				slotId: 9,
				title: "ЧАСЫ",
				type: "Jewelry",
				item: {},
				img: "img/icon__watch.svg",
				isEmpty: true,
			},
			10: {
				slotId: 10,
				title: "ШТАНЫ",
				type: "Leg",
				item: {},
				img: "img/icon__trousers.svg",
				isEmpty: true,
			},
			11: {
				slotId: 11,
				title: "ОБУВЬ",
				type: "Feet",
				item: {},
				img: "img/icon__shoes.svg",
				isEmpty: true,
			},
			12: {
				slotId: 12,
				title: "СУМКА",
				type: "Bag",
				item: {
					'id': '8',
					'name': 'Рюкзак',
					'weight': 1.2,
					'amount': 1,
					'img': 'img/items/backpack.png',
					'width': 2,
					'height': 2,
					'slot_id': '31',
					'serialNumber': 'KFDF-0023-FDS5',
					'description': 'Я рюкзак, я рюкзак!',
				},
				img: "img/icon__backpack.svg",
				isEmpty: false,
			},
		},

		itemsModifySlots: {
			1: {
				slotId: 1,
				type: "Clip",
				title: "Магазин",
				item: {
					'id': '7',
					'name': 'WTF',
					'weight': 0.4,
					'amount': 5,
					'img': 'img/items/idk-wtf.png',
					'width': 1,
					'height': 1,
					'slot_id': '1',
					'fast_slot_id': '1',
					'serialNumber': 'KFDF-0023-FDS5',
					'description': 'Хз, что это. Но лучше не пить.',
				},
				img: "src/assets/img/weapon/clip.png",
				isEmpty: false,
				isDroppable: true,
			},
			2: {
				slotId: 2,
				title: "Фонарик",
				type: "Flashlight",
				item: {},
				img: "src/assets/img/weapon/flashlight.png",
				isEmpty: true,
				isDroppable: true,
			},
			3: {
				slotId: 3,
				title: "Прицел",
				type: "Scope",
				item: {
					'id': '7',
					'name': 'WTF',
					'weight': 0.4,
					'amount': 5,
					'img': 'img/items/idk-wtf.png',
					'width': 1,
					'height': 1,
					'slot_id': '1',
					'fast_slot_id': '1',
					'serialNumber': 'KFDF-0023-FDS5',
					'description': 'Хз, что это. Но лучше не пить.',
				},
				img: "src/assets/img/weapon/scope.png",
				isEmpty: false,
				isDroppable: true,
			},
			4: {
				slotId: 4,
				title: "Глушитель",
				type: "Suppressor",
				item: {},
				img: "src/assets/img/weapon/suppressor.png",
				isEmpty: true,
				isDroppable: true,
			},
			5: {
				slotId: 5,
				title: "Текстура",
				type: "Texture",
				item: {},
				img: "src/assets/img/weapon/texture.png",
				isEmpty: true,
				isDroppable: true,
			},
			6: {
				slotId: 6,
				title: "",
				type: "",
				item: {},
				img: "",
				isEmpty: true,
				isFuture: true,
			},
			7: {
				slotId: 7,
				title: "",
				type: "",
				item: {},
				img: "",
				isEmpty: true,
				isFuture: true,
			},
			8: {
				slotId: 8,
				title: "",
				type: "",
				item: {},
				img: "",
				isEmpty: true,
				isFuture: true,
			},
		},


		modifyItemActive: {
			'id': '1',
			'name': 'АК 74',
			'weight': 12.1,
			'amount': 200,
			'img': 'img/items/AK 74.png',
			'width': 4,
			'height': 2,
			'class': 'medium',
			'serialNumber': 'KFDF-0023-FDS5',
			'description': 'Это синий калаш.',
		},

		INVENTORY_COUNT_ITEMS_IN_ROW: 8,
		INVENTORY_COUNT_CELLS: 136,

		BUG_COUNT_ITEMS_IN_ROW: 8,
		BUG_COUNT_CELLS: 128,

		EXCHANGE_COUNT_ITEMS_IN_ROW: 8,
		EXCHANGE_COUNT_CELLS: 72,

		TRUNK_COUNT_ITEMS_IN_ROW: 8,
		TRUNK_COUNT_CELLS: 216,

		ENVIRONMENT_COUNT_ITEMS_IN_ROW: 8,
		ENVIRONMENT_COUNT_CELLS: 216,

		BORDER_WIDTH: +window.getComputedStyle(document.querySelector('.block')).borderWidth.slice(0, -2),
		BLOCK_WIDTH: +window.getComputedStyle(document.querySelector('.block')).width.slice(0, -2),
	},
	methods: {
		json() {
			this.amount = this.addChars(this.amount, '.', 3)
			this.opponentAmount = this.addChars(this.opponentAmount, '.', 3)
		},

		//Навешиваются слушатели на все перетаскиваемые вещи
		draggableElementsListeners() {
			//Перебор всех вещей на странице
			document.querySelectorAll('.draggable').forEach(el => {
				//Появление окна "Выбросить"
				el.onmousedown = (e) => {
					if (e.which == 1 && !e.currentTarget.closest('.environment')) {
						this.mousedown = true
					}
					//Запуск анимации при любом клике на предмет
					this.clickAnimation(e)
				}
				//Появление контекстного меню на ПКМ
				el.oncontextmenu = (e) => {
					//Проигрывание звука клика
					this.audio.play()
					//Закрытие окна информации о вещи
					document.querySelector('.item-info').classList.add('hide')
					let menu = document.querySelector('.context-menu');
					if (this.context) {
						this.context = false
						//Таймаут нужен для плавных пропадания и появления контекстного меню
						setTimeout(() => {
							//Сюда можно вставить метод, который будет отрисовывать список пунктов в меню
							menu.style.left = e.pageX + 'px'
							menu.style.top = e.pageY + 'px'
							this.context = true
						}, 100);
						return false
					}

					if (e.pageX + +window.getComputedStyle(document.querySelector('.context-menu')).width.slice(0, -2) > document.body.clientWidth) {
						menu.style.left = e.pageX - +window.getComputedStyle(document.querySelector('.context-menu')).width.slice(0, -2) + 'px'
					} else {
						menu.style.left = e.pageX + 'px'
					}

					if (e.pageY + +window.getComputedStyle(document.querySelector('.context-menu')).height.slice(0, -2) > document.body.clientHeight) {
						menu.style.top = e.pageY - +window.getComputedStyle(document.querySelector('.context-menu')).height.slice(0, -2) + 'px'
					} else {
						menu.style.top = e.pageY + 'px'
					}
					this.context = true
				}
				//На каждую вещь навешивается метод, регулирующий отображение информации о вещах
				this.itemInfoFunc(el)
			})
			//Для пропадания контекстного меню при следующем клике ЛКМ после открытия меню
			document.onclick = (e) => {
				this.context = false
			}
			//Для пропадания окна "Выбросить" при отжатии ЛКМ
			document.onmouseup = () => {
				this.mousedown = false
			}
		},

		//Анимация при клике
		clickAnimation(e) {
			let click = document.querySelector('.click')
			if (click) {
				click.remove()
			}
			let animBlock = document.createElement('div'),
				before = document.createElement('div'),
				after = document.createElement('div'),
				appContainer = document.querySelector('#app .app__container');

			animBlock.className = 'click'
			animBlock.style.top = e.pageY + 'px'
			animBlock.style.left = e.pageX + 'px'

			before.className = 'before'
			after.className = 'after'
			animBlock.appendChild(before)
			animBlock.appendChild(after)
			appContainer.appendChild(animBlock)
			click = document.querySelector('.click')

			setTimeout(() => {
				click.classList.add('active')
			}, 5);

			setTimeout(() => {
				click.remove()
			}, 800);

		},

		//Метод, регулирующий отображение информации о вещах
		itemInfoFunc(el) {
			let startTime, animationTime = this.itemInfoTimeActivation, hovered, hoveredItem,
				itemInfo = document.querySelector('.item-info');

			//Инициализация "таймера" для отложенного отображения информации
			const timer = () => {
				startTime = startTime || Date.now()
				let endTime = Date.now();
				if (endTime - startTime < animationTime * 1000) {
					requestAnimationFrame(timer)
				} else {
					if (hovered) {
						this.changeInfoItem(hoveredItem.dataset.id)
						itemInfo.classList.remove('hide');
					}
				}
			}

			//При движении курсора над предметом запускает отрисовку информации о нем
			el.onmousemove = function (e) {
				startTime = Date.now()
				hovered = true
				hoveredItem = e.currentTarget

				itemInfo.classList.add('hide');
				if (itemInfo.classList.contains('hide')) {
					itemInfo.style.left = e.pageX + 20 + 'px'
					itemInfo.style.top = e.pageY + 1 + 'px'
				}
				requestAnimationFrame(timer)
				lastPosX = e.pageX, lastPosY = e.pageY;
			}
			//При отведения курсора от предмета скрывает информацию
			el.onmouseout = function (e) {
				cancelAnimationFrame(timer)
				hovered = false
			}
		},

		//Метод, отвечающий за "покраснение" окна "Выбросить"
		throwActivation() {
			document.querySelector('.throw').onmouseover = () => {
				this.mouseover = true
			}
			document.querySelector('.throw').onmouseout = () => {
				this.mouseover = false
			}
		},

		//Прогрессбары. Изменил работу их отрисовки,
		//теперь передавать нужно:
		//класс, по которому обращаешься к прогрессбару,
		//значение массы в процентах
		//(см. строки 974 и 975)
		progressBars(cl, weightPercent) {
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

				var svg = d3.selectAll(cl).append("svg")
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
					d.val = timeLimit * weightPercent / 100;
					j++;
				});

				setTimeout(() => {
					path.transition()
						.duration(animTime)
						.attrTween("d", arcTween);
				}, 700);


				j = 0;
				function arcTween(b) {
					b.value = b.val;
					var i = d3.interpolate({ value: b.previous }, b);
					j++
					return function (t) {
						return arc(i(t))
					};
				}
			}, 200);

		},

		//Обработчики для ввода в разделе "Обмен"
		exchanheInput() {
			let input = document.querySelector('.confirm__amount'),
				button = document.querySelector('.confirm__button');
			input.onkeypress = (event) => {
				event = event || window.event;
				if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
					return false;
			}
			input.onfocus = function () {
				this.classList.add('focus')
			}
			input.onblur = function () {
				if (this.value == '') {
					this.classList.remove('focus')
				}
			}
			button.onclick = (e) => {
				e.preventDefault()
			}

		},

		//Обработчики для ввода в разделе "Раздел"
		divideFunc() {
			let range = document.querySelector('.divide__range.range'),
				rangeInput = range.querySelector('.range__input'),
				input = document.querySelector('.divide__input input'),
				sliderFill = range.querySelector('[class*=fill]'),
				sliderThumb = range.querySelector('[class*=thumb]');

			input.value = this.divideValue + 'шт.'

			input.onfocus = function () {
				this.classList.add('focus')
			}
			input.onblur = function () {
				if (this.value == '') {
					this.classList.remove('focus')
				}
			}
			input.onclick = () => {
				input.setSelectionRange(`${this.divideValue}шт.`.length - 3, `${this.divideValue}шт.`.length - 3)
			}
			input.onkeydown = (e) => {
				if ((!/\d/.test(e.key) && e.keyCode != 8) || /F\d/.test(e.key)) {
					return false
				}

				e.preventDefault()

				if (e.keyCode == 8) {
					this.divideValue = this.divideValue.slice(0, -1)
				} else {
					if (this.divideValue == 0) {
						this.divideValue = e.key
					} else {
						this.divideValue = this.divideValue + e.key
					}
				}

				if (+this.divideValue > +this.divideMax) {
					this.divideValue = this.divideMax.toString()
				}

				if (this.divideValue == '') {
					this.divideValue = '0'
					input.value = ''
				} else {
					input.value = this.divideValue + 'шт.'
				}

				input.setSelectionRange(`${this.divideValue}шт.`.length - 3, `${this.divideValue}шт.`.length - 3)
				rangeInput.value = this.divideValue
				rangeUpdate()

			}

			rangeInput.value = this.divideValue
			rangeUpdate()
			rangeInput.oninput = () => {
				this.divideValue = rangeInput.value
				input.value = this.divideValue + 'шт.'
				input.classList.add('focus')
				if (this.divideValue == '0') {
					input.value = ''
					input.classList.remove('focus')
				}
				rangeUpdate()
			}
			function rangeUpdate() {
				sliderFill.style.width = rangeInput.value / rangeInput.max * 100 + '%';
				sliderThumb.style.left = rangeInput.value / rangeInput.max * 100 + '%';
			}
		},

		//Был нужен для отображения информации при наведении на вещь.
		//Принимает id вещи, находит вещь с этим id в массиве всех вещей и присваивает itemInfoItem этому предмету
		changeInfoItem(id) {
			for (let i = 0; i < this.allItems.length; i++) {
				if (+id == +this.allItems[i].id) {
					this.itemInfoItem = this.allItems[i]
					return
				}
			}
		},

		//Добавляет в строку str символ char каждые div символов с конца
		//addChars('123456789', ',', 2) --> 1,23,45,67,89
		addChars(str, char, div) {
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
		},

		//Инициализация звука нажания кнопок мыши на вещах
		audioActivation() {
			this.audio = new Audio('audio/click2.mp3')
			this.audio.preload = 'auto'
			this.audio.volume = 0.5
		},

		//Добавил для проверки вывода пунктов контекстного меню через v-for.
		//Работает нормально, поэтому можно вставить обработчик полей
		//и на выходе возвращать массив объектов по типу возврщаемого сейчас
		renderContextMenu() {
			return arr = [
				{
					title: "Применить",
					action: "actionUse",
				},
				{
					title: "Разделить",
					action: "actionDivide",
				},
				{
					title: "Модификация",
					action: "actionModification",
				},
			];
		},

		//Взято из исходных файлов
		initCommonSlots(arr, obj, countCells, step) {
			for (let i = 1; i <= countCells; i++) {
				obj[i] = {
					isEmpty: true,
					item: undefined,
				};
			}

			arr.forEach((item) => {
				if (item.slot_id) {
					//1. Помещаем item в ячейку
					obj[item.slot_id] = {
						isEmpty: false,
						item: item,
					};

					//2. Закрашиваем площадь предмета
					let arrFilled = [];
					let slotId = +item.slot_id;
					if (item.height && item.width && (item.height > 1 || item.width > 1)) {
						for (let i = 0; i < item.height; i++) {
							for (let j = 0; j < item.width; j++) {
								let fillId = slotId + j + step * i;
								arrFilled.push(fillId);
							}
						}
					}

					arrFilled.forEach((fillId) => {
						obj[fillId].isEmpty = false;
						obj[fillId].slotId = item.slot_id;
					});
				}
			});

		},
		initFastSlots() {
			this.itemsInventory.forEach((item) => {
				if (item.fast_slot_id) {
					let slotId = item.fast_slot_id;
					this.fastSlotsInventory[slotId].isEmpty = false;
					this.fastSlotsInventory[slotId].item = item;
				}
			});
		},
	},
	computed: {
		//Был нужен для рассчета общей массы вещей в инвентаре. Думаю. можно убрать
		inventoryWeight: function () {
			let sum = 0;
			this.itemsInventory.forEach(el => {
				sum = sum + el.weight
			});
			return Math.round(sum * 10) / 10
		},
		trunkWeight: function () {
			let sum = 0;
			this.itemsTrunk.forEach(el => {
				sum = sum + el.weight
			});
			return Math.round(sum * 10) / 10
		},

		//Расчет размера одного rem в px. Нужен для правильной отрисовки вещей.
		// Можно засунуть куда-нибудь перед инициализацией массивов с вещами
		fontSize: function () {
			let str = window.getComputedStyle(document.querySelector('html')).fontSize
			return +str.substring(0, str.length - 2)
		}
	},
	mounted() {
		this.json()

		//Инициализация всех вещей. У вас все эти пункты должны быть, но лучше проверить
		//Инициализация вещей в инвентаре
		this.initCommonSlots(
			this.itemsInventory,
			this.itemsInventorySlots,
			this.INVENTORY_COUNT_CELLS,
			this.INVENTORY_COUNT_ITEMS_IN_ROW
		);
		//Инициализация вещей в сумке
		this.initCommonSlots(
			this.itemsBug,
			this.itemsBugSlots,
			this.BUG_COUNT_CELLS,
			this.BUG_COUNT_ITEMS_IN_ROW
		);
		//Инициализация вещей у оппонента при обмене
		this.initCommonSlots(
			this.itemsProponent,
			this.itemsProponentSlots,
			this.EXCHANGE_COUNT_CELLS,
			this.EXCHANGE_COUNT_ITEMS_IN_ROW
		);
		//Инициализация вещей у себя при обмене
		this.initCommonSlots(
			this.itemsOpponent,
			this.itemsOpponentSlots,
			this.EXCHANGE_COUNT_CELLS,
			this.EXCHANGE_COUNT_ITEMS_IN_ROW
		);
		//Инициализация вещей в багажнике
		this.initCommonSlots(
			this.itemsTrunk,
			this.itemsTrunkSlots,
			this.TRUNK_COUNT_CELLS,
			this.TRUNK_COUNT_ITEMS_IN_ROW
		);
		//Инициализация вещей в окружении
		this.initCommonSlots(
			this.itemsEnvironment,
			this.itemsEnvironmentSlots,
			this.ENVIRONMENT_COUNT_CELLS,
			this.ENVIRONMENT_COUNT_ITEMS_IN_ROW
		);
		this.initFastSlots()

		this.throwActivation()
		this.progressBars('.inventory-bag .roll', this.inventoryWeight / this.maxWeight * 100)
		this.progressBars('.trunk .roll', this.trunkWeight / this.maxWeight * 100)
		this.exchanheInput()
		this.divideFunc()
		this.audioActivation()

		//Добавлен таймаут для того, чтобы успевали отрисовываться вещи
		// Думаю, сам таймаут можно убрать
		setTimeout(() => {
			this.draggableElementsListeners()
			// this.itemInfoFunc()

			//Для того, чтобы фото не 'перетаскивались'. Можно убрать
			document.querySelectorAll('img').forEach(el => {
				el.ondragstart = () => {
					return false
				}
			})
		}, 10);
	}
});