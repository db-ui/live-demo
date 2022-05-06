app.component('component-navigation', {
	props: ['components', 'label'],
	data() {
		return {
			count: 0,
			active: 0
		};
	},
	computed: {
		computedLabel() {
			if (this.label) return this.label;
			return 'Variante auswählen';
		}
	},
	template: `
    <nav v-if="components.length > 1">
    <select class="elm-select " name="variantSelection" id="variantSelection" required data-variant="semitransparent" @change="$emit('setActive',active)" v-model="active">
        <option v-for="(entry, index) in components" :value="index" :selected="{ true : active==index }">{{entry.label}}</option>
    </select>
    <label class="elm-label" for="variantSelection">{{computedLabel}}</label>
    </nav>`
});
