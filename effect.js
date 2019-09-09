document.body.onload = addElement;

var card = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg","img/5.jpg",
            "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", 
            "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg",
            "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg",
            "img/21.jpg", "img/22.jpg", "img/23.jpg", "img/24.jpg", "img/25.jpg",
            "img/26.jpg"];
var rand = Math.random(); // Math.random returns a number randomly between 0 to 1
var totalcard = card.length;
var randomIndex = Math.floor(rand * totalcard);
 // Math.floor rounds a number DOWNWARDS to the nearest integer, and returns the result.
var randomcard = card[randomIndex];

function addElement () { 
	for(var i = 1; i < 79; i++) {
	   	var rand = Math.random(); // Math.random returns a number randomly between 0 to 1
	    var totalcard = card.length;
	    var randomIndex = Math.floor(rand * totalcard);
	 // Math.floor rounds a number DOWNWARDS to the nearest integer, and returns the result.
	    var randomcard = card[randomIndex];
	    var staticDiv = document.createElement("img");
	   	staticDiv.setAttribute("id", randomIndex);
	   	staticDiv.setAttribute("src", randomcard);
	   	staticDiv.setAttribute("height", "100");
		// staticDiv.setAttribute("width", "300");
	   	document.body.appendChild(staticDiv);
	   };
	   	
   for(var n = 0; n < 30; n++) {
	   	var rand = Math.random(); // Math.random returns a number randomly between 0 to 1
		var totalcard = card.length;
		var randomIndex = Math.floor(rand * totalcard);
		 // Math.floor rounds a number DOWNWARDS to the nearest integer, and returns the result.
		var randomcard = card[randomIndex];
	    var contDiv = document.createElement("div"); 
	    contDiv.setAttribute("class", "flip-container");  	
		var flipperDiv = document.createElement("div"); 
		flipperDiv.setAttribute("class", "flipper");
		var frontDiv = document.createElement("div");
		frontDiv.setAttribute("class", "front");
		var frontlink = document.createElement("a");
		frontlink.setAttribute("data-fancybox", "gallery");
		frontlink.setAttribute("href", randomcard);
		frontlink.setAttribute("height", "100");
		frontlink.setAttribute("width", "200");
		frontDiv.appendChild(frontlink);
		var frontimg = document.createElement("img");
		frontimg.setAttribute("src", randomcard);
		frontimg.setAttribute("height", "100");
		frontDiv.appendChild(frontimg);	
		var backDiv = document.createElement("div");
		backDiv.setAttribute("class", "back");
		var backlink = document.createElement("a");
		backlink.setAttribute("data-fancybox", "gallery");
		backlink.setAttribute("href", "img/New York.jpg");
		backlink.setAttribute("height", "100");
		backlink.setAttribute("width", "200");
		backDiv.appendChild(backlink);
		var backimg = document.createElement("img");
		backimg.setAttribute("src", "img/New York.jpg");
		backimg.setAttribute("height", "100");
		backDiv.appendChild(backimg);		
		flipperDiv.appendChild(frontDiv);	
		flipperDiv.appendChild(backDiv);
		contDiv.appendChild(flipperDiv); 
		var currentDiv = document.getElementById(n); 
	    document.body.insertBefore(contDiv, currentDiv);
		};

	    $("flip-container").on("ontouchstart", function() {
	   	   this.classList.toggle('hover')
    });
}
