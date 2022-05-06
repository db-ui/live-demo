const app = Vue.createApp({
	data() {
		return {
			active: 0,
			type: 0,
			optionsClosed: false,
			components: [
				{
					label: 'Progress',
					variant: '',
					sketchlink: {
						default: ''
					}
				}
			]
		};
	},
	methods: {},
	computed: {
		computedLink() {
			return this.components[this.active].sketchlink.default;
		},
		progressValues() {
			var val = {
				type: 'spinner',
				label: false,
				attrVal: 68,
				attrMax: 100
			};

			if (this.type == 0) {
				val.type = 'loader';
				val.label = 'true';
			}

			if (this.type == 2) {
				(val.attrVal = null), (val.attrMax = null);
			}
			return val;
		}
	}
});
