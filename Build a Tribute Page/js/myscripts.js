
$(document).ready(function() {
	var quoteText = "The impossible today will be possible tomorrow.";
	$("#quote > p").html(quoteText);

	//Fill the timeline
	var timeLine = [
	  ["1857","He was born in Izhevskoye (now in Spassky District, Ryazan Oblast), in the Russian Empire, to a middle-class family"]
	, ["1866","After an illness partially lost his hearing"]
	, ["1870","Mother died"]
	, ["1873","Expelled from school and started to self study. "]
	, ["1873 - 1876", "He passed much of his time by reading books and became interested in mathematics and physics. Then went to Moscow and continiue to self study there. Eats only bread and water, spending most funds on experiments. "]
	, ["1876 - 1878", "Returned back to his father in Vyatka. Began work as a math and physics tutor"]
	, ["1880","Became a teacher of arithmetic and geometry. Married. Started to write his first scientific works"]
	, ["1885 - 1886","Wrote the first major work \"The Theory of metallic dirigible\", but it was only a theory. No one has invested in it"]
	, ["1887","Wrote a short story \"On the Moon\" - his first science fiction"]
	, ["1892","Moved to Kaluga. Worked a teacher of arithmetic and geometry"]
	, ["1895","Published book \"Dreams of the earth and the sky\""]
	, ["1902","His son committed suicide"]
	, ["1903","Published main book \"Investigation of outer space with jet devices\""]
	, ["1908","In 1908, during the flood of the Oka his house was flooded, many machines exhibits were put out of action, and numerous unique calculations lost"]
	, ["1919","Arested, was in jail for few weeks"]
	, ["1921","Кeceived a lifetime pension"]
	, ["1935","Died"]
	];
	for (var i = 0; i < timeLine.length; i++) {
		var listItem = "<li><b>" + timeLine[i][0] + "</b> - " + timeLine[i][1] + "</li>" 
		$(listItem).appendTo("#timeLine");

	}
});

