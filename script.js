const AddBTN = document.querySelector(".form > button");
const TextInput = document.getElementById("task");
const TaskDiv = document.getElementById("Taskdiv");

AddBTN.addEventListener("click", () => {
	AddElemnt(TextInput.value);
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
	TaskDiv.appendChild(MainDiv);
	MainDiv.appendChild(ChekBox);
	MainDiv.appendChild(P);
	MainDiv.appendChild(BTN);
	BTN.addEventListener("click", () => {
		MainDiv.remove();
	});
}
