function triangular(){
	var triangular_number=0;
	var n = document.getElementById("divisors").value;
	var over = parseInt(n, 10);
	var i=1;
	while(true){//search and sum numbers
		triangular_number=triangular_number+i; //triangle number
		all_divisors=numberOfDivisors(triangular_number); //get number of divisors and all divisors
		if(all_divisors.length>over){ //end if found over input divisors
			break;
		}
		i++;
	}
	//delete all rows except first
	for(var k=document.getElementById("table").rows.length-1;k>0;k--){
		document.getElementById("table").deleteRow(k);
	}
	//add output
	var row = table.insertRow(1);
    var cell = row.insertCell(0);
	cell.innerHTML = "Value of the first triangle number to have over " + over +" divisors is: " + triangular_number;
	var print_divisors = Object.keys(all_divisors).map(function (key) {return all_divisors[key]});
	row = table.insertRow(2);
    cell = row.insertCell(0);
	cell.innerHTML = "Divisors:";
	var m=3;
	while(print_divisors.length) {
		row = table.insertRow(m);
    	cell = row.insertCell(0);
    	cell.innerHTML = print_divisors.splice(0,10);
    	m++;
	}
}

function numberOfDivisors(n,all_divisors) {
	if (n < 1)
		throw "Argument error";
	var number=0;
	var small = []; //for small numbers (first half)
	var large = []; //for big numbers (second half)
	var end = Math.floor(Math.sqrt(n)); //we don't need search all range of numbers. If we search, this take time too long.
	for (var i = 1; i <= end; i++) { //searching all numbers 
		if (n % i == 0) { //if this number divide triangulate number
			small.push(i); //add 
			if (i * i != n){  // Don't include a square root twice
				large.push(n / i); //add
			}
		}
	}
	large.reverse(); //for correct output
	var all_divisors=small.concat(large); //concat
	return all_divisors;
}