class Toggle {
	static init() {
		const toggleList = document.querySelectorAll(
			"[data-toggle]"
		);

		toggleList.forEach(element => {
			const toggleType = element.dataset.toggle;

			if(toggleType) {
				element.toggleElement = document.querySelector(toggleType)
			}
			else {
				element.toggleElement = element.nextElementSibling;
			}

			element.addEventListener("click", this.clickEvent);
		});
	}

	static clickEvent(e) {
		this.classList.toggle("toggle");
		if(this.classList.contains("toggle")) {
			this.toggleElement.classList.add("toggle");
			this.parentElement.classList.add("toggle-parent");
		}
		else {
			this.toggleElement.classList.remove("toggle");
			this.parentElement.classList.remove("toggle-parent");
		}

	}
}

export default Toggle;