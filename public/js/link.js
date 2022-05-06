const app = Vue.createApp({
	data() {
		return {
			active: 0,
			iconBefore: false,
			disabled: false,
			components: [
				{
					label: 'Link',
					variant: 'link',
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
