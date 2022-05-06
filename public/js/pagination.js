const app = Vue.createApp({
	data() {
		return {
			active: 0,
			alignment: 'default',
			pages: 20,
			activePage: 1,
			maxEntries: 7,
			components: [
				{
					label: 'Overflow Menu',
					variant: 'overflow',
					sketchlink: {
						default: '',
						icon: ''
					}
				}
			]
		};
	},
	methods: {
		addButton(number) {
			var returnObj = {
				label: number,
				value: number,
				active: false
			};

			if (this.activePage == number) returnObj.active = true;
			return returnObj;
		},
		addButtonDotted() {
			var tmp = {
				value: null,
				label: '...',
				active: false
			};
			return tmp;
		}
	},
	computed: {
		computedLink() {
			if (this.icon) return this.components[this.active].sketchlink.icon;
			return this.components[this.active].sketchlink.default;
		},
		paginationEntries() {
			var entries = [];

			if (this.pages <= 6) {
				for (i = 1; i <= this.pages; i++) {
					entries.push(addButton(i));
				}
			} else {
				// Always print first page button
				var firstPage = {
					value: 1,
					label: 1,
					active: false
				};
				if (this.activePage == firstPage.value) firstPage.active = true;
				entries.push(firstPage);

				// Print "..." only if this.activePage is > 3
				if (this.activePage > 3) entries.push(this.addButtonDotted());

				// special case where last page is selected...
				if (this.activePage == this.pages) {
					entries.push(this.addButton(this.activePage - 4));
					entries.push(this.addButton(this.activePage - 3));
					entries.push(this.addButton(this.activePage - 2));
				}

				if (
					this.activePage >= this.pages - 2 &&
					this.activePage != this.pages
				) {
					entries.push(this.addButton(this.activePage - 3));
				}
				if (
					this.activePage >= this.pages - 1 &&
					this.activePage != this.pages
				) {
					entries.push(this.addButton(this.activePage - 2));
				}

				// Print previous number button if this.activePage > 2
				if (this.activePage > 2) {
					entries.push(this.addButton(this.activePage - 1));
				}

				//Print current page number button as long as it not the first or last page
				if (this.activePage != 1 && this.activePage != this.pages) {
					entries.push(this.addButton(this.activePage));
				}

				//print next number button if this.activePage < lastPage - 1
				if (this.activePage < this.pages - 1 && this.activePage != 1) {
					for (var i = 1; i < 4; i++) {
						entries.push(this.addButton(this.activePage + i));
						if (entries.length == 5 || this.activePage + (i + 1) == this.pages)
							break;
					}
				}

				// special case where first page is selected...
				if (this.activePage == 1) {
					entries.push(this.addButton(this.activePage + 1));
					entries.push(this.addButton(this.activePage + 2));
					entries.push(this.addButton(this.activePage + 3));
					entries.push(this.addButton(this.activePage + 4));
				}

				//print "..." if this.activePage is < lastPage -2
				if (this.activePage < this.pages - 2)
					entries.push(this.addButtonDotted());

				//Always print last page button if there is more than 1 page
				var lastPage = {
					value: this.pages,
					label: this.pages,
					active: false
				};

				if (this.activePage == this.pages) lastPage.active = true;
				entries.push(lastPage);
			}
			return entries;
		}
	}
});
