const app = Vue.createApp({
	data() {
		return {
			active: 0,
			activeElement: 0,
			displayLabel: 'true',
			state: 'default',
			components: [
				{
					label: 'Semitransparent (Default)',
					variant: 'semitransparent',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Weißer Hintergrund',
					variant: 'white',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Solid',
					variant: 'solid',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Outline',
					variant: 'outline',
					sketchlink: {
						default: '',
						icon: ''
					}
				}
			],
			elements: [
				{
					label: 'Textarea',
					variant: 'textarea',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Text Field',
					variant: 'input',
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
		showError() {
			if (this.state == 'error') return true;
			return false;
		},
		isDisabled() {
			if (this.state == 'disabled') return true;
			return false;
		},
		isReadonly() {
			if (this.state == 'readonly') return true;
			return false;
		}
	}
});
