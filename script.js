const meals = {
	breakfast: [
		{
			name: "Jajecznica z pomidorami",
			price: 12,
			ingredients: ["jajka", "pomidory", "cebula", "olej"],
			recipe:
				"Podsmaż cebulę na oleju, dodaj pokrojone pomidory. Wbij jajka i smaż, mieszając.",
			image: "images/jajecznica.jpg",
		},
		{
			name: "Kanapki z awokado",
			price: 15,
			ingredients: ["chleb pełnoziarnisty", "awokado", "sól", "pieprz"],
			recipe:
				"Rozgnieć awokado, przypraw solą i pieprzem. Rozsmaruj na kromkach chleba.",
			image: "images/kanapka-avocado.jpg",
		},
		{
			name: "Omlet z szynką i serem",
			price: 18,
			ingredients: ["jajka", "szynka", "ser żółty", "masło"],
			recipe:
				"Ubite jajka wylej na patelnię z roztopionym masłem. Dodaj pokrojoną szynkę i ser, smaż na małym ogniu.",
			image: "images/omlet-z-serem.jpg",
		},
		{
			name: "Pancakes",
			price: 20,
			ingredients: ["mąka", "jajka", "mleko", "cukier"],
			recipe:
				"Wymieszaj składniki, smaż na patelni na złoty kolor. Podawaj z syropem klonowym.",
			image: "images/pancakes.jpg",
		},
		{
			name: "Tosty francuskie",
			price: 15,
			ingredients: ["chleb", "jajka", "mleko", "cukier", "masło"],
			recipe:
				"Chleb zanurz w mieszance jajka i mleka, smaż na maśle na złoty kolor. Posyp cukrem.",
			image: "images/tosty-francuskie.jpg",
		},
		{
			name: "Granola z jogurtem",
			price: 20,
			ingredients: ["granola", "jogurt naturalny", "owoc (np. banan, jagody)"],
			recipe: "Wymieszaj granolę z jogurtem i dodaj pokrojone owoce.",
			image: "images/granola-jogurt.jpg",
		},
		{
			name: "Smoothie bowl",
			price: 25,
			ingredients: ["banan", "jogurt", "owoce (np. jagody)", "muesli"],
			recipe:
				"Zblenduj banana z jogurtem, wlej do miski i posyp owocami oraz muesli.",
			image: "images/smoothie-bowl.jpg",
		},
		{
			name: "Jajka sadzone z szynką",
			price: 18,
			ingredients: ["jajka", "szynka", "masło", "pieprz"],
			recipe:
				"Smaż szynkę na maśle, dodaj jajka i smaż na średnim ogniu. Dopraw pieprzem.",
			image: "images/sadzone-z-szynka.jpg",
		},
		{
			name: "Bagietka z serkiem i łososiem",
			price: 25,
			ingredients: ["bagietka", "ser śmietankowy", "wędzony łosoś", "koperek"],
			recipe:
				"Posmaruj bagietkę serkiem, dodaj plastry łososia i posyp koperkiem.",
			image: "images/bagietka-ser.jpg",
		},
		{
			name: "Owsianka z owocami",
			price: 15,
			ingredients: [
				"płatki owsiane",
				"mleko",
				"owoc (np. jabłko, gruszka)",
				"miód",
			],
			recipe: "Gotuj płatki owsiane w mleku, dodaj pokrojone owoce i miód.",
			image: "images/owsianka-owoce.jpg",
		},
	],

	lunch: [
		{
			name: "Spaghetti Bolognese",
			price: 22,
			ingredients: [
				"makaron",
				"mięso mielone",
				"pomidory",
				"cebula",
				"czosnek",
			],
			recipe:
				"Usmaż mięso z cebulą i czosnkiem, dodaj pomidory. Gotuj sos, podawaj z makaronem.",
			image: "images/spaghetti.jpg",
		},
		{
			name: "Zupa pomidorowa",
			price: 30,
			ingredients: ["pomidory", "cebula", "czosnek", "bulion", "śmietana"],
			recipe:
				"Podsmaż cebulę i czosnek, dodaj pomidory i bulion. Gotuj do miękkości, zmiksuj, dodaj śmietanę.",
			image: "images/zupa-pomidorowa.jpg",
		},
		{
			name: "Kotlety mielone",
			price: 35,
			ingredients: [
				"mięso mielone",
				"bułka tarta",
				"jajko",
				"cebula",
				"przyprawy",
			],
			recipe:
				"Wymieszaj mięso z jajkiem, bułką tartą i cebulą. Formuj kotlety, smaż na patelni.",
			image: "images/kotlety-mielone.jpg",
		},
		{
			name: "Kurczak pieczony z warzywami",
			price: 40,
			ingredients: [
				"pierś z kurczaka",
				"ziemniaki",
				"marchew",
				"papryka",
				"oliwa z oliwek",
			],
			recipe:
				"Kurczaka i warzywa pokrój, wymieszaj z oliwą i przyprawami. Piecz w piekarniku przez 30 minut.",
		},
		{
			name: "Risotto z grzybami",
			price: 30,
			ingredients: ["ryż do risotto", "grzyby", "cebula", "bulion", "parmezan"],
			recipe:
				"Podsmaż cebulę, dodaj ryż i grzyby. Stopniowo dodawaj bulion, mieszając. Posyp parmezanem przed podaniem.",
		},
		{
			name: "Makaron z brokułami",
			price: 25,
			ingredients: [
				"makaron",
				"brokuły",
				"czosnek",
				"oliwa z oliwek",
				"parmezan",
			],
			recipe:
				"Ugotuj makaron i brokuły. Smaż czosnek na oliwie, wymieszaj z makaronem i brokułami, posyp parmezanem.",
		},
		{
			name: "Gulasz wieprzowy",
			price: 45,
			ingredients: [
				"mięso wieprzowe",
				"cebula",
				"papryka",
				"pomidory w puszce",
				"przyprawy",
			],
			recipe:
				"Podsmaż cebulę, dodaj mięso, paprykę i pomidory. Gotuj na wolnym ogniu aż mięso będzie miękkie.",
		},
		{
			name: "Ziemniaki pieczone z ziołami",
			price: 20,
			ingredients: ["ziemniaki", "oliwa z oliwek", "rozmaryn", "sól", "pieprz"],
			recipe:
				"Pokrój ziemniaki, wymieszaj z oliwą i ziołami. Piecz w piekarniku przez 40 minut.",
		},
		{
			name: "Sałatka z tuńczykiem",
			price: 25,
			ingredients: [
				"tuńczyk w puszce",
				"sałata",
				"pomidor",
				"ogórek",
				"oliwa z oliwek",
			],
			recipe:
				"Wymieszaj wszystkie składniki w misce, dodaj oliwę z oliwek i przypraw.",
		},
		{
			name: "Frittata z warzywami",
			price: 30,
			ingredients: ["jajka", "papryka", "cukinia", "cebula", "ser feta"],
			recipe:
				"Podsmaż warzywa, wlej jajka, dodaj ser feta. Piecz w piekarniku do ścięcia jajek.",
		},
	],

	dinner: [
		{
			name: "Tarta z warzywami",
			price: 40,
			ingredients: [
				"ciasto francuskie",
				"warzywa (np. brokuły, papryka)",
				"ser żółty",
				"jajko",
				"śmietana",
			],
			recipe:
				"Rozłóż ciasto w formie, dodaj warzywa, ser, jajko i śmietanę. Piecz przez 25 minut.",
			image: "images/tarta-z-warzywami.jpg",
		},
		{
			name: "Pasta z tuńczykiem",
			price: 20,
			ingredients: [
				"makaron",
				"tuńczyk w puszce",
				"majonez",
				"ogórek kiszony",
				"cebula",
			],
			recipe:
				"Ugotuj makaron. Wymieszaj z tuńczykiem, majonezem, pokrojonymi ogórkami i cebulą.",
			image: "images/pasta-tunczyk.jpg",
		},
		{
			name: "Jajka w koszulkach",
			price: 25,
			ingredients: ["jajka", "ocet", "chleb", "szpinak", "masło"],
			recipe:
				"Wrzucaj jajka do wrzącej wody z octem, gotuj przez 3 minuty. Podawaj na tostach z masłem i szpinakiem.",
		},
		{
			name: "Sałatka grecka",
			price: 30,
			ingredients: [
				"sałata",
				"pomidor",
				"ogórek",
				"ser feta",
				"oliwki",
				"oliwa z oliwek",
			],
			recipe:
				"Wymieszaj wszystkie składniki w misce, dodaj oliwę z oliwek i przyprawy.",
		},
		{
			name: "Tosty z serem i szynką",
			price: 20,
			ingredients: ["chleb tostowy", "ser żółty", "szynka", "masło"],
			recipe:
				"Posmaruj chleb masłem, dodaj ser i szynkę. Grilluj w tosterze do momentu, aż ser się roztopi.",
		},
		{
			name: "Zapiekanka ziemniaczana",
			price: 35,
			ingredients: [
				"ziemniaki",
				"ser żółty",
				"śmietana",
				"cebula",
				"przyprawy",
			],
			recipe:
				"Pokrój ziemniaki, wymieszaj z cebulą, śmietaną i przyprawami. Piecz w piekarniku przez 40 minut.",
		},
		{
			name: "Makaron z pesto",
			price: 25,
			ingredients: ["makaron", "pesto", "parmezan", "pomidorki koktajlowe"],
			recipe:
				"Ugotuj makaron, wymieszaj z pesto i pokrojonymi pomidorkami. Posyp parmezanem.",
		},
		{
			name: "Quesadilla z serem",
			price: 20,
			ingredients: ["tortille", "ser żółty", "szynka", "papryka", "oliwa"],
			recipe:
				"Na tortilli rozłóż ser, szynkę i paprykę. Złóż na pół i smaż na oliwie, aż ser się roztopi.",
		},
		{
			name: "Pieczeń rzymska",
			price: 30,
			ingredients: [
				"mięso mielone",
				"bułka tarta",
				"jajko",
				"cebula",
				"przyprawy",
			],
			recipe:
				"Wymieszaj składniki, formuj bochenek, piecz w piekarniku przez 45 minut.",
		},
		{
			name: "Koktajl warzywny",
			price: 20,
			ingredients: [
				"pomidor",
				"ogórek",
				"papryka",
				"sok z cytryny",
				"sól",
				"pieprz",
			],
			recipe:
				"Zblenduj wszystkie warzywa, dopraw sokiem z cytryny, solą i pieprzem.",
		},
	],
};

