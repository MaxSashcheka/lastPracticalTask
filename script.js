var passiveTableNameList = [];
var passiveTableAmountList = [];

var activeTableNameList = [];
var activeTableAmountList = [];

var passiveTableRowsNumber = 1;
var passiveTableSelectedIndex = 0;

var activeTableRowsNumber = 1;var activeTableSelectedIndex = 0;

function AddRow(){

	if (document.querySelector('input[name="passiveActive"]:checked').value == "Пассивный") {

		passiveTableNameList[passiveTableSelectedIndex] = document.getElementById("name").value;
		passiveTableAmountList[passiveTableSelectedIndex] = document.getElementById("amount").value;

		if (passiveTableNameList[passiveTableSelectedIndex] == "" || passiveTableAmountList[passiveTableSelectedIndex] == "") {
			alert("Вы не заполнили все поля, пожалуйста, попробуйте еще раз.")
			passiveTableNameList.pop
			passiveTableAmountList.pop
			return
		}

		var AddRown = document.getElementById('passiveTable');
		var NewRow = AddRown.insertRow(passiveTableRowsNumber);

		var cel1 = NewRow.insertCell(0);
		var cel2 = NewRow.insertCell(1);
		var cel3 = NewRow.insertCell(2);

		cel1.innerHTML = document.querySelector('input[name="passiveActive"]:checked').value;
		cel2.innerHTML = passiveTableNameList[passiveTableSelectedIndex];
		cel3.innerHTML = passiveTableAmountList[passiveTableSelectedIndex];

		passiveTableRowsNumber++;
		passiveTableSelectedIndex++;

	} else {

		activeTableNameList[activeTableSelectedIndex] = document.getElementById("name").value;
		activeTableAmountList[activeTableSelectedIndex] = document.getElementById("amount").value;

		if (activeTableNameList[activeTableSelectedIndex] == "" || activeTableAmountList[activeTableSelectedIndex] == "") {
			alert("Вы не заполнили все поля, пожалуйста, попробуйте еще раз.")
			activeTableNameList.pop
			activeTableAmountList.pop
			return
		}

		var AddRown = document.getElementById('activeTable');
		var NewRow = AddRown.insertRow(activeTableRowsNumber);

		var cel1 = NewRow.insertCell(0);
		var cel2 = NewRow.insertCell(1);
		var cel3 = NewRow.insertCell(2);

		cel1.innerHTML = document.querySelector('input[name="passiveActive"]:checked').value;
		cel2.innerHTML = activeTableNameList[activeTableSelectedIndex];
		cel3.innerHTML = activeTableAmountList[activeTableSelectedIndex];

		activeTableRowsNumber++;
		activeTableSelectedIndex++;

	}

			
}

function calculateActive() {
	var sum = 0;
	activeTableAmountList.forEach(element => {
		sum += parseInt(element)
	});

    document.getElementById("currentActiveSummary").innerHTML = "Текущая сумма активов: " + sum;   
	return sum
}

function calculatePassive() {
	var sum = 0;
	passiveTableAmountList.forEach(element => {
		sum += parseInt(element)
	});

    document.getElementById("currentPassiveSummary").innerHTML = "Текущая сумма пасивов: " + sum; 
	return sum
}

function calculateTotal() {
	var activeSum = calculateActive();
	var passiveSum = calculatePassive();

	var totalSum = activeSum - passiveSum;

    document.getElementById("currentTotalSummary").innerHTML = "Текущий итоговый баланс: " + totalSum; 

}