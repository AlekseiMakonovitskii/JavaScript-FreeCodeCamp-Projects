function checkCashRegister(price, cash, cid) {
  let changeUnit = (cash * 100) - ( price * 100);
	let cidTotal = 0;
	
	const resultObj = {
		status: null,
		change: [],
	};

	for (let el of cid) {
		cidTotal += el[1] * 100;
	};

	if (changeUnit > cidTotal) {
		resultObj.status = "INSUFFICIENT_FUNDS";
		resultObj.change = [];
	} else if (changeUnit === cidTotal) {
		resultObj.status = "CLOSED";
		resultObj.change = cid;
	} else {
		let answer = [];
		cid = cid.reverse();
		let moneyUnits = {
			"ONE HUNDRED": 10000,
			"TWENTY": 2000,
			"TEN": 1000,
			"FIVE": 500,
			"ONE": 100,
			"QUARTER": 25,
			"DIME": 10,
			"NICKEL": 5,
			"PENNY": 1,
		};

		for (let el of cid) {
			let holder = [el[0], 0];
			el[1] = el[1] * 100;

			while (changeUnit >= moneyUnits[el[0]] && el[1] > 0) {
				changeUnit -= moneyUnits[el[0]];
				el[1] -= moneyUnits[el[0]];
				holder[1] += moneyUnits[el[0]] / 100;
			}

			if (holder[1] > 0) {
				answer.push(holder);
			}
			
			resultObj.status = "OPEN";
			resultObj.change = answer;
		}

		if (changeUnit > 0) {
			resultObj.status = "INSUFFICIENT_FUNDS";
			resultObj.change = [];
		}
	}
	
	return resultObj;
};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
