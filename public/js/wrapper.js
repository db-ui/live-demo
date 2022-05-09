const app = Vue.createApp({
	data() {
		return {
			active: 0,
			iconBefore: false,
			iconAfter: false,
			optionsClosed: false,
			disabled: false,
			activeComponent: {
				label: 'Button',
				name: 'button'
			},
			components: [
				{
					label: 'Data Input',
					groupedComponents: [
						{
							label: 'Button',
							name: 'button'
						},
						{
							label: 'Checkbox',
							name: 'checkbox'
						},
						{
							label: 'Chips',
							name: 'chips'
						},
						{
							label: 'Radio Button',
							name: 'radiobutton'
						},
						{
							label: 'Select Field',
							name: 'select'
						},
						{
							label: 'Textfield',
							name: 'textfield'
						},
						{
							label: 'Toggle',
							name: 'toggle'
						}
					]
				},
				{
					label: 'Data Display',
					groupedComponents: [
						{
							label: 'Accordion',
							name: 'accordion'
						},
						{
							label: 'Table',
							name: 'table'
						},
						{
							label: 'Tags',
							name: 'tags'
						}
					]
				},
				{
					label: 'Utility',
					groupedComponents: [
						{
							label: 'Breadcrumbs',
							name: 'breadcrumb'
						},
						{
							label: 'Dialog',
							name: 'dialog'
						},
						{
							label: 'Link',
							name: 'link'
						},
						{
							label: 'Notifications',
							name: 'notifications'
						},
						{
							label: 'Overflow Menu',
							name: 'overflowmenu'
						},
						{
							label: 'Pagination',
							name: 'pagination'
						},
						{
							label: 'Progress',
							name: 'progress'
						}
					]
				},
				{
					label: 'Layout',
					groupedComponents: []
				}
			]
		};
	},
	methods: {},
	computed: {
		computedLink() {
			return './' + this.activeComponent.name + '.html';
		}
	}
});
