const app = Vue.createApp({
	data() {
		return {
			active: 0,
			level: 'default',
			optionsClosed: false,
			components: [
				{
					label: 'Breadcrumb',
					variant: '',
					sketchlink: {
						default: '',
					},
				},
			],
		};
	},
	methods: {},
	computed: {
		computedLink() {
			return this.components[this.active].sketchlink.default;
		},
	},
});
