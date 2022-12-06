function sumbudget() {
	var x=document.forms.Form.travelbudget.value
	var y=document.forms.Form.hotebudget.value
	var a=document.forms.Form.eatingbudget.value
	var b=document.forms.Form.shoppingbudget.value
	var c=document.forms.Form.poketmoney.value
	var sum=Number(x) +Number(y)+Number(a)+Number(b)+Number(c)
	 
	if(sum<2000){
       alert("your destination is turkey")
	}
	else if(sum<3000 && sum >2000){
		alert("your destination is greece")
	}
	else if(sum>3000){
		alert("your destination is france or italy")
	}
}
