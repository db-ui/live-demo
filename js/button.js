const app = Vue.createApp({
	data() {
		return {
			active: 0,
			icon: true,
			iconPosition: 'none',
			size: 'regular',
			disabled: false,
			optionsClosed: false,
			components: [
				{
					label: 'brand primary',
					variant: 'brand-primary',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'primary',
					variant: 'primary',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'secondary outline',
					variant: 'secondary-outline',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'secondary solid',
					variant: 'secondary-solid',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'tertiary plain',
					variant: 'tertiary-plain',
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
