const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = ["var1","var2","var3","var4","var5","var6","speach"];

function handleButton() {
  $.getJSON(dataURL,handleData);
  $("form").hide();
}

	function getFormValues() {
		let obj= {};

		fields.forEach(function(field) {
			obj[field] = $("input[name=" + field + "]")[0].value
		});
		return obj;
			}



function handleData(data) {
	let finalMessage = "";

	let values = getFormValues();

	data["text"].forEach(function(line) {
		for(key in values) {
			line = line.replace("{" + key + "}",values[key]);
		}

	finalMessage = finalMessage + line + "<br>" ;

	});

	$("div#result").html(finalMessage);
}



function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

	text = [
		"Жили-были {var1} да {var2}",
		"Была у них {var3}",
		"Снесла {var3} {var4}, не простое - золотое",
		"- {var1} бил, бил - не разбил",
		"- {var2} била, била - не разбила",
		"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
		"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
		"{speach}"
	]

