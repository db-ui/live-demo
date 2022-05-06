const app = Vue.createApp({
	data() {
		return {
			active: 0,
			size: 'regular',
			displayLabel: 'true',
			disabled: false,
			indeterminate: false,
			optionsClosed: false,
			components: [
				{
					label: 'Checkbox',
					variant: 'checkbox',
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