// UI Elements
const mealElement = document.getElementById("meal");
const mealTypeSelector = document.getElementById("meal-type-selector");
const searchGoogleButton = document.getElementById("search-google");
const priceRangeInfo = document.getElementById("price-range-info");
const breakfastButton = document.getElementById("breakfast");
const lunchButton = document.getElementById("lunch");
const dinnerButton = document.getElementById("dinner");
const cheapButton = document.getElementById("cheap");
const expensiveButton = document.getElementById("expensive");

// Meal Data
let currentMealType = null;
let recentMeals = [];
let currentMeal = null;
let lastMeal = null;
let priceCategory = null;

// UI Functions
function setBackgroundColor(mealType) {
	const gradients = {
		breakfast: "#f8f9fa",
		lunch: "#f8f9fa",
		dinner: "#f8f9fa",
	};
	document.body.style.background = gradients[mealType];
	document.body.style.backgroundAttachment = "fixed";
}

function updatePriceRangeInfo() {
	if (priceCategory === "cheap") {
		priceRangeInfo.textContent = "(0-15 zł)";
	} else if (priceCategory === "expensive") {
		priceRangeInfo.textContent = "(powyżej 15 zł)";
	} else {
		priceRangeInfo.textContent = "(brak filtrowania)";
	}
}

