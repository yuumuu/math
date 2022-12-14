function purChased(){
	var price = document.form.price.value;
	var discount = document.form.discount.value;
	var result = document.form.result.value;
	var payment = document.form.payment.value;
	var returns = document.form.returns.value;
	
	price = parseInt(price);
	discount = parseInt(discount);
	result = parseInt(result);
	payment = parseInt(payment);
	returns = parseInt(returns);
	
	var result = price;
	finalvalue = parseFloat(result);

	var result = document.form.result.value = "Rp. " + finalvalue;
}

/*function returnIt(){
	var price = document.form.price.value;
	var discount = document.form.discount.value;
	var result = document.form.result.value;
	var payment = document.form.payment.value;
	var returns = document.form.returns.value;
	
	price = parseInt(price);
	discount = parseInt(discount);
	result = parseInt(result);
	payment = parseInt(payment);
	returns = parseInt(returns);
	
	var returns = payment - result;
	finalreturn = parseFloat(returns);

	var returns = document.form.returns.value = "Rp. " + finalreturn;
}*/

function checkIt(){
	var price = document.form.price.value;
	var discount = document.form.discount.value;
	var result = document.form.result.value;
	var payment = document.form.payment.value;
	var returns = document.form.returns;
	
	price = parseInt(price);
	discount = parseInt(discount);
	result = parseInt(result);
	payment = parseInt(payment);
	
	var resultes = price * (discount / 100);
	//var returns = parseInt(payment) - result;
	//var returns = payment - resultes;
	
	
	finalResult = price - parseInt(resultes);
	
	var result = document.form.result.value = "Rp. " + finalResult;
	var returns = document.form.returns.value = payment - finalResult;
	console.log(result);
	console.log(returns);
	
}

function clearLoad(){
	var price = document.form.price;
	var discount = document.form.discount;
	var result = document.form.result;
	var payment = document.form.payment;
	var returns = document.form.returns;
	
	price.value = "";
	discount.value = "";
	result.value = "";
	payment.value = "";
	returns.value = "";
}
