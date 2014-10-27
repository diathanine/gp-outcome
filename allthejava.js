function article_clicked () {
	// checks to see if clicked
	if ((this).click() == true) {
		return true;
	};
};

('.container').click(function (){
	(this).css('color','red');
});

$(".container").click(function () {
    $(this).css('color','red');
    
});

$(document).ready(function () {
	// body...
	alert('LINKED');
});

$(function () {
    $('#button').click(function () {
        alert('LINKED');
    });
};

    document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
});