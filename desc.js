let styleDesc = document.createElement('style'), div = document.createElement('div')
styleDesc.innerHTML = `
@font-face {
	font-family: 'Futura Regular';
	font-style: normal;
	font-weight: normal;
	src: local('Futura LT Regular'), url('/fonts/FuturaLT.woff') format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'Futura Bold';
	font-style: normal;
	font-weight: normal;
	src: local('Futura LT Bold'), url('/fonts/FuturaLT-Bold.woff') format('woff');
	font-display: swap;
}

@media (max-width: 650px) {
	#description.description, #description.description *:not(p, span, a) {
		font-size: calc(100vw/650);
	}
}
@media (min-width: 651px) {
	#description.description, #description.description *:not(p, span, a) {
		font-size: 1px;
	}
}

#description.description {
	position: fixed;
	top: 74em;
	left: 24em;
	width: auto;
	max-width: 90%;
	height: auto;
	z-index: 1000;
	box-sizing: border-box;
}
#description.description * {
	font-family: "Futura Regular" !important;
	color: #222222;
	box-sizing: border-box;
}
#description.description .description__button {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	top: 24em;
	left: 24em;
	background: rgba(68, 68, 68, .5);
	width: 60em;
	height: 40.8em;
	z-index: 2;
	border-radius: 12em;
	transition: all .1s ease;
	padding: 12em 4.8em;
	transition: all .3s ease;
}
#description.description .description__button div {
	border-radius: 50%;
	background: rgba(255, 255, 255, .5);
	width: 7.92em;
	height: 7.92em;
	transition: all .3s ease;
}
#description.description .description__button::before {
	content: "Информация";
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translate(-50%, -25%);
	color: #444444;
	opacity: 0;
	font-size: 22em;
}
#description.description .description__button.active::before {
	animation: opacityPulse 4s 1s ease;
}
#description.description .description__button::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 60%;
	width: 0;
	height: 0;
	border: 6em solid rgba(68, 68, 68, .5);
	border-left-color: transparent;
	border-bottom-color: transparent;
	transition: all .3s ease;
}
#description.description input:hover~.description__button {
	background: rgba(68, 68, 68, .8);
}
#description.description input:hover~.description__button::after {
	border: 6em solid rgba(68, 68, 68, .8);
	border-left-color: transparent;
	border-bottom-color: transparent;
}
#description.description input:hover~.description__button div {
	background: rgba(255, 255, 255, .8);
}
#description.description input {
	position: absolute;
	top: 24em;
	left: 24em;
	width: 60em;
	height: 40.8em;
	opacity: 0;
	z-index: 3;
	pointer-events: initial;
	cursor: pointer;
}
#description.description input:checked~.description__wrapper {
	opacity: 1;
	max-height: 100%;
	padding: 36em 60em 36em 110em;
	/*margin: 24em;*/
	visibility: visible;
	transition: opacity .2s ease, margin 0s, padding 0s, max-height .2s ease;
}
#description.description .description__wrapper {
	width: 100%;
	height: auto;
	visibility: hidden;
	max-height: 0;
	max-width: 1000em;
	opacity: 0;
	background-color: rgba(220, 220, 220, .95);
	transition: opacity .2s ease, margin 0s .2s, padding 0s .2s, max-height .2s ease .2s, visibility .3s ease;
	border-radius: 36em;
}
#description.description .description__title {
	font-family: "Futura Bold";
	text-decoration: underline;
	margin-bottom: 24em;
}
#description.description .description__title p {
	font-family: "Futura Bold";
	font-size: 40.8em;
}
#description.description .description__layout, .description__adaptive, .description__text, .description__customer {
	margin-bottom: 7.2em;
}
#description.description .description__layout p, #description.description .description__adaptive p, #description.description .description__text p, #description.description .description__customer p{
	font-size: 28.8em;
}
#description.description .description__layout p *, #description.description .description__adaptive p *, #description.description .description__text p *, #description.description .description__customer p *{
	font-size: 1em !important;
}
#description.description .description__layout .subtitle, .description__adaptive .subtitle, .description__text .subtitle, .description__customer .subtitle {
	font-weight: bold;
}
#description.description .description__body {
	width: 100%;
}

@keyframes opacityPulse {
	0% {
		opacity: 0;
	}
	17% {
		opacity: 1;
	}
	33% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	67% {
		opacity: 0.5;
	}
	84% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
						`
document.querySelector('head').append(styleDesc)

div.id = 'description'
div.className = 'description'
document.body.prepend(div)

Vue.component('des', {
	props: ['id'],
	data: function () {
	},
	template: `<div id="description" class="description" :data-id="id"></div>`
})

let int, desc;
int = setInterval(async () => {
	d = document.querySelector('#description')

	if (d) {
		d.innerHTML = `
			<input type="checkbox">
			<div class="description__button">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="description__wrapper">
				<div class="description__title">
					<p>{{example.name}}</p>
				</div>
				<div class="description__body">
					<div class="description__customer" v-if="example.client_id != 0">
						<p><span class="subtitle">Клиент</span>: <a :href="client.userlink" target="_blank">{{client.name}}</a></p>
					</div>
					<div class="description__layout" v-if="example.layout != 0">
						<p><span class="subtitle">Макет</span>: <span v-html="example.layout"></span></p>
					</div>
					<div class="description__adaptive" v-if="example.adaptive != 0">
						<p><span class="subtitle">Адаптив</span>: <span v-html="example.adaptive"></span></p>
					</div>
					<div class="description__text" v-if="example.description != 0">
						<p><span class="subtitle">Описание</span>: <span v-html="example.description"></span></p>
					</div>
				</div>
			</div>
		`;
		desc = new Vue({
			el: '#description',
			data: {
				client: '',
				example: '',
				id: '',
				reqURL: '/php/getData.php'
			},
			methods: {
				async json() {
					const examData = new FormData();
					examData.append("data_name", 'examples');
					const examReq = new Request(this.reqURL, {
						method: 'POST',
						body: examData
					});
					await fetch(examReq).then(r => {
						return r.json()
					}).then(examples => {
						for (let i = 0; i < examples.length; i++) {
							if (examples[i].href.includes(location.pathname.substr(10).slice(0, -1))) {
								this.example = examples[i]
								break
							}
						}
					})

					if (this.example) {
						const cliData = new FormData();
						cliData.append("data_name", 'clients');
						const cliReq = new Request(this.reqURL, {
							method: 'POST',
							body: cliData
						});
						await fetch(cliReq).then(r => {
							return r.json()
						}).then((clients) => {
							for (let i = 0; i < clients.length; i++) {
								if (clients[i].id == this.example.client_id) {
									this.client = clients[i]
									break
								}
							}
						})
					}
				},
				beforePulse() {
					this.$el.querySelector('.description__button').classList.add('active')
				}
			},
			mounted() {
				this.id = this.$el.dataset.id
				this.json()
				this.beforePulse()
			}
		})
		clearInterval(int)
	}
}, 10);