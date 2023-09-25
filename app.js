import foodData from "./food.json" assert { type: "json" };

const tableData = document.querySelector("tbody");
const sideBar = document.getElementById("sideBar");

let firstLoad = true; 
window.onload = function () {
    loadData(foodData);
    firstLoad = false; 
};

const loadData = (data) => {
	let sr = 1;
    if (!firstLoad){
        menuCollapse()
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
	return data;
};

const listFood = (data) => {
	if (!data) {
		loadData(foodData);
	} else {
		loadData(foodData.filter((item) => item.category === data));
	}
};
const sortCalorie = (data) => {
	if (!data) {
		loadData(foodData);
	} else if (data === "desc") {
		loadData(foodData.filter((item) => item.calorie > 100));
	} else {
		loadData(foodData.filter((item) => item.calorie < 100));
	}
};

const sort = (data) => {
	if (!data) {
		loadData(foodData);
	} else if (data === "protein") {
		loadData(foodData.sort((a, b) => b.protiens - a.protiens));
	} else if (data === "cab") {
		loadData(foodData.sort((a, b) => a.cab - b.cab));
	}
};

// Menu

const menuBar = document.getElementById("menuBar");

const menuCollapse = () => {
	if(window.innerWidth === '1000px'){
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
