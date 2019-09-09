mapboxgl.accessToken = 'pk.eyJ1IjoiYXNjaG9vbDEwMCIsImEiOiJjanpvYWl5bmgwY3l3M2NwNDBtYzFxYmx6In0.flRDdEmLLa0rmKP5SGeZnw'; // replace this value with your own access token from Mapbox Studio

//Switching map style randomly when refresh the webpage
var mapstyles = ['mapbox://styles/aschool100/ck062gacv0quk1cpi5s9t6ylb', 
                 'mapbox://styles/aschool100/ck0626xzh1z091crzjvdfk5is', 
                 'mapbox://styles/aschool100/ck061qr1f1yjr1dqpb8wihnsd', 
                 'mapbox://styles/aschool100/ck061l38z1yvm1cswt1u5i2go',
                 'mapbox://styles/aschool100/ck061acwm0dhm1cnyostxinms',
                 'mapbox://styles/aschool100/ck061z8xb1fvg1crv94m4nqko',
                 'mapbox://styles/aschool100/ck060y2h51xsy1cp23in7rvhx',
                 'mapbox://styles/aschool100/ck060eym61xkv1cpuuf5o68nw',
                 'mapbox://styles/aschool100/ck05qpyn51odt1dqpqykjgyem',
                 'mapbox://styles/aschool100/ck04oyp14051d1cmu0wc98uo8',
                 'mapbox://styles/aschool100/ck05o119m1lz31cp2du6zpphh',
                 'mapbox://styles/aschool100/ck05mwnqk1kvg1cmewsf4fp4e',
                 'mapbox://styles/aschool100/ck05q41cx13pg1cmu9euty93n',
                 'mapbox://styles/aschool100/ck05qi7i71o9y1cpukcxyriuz',
                 'mapbox://styles/aschool100/ck05ntq4q0d341cmt4goysnce',
                 'mapbox://styles/aschool100/ck05o57rn1lx61cla8s8vwzmg',
                 'mapbox://styles/aschool100/ck05oai5l03yp1cpuvv6qocr4',
                 'mapbox://styles/aschool100/ck05oebpa0dpb1cpi9d7bow2n',
                 'mapbox://styles/aschool100/ck05oip291mcj1crz95ado7dg',
                 'mapbox://styles/aschool100/ck05q1c3s13mt1cmu1iruq5yz',
                 'mapbox://styles/aschool100/ck05q65cb0fbt1cpi0jo8nktl',
                 'mapbox://styles/aschool100/ck05qam7p0fcq1cmtwwq53jzm',
                 'mapbox://styles/aschool100/ck05vy1ps1tiw1csw84hfdwo8',
                 'mapbox://styles/aschool100/ck05w16d71tlx1cswsswwzsme',
                 'mapbox://styles/aschool100/ck05w593e1tgd1cs0zjtj45nl'
                ];
var rand = Math.random(); // Math.random returns a number randomly between 0 to 1
var totalmap = mapstyles.length;
var randomIndex = Math.floor(rand * totalmap ); // Math.floor rounds a number DOWNWARDS to the nearest integer, and returns the result.
var randommap = mapstyles[randomIndex];

//Initializing the map
var map = new mapboxgl.Map({
	container: 'map', // this is the ID of the div in index.html where the map should go
    center: [-74.034801,40.668415], // set the centerpoint of the map programatically. Note that this is [longitude, latitude]!
    zoom: 10, // set the default zoom programatically
	style: randommap, // replace this value with the style URL from Mapbox Studio
	// customAttribution: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)', // Custom text used to attribute data source(s)
});

var layerList = document.getElementById('colorbutton');
var inputs = layerList.getElementsByTagName('button');
 
function switchColor(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/aschool100/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchColor;
}