function createEmojiBurst(x, y) {
	const emojis = ["🍳", "🥐", "🥞", "🍔", "🍕", "🍝", "🍖", "🍗", "🥗", "🍱"];
	const burstCount = 20;
	for (let i = 0; i < burstCount; i++) {
		const emoji = document.createElement("div");
		emoji.className = "food-emoji";
		emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
		const angle = Math.random() * Math.PI * 2;
		const distance = 50 + Math.random() * 80;
		const tx = Math.cos(angle) * distance;
		const ty = Math.sin(angle) * distance;
		const mealRect = mealElement.getBoundingClientRect();
		emoji.style.left = `${mealRect.left + Math.random() * mealRect.width}px`;
		emoji.style.top = `${mealRect.top + Math.random() * mealRect.height}px`;
		emoji.style.setProperty("--tx", `${tx}px`);
		emoji.style.setProperty("--ty", `${ty}px`);
		emoji.style.animation = `emoji-burst 1s ease-out forwards`;
		document.body.appendChild(emoji);
		setTimeout(() => {
			document.body.removeChild(emoji);
		}, 1000);
	}
}

// Logic Functions
function filterMeals(mealType) {
	const mealList = meals[mealType];
	if (priceCategory === "cheap") {
		return mealList.filter(meal => meal.price <= 15);
	} else if (priceCategory === "expensive") {
		return mealList.filter(meal => meal.price > 15);
	} else {
		return mealList;
	}
}

