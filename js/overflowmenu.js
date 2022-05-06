const app = Vue.createApp({
	data() {
		return {
			active: 0,
			alignment: 'default',
			components: [
				{
					label: 'Overflow Menu',
					variant: 'overflow',
					sketchlink: {
						default: '',
						icon: ''
					}
				}
			]
		};
	},
	methods: {},
	computed: {
		computedLink() {
			if (this.icon) return this.components[this.active].sketchlink.icon;
			return this.components[this.active].sketchlink.default;
		}
	}
});
