const app = Vue.createApp({
	data() {
		return {
			active: 0,
			iconBefore: false,
			iconAfter: false,
			state: '',
			optionsClosed: false,
			components: [
				{
					label: 'In-Line',
					variant: 'alert',
					sketchlink: {
						default: '',
						icon: '',
					},
				},
				{
					label: 'Hovering',
					variant: 'hovering',
					sketchlink: {
						default: '',
						icon: '',
					},
				},
			],
		};
	},
	methods: {},
	computed: {
		computedLink() {
			if (this.icon) return this.components[this.active].sketchlink.icon;
			return this.components[this.active].sketchlink.default;
		},
	},
});