function getRandomMeal(mealList) {
	if (lastMeal && mealList.length > 1) {
		mealList = mealList.filter(meal => meal.name !== lastMeal.name);
	}
	return mealList[Math.floor(Math.random() * mealList.length)];
}

function updateMeal() {
	if (currentMealType) {
		const filteredMeals = filterMeals(currentMealType);
		if (filteredMeals.length > 0) {
			currentMeal = getRandomMeal(filteredMeals);
			lastMeal = currentMeal;

			document.getElementById("meal-name").textContent = currentMeal.name;
			document.getElementById("meal-image").innerHTML = `<img src="${
				currentMeal.image || "placeholder.jpg"
			}" alt="${currentMeal.name}">`;

			const ingredientsList = document.getElementById("ingredients-list");
			ingredientsList.innerHTML = "";
			currentMeal.ingredients.forEach(ingredient => {
				const li = document.createElement("li");
				li.className = "ingredient-item";
				li.innerHTML = `
                    <input type="checkbox" id="ingredient-${ingredient}">
                    <span>${ingredient}</span>
                `;
				ingredientsList.appendChild(li);
			});

			document.getElementById("recipe-text").textContent = currentMeal.recipe;

			mealElement.textContent = currentMeal.name;
			addToRecentMeals(currentMeal);

			// Aktualizacja klasy border dla meal-panel
			const mealPanel = document.querySelector(".meal-panel");
			mealPanel.classList.remove(
				"breakfast-border",
				"lunch-border",
				"dinner-border"
			);
			mealPanel.classList.add(`${currentMealType}-border`);

			// Dodaj event listener dla checkboxów
			ingredientsList
				.querySelectorAll('input[type="checkbox"]')
				.forEach(checkbox => {
					checkbox.addEventListener("change", function () {
						const listItem = this.closest(".ingredient-item");
						if (this.checked) {
							listItem.classList.add("completed");
						} else {
							listItem.classList.remove("completed");
						}
					});
				});
		} else {
			mealElement.textContent = "Brak pasujących dań";
			document.getElementById("meal-name").textContent = "";
			document.getElementById("meal-image").innerHTML = "";
			document.getElementById("ingredients-list").innerHTML = "";
			document.getElementById("recipe-text").textContent = "";
		}
	}
}

