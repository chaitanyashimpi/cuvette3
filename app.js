const tableData = document.querySelector("tbody");
const sideBar = document.getElementById("sideBar");

let firstLoad = true;
window.onload = function () {
	fetchData();
	firstLoad = false;
};

let foodData;

const fetchData = async () => {
	try {
		const response = await fetch("./food.json");
		foodData = await response.json();
		loadData(foodData);
	} catch (error) {
		console.error("Error loading data: ", error);
	}
};

const loadData = (data) => {
	let sr = 1;
	if (!firstLoad) {
		menuCollapse();
	}

	const content = data
		.map(
			(item) =>
				`
        <tr>
        <td>${sr++}</td>
        <td>${item.foodname}</td>
        <td>${item.calorie}</td>
        <td>${item.category}</td>
        <td>${item.protiens}</td>
        <td>${item.cab}</td>
        </tr>
    `
		)
		.join("");

	tableData.innerHTML = content;
};

const listFood = (data) => {
	if (!data) {
		loadData(foodData);
	} else {
		loadData(foodData.filter((item) => item.category === data));
	}
};

const sortCalorie = (data) => {
	const sortedData = foodData.slice();
	if (!data) {
		loadData(sortedData);
	} else if (data === "desc") {
		loadData(sortedData.filter((item) => item.calorie > 100));
	} else {
		loadData(sortedData.filter((item) => item.calorie < 100));
	}
};

const sort = (data) => {
	const sortedData = foodData.slice();
	if (!data) {
		loadData(sortedData);
	} else if (data === "protein") {
		loadData(sortedData.sort((a, b) => b.protiens - a.protiens));
	} else if (data === "cab") {
		loadData(sortedData.sort((a, b) => a.cab - b.cab));
	}
};

const menuBar = document.getElementById("menuBar");

const menuCollapse = () => {
	// Check if window width is less than or equal to 1000px
	if (window.innerWidth <= 1000) {
		console.log("Hello");
		if (sideBar.style.width === "300px") {
			sideBar.style.width = "0px";
		} else {
			sideBar.style.width = "300px";
		}
	}
};

window.loadData = loadData;
window.listFood = listFood;
window.sortCalorie = sortCalorie;
window.sort = sort;
window.menuCollapse = menuCollapse;
