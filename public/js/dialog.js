const app = Vue.createApp({
	data() {
		return {
			active: 0,
			type: 0,
			optionsClosed: false,
			alignment: null,
			opened: false,
			components: [
				{
					label: 'Dialog',
					variant: '',
					sketchlink: {
						default: ''
					}
				}
			]
		};
	},
	methods: {
		toggleVisibility(event) {
			if (this.opened) {
				document.querySelector('#dialog01').close();
			} else {
				document.querySelector('#dialog01').showModal();
			}

			this.opened = !this.opened;
		}
	},
	computed: {
		computedLink() {
			return this.components[this.active].sketchlink.default;
		}
	}
});