function addToRecentMeals(meal) {
	recentMeals.unshift(meal);
	if (recentMeals.length > 5) {
		recentMeals.pop();
	}
	updateRecentMealsList();
}

function updateRecentMealsList() {
	const recentMealsLeft = document.getElementById("recent-meals-left");
	const recentMealsCenter = document.getElementById("recent-meals-center");
	const recentMealsRight = document.getElementById("recent-meals-right");

	recentMealsLeft.innerHTML = recentMeals
		.slice(2, 3)
		.map(meal => `<li>${meal.name}</li>`)
		.join("");
	recentMealsCenter.innerHTML = recentMeals
		.slice(1, 2)
		.map(meal => `<li>${meal.name}</li>`)
		.join("");
	recentMealsRight.innerHTML = recentMeals
		.slice(0, 1)
		.map(meal => `<li>${meal.name}</li>`)
		.join("");
}

function setMealType(mealType) {
	currentMealType = mealType;
	updateMeal();

	const mealButtons = mealTypeSelector.querySelectorAll(".btn-custom");
	mealButtons.forEach(button => button.classList.remove("active"));
	document.getElementById(mealType).classList.add("active");

	mealElement.innerHTML = `Kliknij, aby wylosować ${mealType.toLowerCase()}!`;

	const elementsToChange = [
		document.querySelector(".main-content"),
		...document.querySelectorAll(".side-panel"),
		document.querySelector(".meal-panel"),
		document.getElementById("meal"),
	];

	const borderClasses = ["breakfast-border", "lunch-border", "dinner-border"];
	elementsToChange.forEach(element => {
		if (element) {
			element.classList.remove(...borderClasses);
		}
	});

	const borderClass = `${mealType}-border`;
	elementsToChange.forEach(element => {
		if (element) {
			element.classList.add(borderClass);
		}
	});

	setBackgroundColor(mealType);
}

function setPriceCategory(category) {
	if (priceCategory === category) {
		priceCategory = null;
	} else {
		priceCategory = category;
	}
	const priceCategoryButtons = document.querySelectorAll(
		"#price-category .btn-custom"
	);
	priceCategoryButtons.forEach(button => button.classList.remove("active"));
	if (priceCategory) {
		document.getElementById(category).classList.add("active");
	}
	updatePriceRangeInfo();
	updateMeal();
}
// Event Handlers
breakfastButton.addEventListener("click", () => setMealType("breakfast"));
lunchButton.addEventListener("click", () => setMealType("lunch"));
dinnerButton.addEventListener("click", () => setMealType("dinner"));
cheapButton.addEventListener("click", () => setPriceCategory("cheap"));
expensiveButton.addEventListener("click", () => setPriceCategory("expensive"));
mealElement.addEventListener("click", event => {
	updateMeal();
	const rect = mealElement.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;
	createEmojiBurst(x, y);
});
searchGoogleButton.addEventListener("click", function () {
	if (currentMeal) {
		window.open(
			`https://www.google.com/search?q=${encodeURIComponent(currentMeal.name)}`,
			"_blank"
		);
	}
});
document.addEventListener("DOMContentLoaded", () => {
	setMealType("breakfast");
});
function populatePopularDishes() {
	const popularDishes = [
		...meals.breakfast.slice(0, 3),
		...meals.lunch.slice(0, 3),
		...meals.dinner.slice(0, 2),
	];

	const popularDishElements = document.querySelectorAll(".popular-dish");
	popularDishElements.forEach((element, index) => {
		if (index < popularDishes.length) {
			const dish = popularDishes[index];
			element.querySelector(".popular-dish-image").innerHTML = `<img src="${
				dish.image || "placeholder.jpg"
			}" alt="${dish.name}">`;
			element.querySelector(".popular-dish-name").textContent = dish.name;
		}
	});
}
document.addEventListener("DOMContentLoaded", () => {
	setMealType("breakfast");
	populatePopularDishes();
});
