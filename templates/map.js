//Coordinates of the middle of each state
const stateCoordinates= {'Alabama':[32.318230, -86.902298], 'Alaska':[66.160507, -153.369141], 'Arizona':[34.048927, -111.093735], 'Arkansas':[34.799999, -92.199997], 'California':[36.778259, -119.417931], 
	'Colorado':[39.113014, -105.358887], 'Connecticut':[41.599998, -72.699997], 'Delaware':[39.000000, -75.500000], 'Florida':[27.994402, -81.760254], 'Georgia':[33.247875, -83.441162], 
    'Hawaii':[19.741755, -155.844437], 'Idaho':[44.068203, -114.742043], 'Illinois':[40.000000, -89.000000], 'Indiana':[40.273502, -86.126976], 'Iowa':[42.032974, -93.581543], 
	'Kansas':[38.500000, -98.000000], 'Kentucky':[37.839333, -84.270020], 'Louisiana':[30.391830, -92.329102], 'Maine':[45.367584, -68.972168], 'Maryland':[39.045753, -76.641273], 
	'Massachusetts':[42.407211, -71.382439], 'Michigan':[44.182205, -84.506836], 'Minnesota':[46.392410, -94.636230], 'Mississippi':[33.000000, -90.000000], 'Missouri':[38.573936, -92.603760], 
	'Montana':[46.965260, -109.533691], 'Nebraska':[41.500000, -100.000000], 'Nevada':[39.876019, -117.224121], 'New Hampshire':[44.000000, -71.500000], 'New Jersey':[39.833851, -74.871826], 
	'New Mexico':[34.307144, -106.018066], 'New York':[43.000000, -75.000000], 'North Carolina':[35.782169, -80.793457], 'North Dakota':[47.650589, -100.437012], 'Ohio':[40.367474, -82.996216], 
	'Oklahoma':[36.084621, -96.921387], 'Oregon':[44.000000, -120.500000], 'Pennsylvania':[41.203323, -77.194527], 'Rhode Island':[41.700001, -71.500000], 'South Carolina':[33.836082, -81.163727], 
    'South Dakota':[44.500000, -100.000000], 'Tennessee':[35.860119, -86.660156], 'Texas':[31.000000, -100.000000], 'Utah':[39.419220, 111.950684], 'Vermont':[44.000000, -72.699997], 
	'Virginia':[37.926868, -78.024902], 'Washington':[47.751076, -120.740135], 'West Virginia':[39.000000, -80.500000], 'Wisconsin':[44.500000, -89.500000], 'Wyoming':[43.075970, -107.290283]};

//Parsing JSON data from covid data file
const tweetText = JSON.parse({{data[0]|tojson}});
const covidCases = JSON.parse({{data[1]|tojson}});
const covidTweets = JSON.parse({{data[2]|tojson}});
const keyword = {{data[3]|tojson}};

//Finds how many tweets contained a keyword
function findText(tweetObj){
    var states = {'Alabama':0, 'Alaska':0, 'Arizona':0, 'Arkansas':0, 'California':0, 'Colorado':0, 'Connecticut':0, 'Delaware':0, 'Florida':0, 'Georgia':0, 
		'Hawaii':0, 'Idaho':0, 'Illinois':0, 'Indiana':0, 'Iowa':0, 'Kansas':0, 'Kentucky':0, 'Louisiana':0, 'Maine':0, 'Maryland':0, 
		'Massachusetts':0, 'Michigan':0, 'Minnesota':0, 'Mississippi':0, 'Missouri':0, 'Montana':0, 'Nebraska':0, 'Nevada':0, 'New Hampshire':0, 'New Jersey':0, 
		'New Mexico':0, 'New York':0, 'North Carolina':0, 'North Dakota':0, 'Ohio':0, 'Oklahoma':0, 'Oregon':0, 'Pennsylvania':0, 'Rhode Island':0, 'South Carolina':0, 
		'South Dakota':0, 'Tennessee':0, 'Texas':0, 'Utah':0, 'Vermont':0, 'Virginia':0, 'Washington':0, 'West Virginia':0, 'Wisconsin':0, 'Wyoming':0};
		
    var count = 0;
	
    for(index=0; index<tweetObj.length; index++){
        foundWord = tweetObj[index].text.search(keyword);
        state = tweetObj[index].state;
        if (foundWord != -1){
            states[state] += 1;
        }
    }
	
    return states;
}

const stateTweets = findText(tweetText);

//Adds circles to map based on covid cases, tweets in total, and tweets containing keyword
function addCircleToMap(map){ 
    for(index=0; index<covidCases.length; index++){
        var state = covidCases[index].state;
        var cases = covidCases[index].caseCount;
        var tweets = covidTweets[index].tweetCount;
        var stateTweet = stateTweets[state];
    
    lat = stateCoordinates[state][0];
	lon = stateCoordinates[state][1];
        
        map.addObject(new H.map.Circle(
            {lat:lat, lng:lon},
            1*cases,
            {
              style: {
                strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
                lineWidth: 2,
                fillColor: 'rgba(255, 0, 0, 0.3)'  // Color of the circle
              }
            }
        ));

        map.addObject(new H.map.Circle(
            {lat:lat, lng:lon},
            100*tweets,
            {
              style: {
                strokeColor: 'rgba(55, 85, 170, 0.6)',
                lineWidth: 2,
                fillColor: 'rgba(0, 0, 255, 0.3)'
              }
            }
        ));

        map.addObject(new H.map.Circle(
            {lat:lat, lng:lon},
            100000*stateTweet,
            {
              style: {
                strokeColor: 'rgba(55, 85, 170, 0.6)',
                lineWidth: 2,
                fillColor: 'rgba(0, 255, 0, 0.3)'
              }
            }
        ));
    }
}


var platform = new H.service.Platform({
  apikey: //HERE maps api key
});
     
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
  center: {lat:37.09024, lng:-95.712891},
  zoom: 5,
});

window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

addCircleToMap(map);