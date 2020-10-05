function addMoney() {
	let total = parseInt(document.getElementById('totalBudget').innerHTML);
	let current = parseInt(document.getElementById('current').innerHTML);
	let input = parseInt(document.getElementById('expenseInput').value);
	alert('You Just Added ' +input+ ' Naira')

	if (isNaN(input) || input == '') {
		alert('Please input a number')
	}else {
			 total += input
			 current += input

			document.getElementById('totalBudget').innerHTML = total;
			document.getElementById('current').innerHTML = current;
	}

}

function expenseDetails() {
	let current = parseInt(document.getElementById('current').innerHTML);
	let expenseN = document.getElementById('expenseName').value;
	let expenseA = parseInt(document.getElementById('expenseAmount').value);
		if (expenseN == '' || !isNaN(expenseN)) {
			alert('Please Input A Valid Expense Name')
		}else if (isNaN(expenseA) || (expenseA) == '') {
			alert('Please Input A Valid Expense Amount')
		}else {
			if (expenseA <= current) {
				current -= expenseA
				document.getElementById('current').innerHTML = current
				var paragraph = document.createElement('P')
				paragraph.innerHTML = expenseN + '<br>' + expenseA
				document.getElementById('expenseMenu').appendChild(paragraph);

				document.getElementById('expenseName').value = '';
				document.getElementById('expenseAmount').value = '';
			}else {
				alert('Expense amount has exceeded the limit')
			}
		}
} 