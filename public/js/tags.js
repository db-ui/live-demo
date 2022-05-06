const app = Vue.createApp({
	data() {
		return {
			active: 0,
			tagConfiguration: 'small',
			optionsClosed: false,
			components: [
				{
					label: 'Default',
					displayLabel: 'Default',
					variant: 'default',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Informative',
					displayLabel: 'Informative',
					variant: 'informative',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Success',
					displayLabel: 'Success',
					variant: 'success',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Warning',
					displayLabel: 'Warning',
					variant: 'warning',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Error',
					displayLabel: 'Error',
					variant: 'error',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'Gleis',
					displayLabel: 'Gl. 10',
					variant: 'track',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Essen & Trinken',
					displayLabel: 'Essen & Trinken',
					variant: 'poi-essen-trinken',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Einkaufen',
					displayLabel: 'Einkaufen',
					variant: 'poi-einkaufen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Gesundheit',
					displayLabel: 'Gesundheit',
					variant: 'poi-gesundheit',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Kunst & Kultur',
					displayLabel: 'Kunst & Kultur',
					variant: 'poi-kunst-kultur',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Wissenswertes',
					displayLabel: 'Wissenswertes',
					variant: 'poi-wissenswertes',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Freizeit',
					displayLabel: 'Freizeit',
					variant: 'poi-freizeit',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Zivile & rel. Einrichtungen',
					displayLabel: 'Zivile & rel. Einrichtungen',
					variant: 'poi-zivile-rel-einrichtungen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Dienstleistungen',
					displayLabel: 'Dienstleistungen',
					variant: 'poi-dienstleistungen',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: DB Service Einrichtung',
					displayLabel: 'DB Service Einrichtung',
					variant: 'poi-db-services-einrichtung',
					sketchlink: {
						default: '',
						icon: ''
					}
				},
				{
					label: 'POI: Wegeleitung',
					displayLabel: 'Wegeleitung',
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
