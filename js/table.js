const app = Vue.createApp({
	data() {
		return {
			active: 0,
			iconBefore: false,
			disabled: false,
			density: 'regular',
			rowStyle: false,
			borderStyle: '',
			fixedHeader: '',
			components: [
				{
					label: 'Table',
					variant: 'Table',
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
		},

		rowStyleComputed() {
			if (this.rowStyle) return 'zebra';
			return '';
		}
	}
});
