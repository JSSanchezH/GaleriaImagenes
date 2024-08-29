document.addEventListener("DOMContentLoaded", function () {
	const gallery = document.getElementById("gallery")
	const items = Array.from(gallery.children)
	const itemsPerPage = 6
	let currentPage = 0

	function showPage(page) {
		const start = page * itemsPerPage
		const end = start + itemsPerPage
		items.forEach((item, index) => {
			item.style.display =
				index >= start && index < end ? "block" : "none"
		})
	}

	document
		.getElementById("prev-button")
		.addEventListener("click", function () {
			if (currentPage > 0) {
				currentPage--
				showPage(currentPage)
			} else {
				currentPage++
				showPage(currentPage)
			}
		})

	document
		.getElementById("next-button")
		.addEventListener("click", function () {
			if ((currentPage + 1) * itemsPerPage < items.length) {
				currentPage++
				showPage(currentPage)
			} else {
				currentPage--
				showPage(currentPage)
			}
		})

	showPage(currentPage)
})
