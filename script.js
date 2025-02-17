const AddBTN = document.querySelector(".form > button");
const TextInput = document.getElementById("task");
const TaskDiv = document.getElementById("Taskdiv");
const socreSPan = document.getElementById("socreSPan");
const MaxValueSpan = document.getElementById("MaxValueSpan");

AddBTN.addEventListener("click", () => {
	AddElemnt(TextInput.value);
	TextInput.value = "";
});

function AddElemnt(Name) {
	const MainDiv = document.createElement("div");
	const ChekBox = document.createElement("input");
	const P = document.createElement("p");
	const BTN = document.createElement("button");
	ChekBox.type = "checkbox";
	ChekBox.id = "check";
	P.innerText = Name;
	BTN.innerText = "X";
	MaxValueSpan.innerText = parseInt(MaxValueSpan.innerText) + 1;
	TaskDiv.appendChild(MainDiv);
	MainDiv.appendChild(ChekBox);
	MainDiv.appendChild(P);
	MainDiv.appendChild(BTN);
	BTN.addEventListener("click", () => {
		MainDiv.remove();
		MaxValueSpan.innerText = parseInt(MaxValueSpan.innerText) - 1;
		if (ChekBox.checked) {
			socreSPan.innerText = parseInt(socreSPan.innerText) - 1;
		}
	});
	ChekBox.addEventListener("change", () => {
		if (ChekBox.checked) {
			socreSPan.innerText = parseInt(socreSPan.innerText) + 1;
		} else {
			socreSPan.innerText = parseInt(socreSPan.innerText) - 1;
		}
	});
}
