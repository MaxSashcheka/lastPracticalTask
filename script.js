var passiveTableAmountList = [];
var activeTableAmountList = [];

function AddRow(){

	var name = document.getElementById("name").value;
	var amount =  document.getElementById("amount").value;

	if (name == "" || amount == "") {
		alert("Вы не заполнили все поля. Пожалуйста, попробуйте еще раз.")
		return
	}

	if (document.querySelector('input[name="passiveActive"]:checked').value == "Пассивный") {

		var addRown = document.getElementById('passiveTable');
		var newRow = addRown.insertRow(passiveTableAmountList.length + 1);

		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		var cel3 = newRow.insertCell(2);

		cel1.innerHTML = document.querySelector('input[name="passiveActive"]:checked').value;
		cel2.innerHTML = name;
		cel3.innerHTML = amount;

		passiveTableAmountList.push(amount)

	} else {

		var addRown = document.getElementById('activeTable');
		var newRow = addRown.insertRow(activeTableAmountList.length + 1);

		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		var cel3 = newRow.insertCell(2);

		cel1.innerHTML = document.querySelector('input[name="passiveActive"]:checked').value;
		cel2.innerHTML = name;
		cel3.innerHTML = amount;

		activeTableAmountList.push(amount)

	}
			
}

function calculateActive() {
	var sum = 0;
	activeTableAmountList.forEach(element => { sum += parseInt(element) });
    document.getElementById("currentActiveSummary").innerHTML = "Текущая сумма активов: " + sum;   
	return sum
}

function calculatePassive() {
	var sum = 0;
	passiveTableAmountList.forEach(element => { sum += parseInt(element) });
    document.getElementById("currentPassiveSummary").innerHTML = "Текущая сумма пасивов: " + sum; 
	return sum
}

function calculateTotal() {
	var activeSum = calculateActive();
	var passiveSum = calculatePassive();
	var totalSum = activeSum - passiveSum;

    document.getElementById("currentTotalSummary").innerHTML = "Текущий итоговый баланс: " + totalSum; 
}