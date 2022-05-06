const app = Vue.createApp({
	data() {
		return {
			active: 0,
			size: 'small',
			optionsClosed: false,
			emphasisLevel: 'low',
			components: [
				{
					label: 'Default',
					displayLabel: 'Default',
					variant: 'default',
					sketchlink: {
						default: '',
						icon: ''
					}
				}
			]
		};
	},
	methods: {
		changeEmphasis: function (level) {
			this.emphasisLevel = level;
		}
	},
	computed: {
		computedLink() {
			if (this.icon) return this.components[this.active].sketchlink.icon;
			return this.components[this.active].sketchlink.default;
		}
	}
});
