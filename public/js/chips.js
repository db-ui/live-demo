const app = Vue.createApp({
	data() {
		return {
			active: 0,
			iconBefore: false,
			iconAfter: false,
			optionsClosed: false,
			disabled: false,
			components: [
				{
					label: 'Default',
					variant: 'default',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Informative',
					variant: 'informative',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Success',
					variant: 'success',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Warning',
					variant: 'warning',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Error',
					variant: 'error',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Essen & Trinken',
					variant: 'poi-essen-trinken',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Einkaufen',
					variant: 'poi-einkaufen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Gesundheit',
					variant: 'poi-gesundheit',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Kunst & Kultur',
					variant: 'poi-kunst-kultur',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Wissenswertes',
					variant: 'poi-wissenswertes',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Freizeit',
					variant: 'poi-freizeit',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Zivile & rel. Einrichtungen',
					variant: 'poi-zivile-rel-einrichtungen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Dienstleistungen',
					variant: 'poi-dienstleistungen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: DB Service Einrichtung',
					variant: 'poi-db-services-einrichtung',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Wegeleitung',
					variant: 'poi-wegeleitung',
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
