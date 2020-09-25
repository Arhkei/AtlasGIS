
function findText(tweetObj){
    var states = {'Alabama':0, 'Alaska':0, 'Arizona':0, 'Arkansas':0, 'California':0, 'Colorado':0, 'Connecticut':0, 'Delaware':0, 'Florida':0, 'Georgia':0, 'Hawaii':0, 'Idaho':0, 'Illinois':0, 'Indiana':0, 'Iowa':0, 'Kansas':0, 'Kentucky':0, 'Louisiana':0, 'Maine':0, 'Maryland':0, 'Massachusetts':0, 'Michigan':0, 'Minnesota':0, 'Mississippi':0, 'Missouri':0, 'Montana':0, 'Nebraska':0, 'Nevada':0, 'New Hampshire':0, 'New Jersey':0, 'New Mexico':0, 'New York':0, 'North Carolina':0, 'North Dakota':0, 'Ohio':0, 'Oklahoma':0, 'Oregon':0, 'Pennsylvania':0, 'Rhode Island':0, 'South Carolina':0, 'South Dakota':0, 'Tennessee':0, 'Texas':0, 'Utah':0, 'Vermont':0, 'Virginia':0, 'Washington':0, 'West Virginia':0, 'Wisconsin':0, 'Wyoming':0}
    var count = 0
    for(index=0; index<tweetObj.length; index++){
        foundWord = tweetObj[index].text.search({{data[3]|tojson}})
        state = tweetObj[index].state
        if (foundWord != -1){
            states[state] += 1
        }
    }
    return states
}

function addCircleToMap(map){ 
    var tweetText = JSON.parse({{data[0]|tojson}})
    var covidCases = JSON.parse({{data[1]|tojson}})
    var covidTweets = JSON.parse({{data[2]|tojson}})
    
    var stateTweets = findText(tweetText)
    
    for(index=0; index<covidCases.length; index++){
        var state = covidCases[index].state
        var cases = covidCases[index].caseCount
        var tweets = covidTweets[index].tweetCount
        var stateTweet = stateTweets[state]
    
        if( state == 'Wisconsin'){
            lat = 44.500000
            lon = -89.500000
        }
        else if( state == 'West Virginia'){
            lat = 39.000000
            lon = -80.500000
        }
        else if( state == 'Vermont'){
            lat = 44.000000
            lon = -72.699997
        }
        else if( state == 'Texas'){
            lat = 31.000000
            lon = -100.000000
            
        }
        else if( state == 'South Dakota'){
            lat = 44.500000
            lon = -100.000000
        }

        else if( state == 'Rhode Island'){
            lat = 41.700001
            lon = -71.500000
        }

        else if( state == 'Oregon'){
            lat = 44.000000
            lon = -120.500000
        }
        else if( state == 'New York'){
            lat = 43.000000
            lon = -75.000000
        }
        else if( state == 'New Hampshire'){
            lat = 44.000000
            lon = -71.500000
        }
        else if( state == 'Nebraska'){
            lat = 41.500000
            lon = -100.000000
        }
        else if( state == 'Kansas'){
            lat = 38.500000
            lon = -98.000000
        }
        else if( state == 'Mississippi'){
            lat = 33.000000
            lon = -90.000000
        }
        else if( state == 'Illinois'){
            lat = 40.000000
            lon = -89.000000
        }
        else if( state == 'Delaware'){
            lat = 39.000000
            lon = -75.500000
        }

        else if( state == 'Connecticut'){
            lat = 41.599998
            lon = -72.699997
            lastState = 'Connecticut'
        }
        else if( state == 'Arkansas'){
            lat = 34.799999
            lon = -92.199997
        }
        else if( state == 'Indiana'){
            lat = 40.273502
            lon = -86.126976
        }
        else if( state == 'Missouri'){
            lat = 38.573936
            lon = -92.603760
        }
        else if( state == 'Florida'){
            lat = 27.994402
            lon = -81.760254
        }
        else if( state == 'Nevada'){
            lat = 39.876019
            lon = -117.224121
        }
        else if( state == 'Maine'){
            lat = 45.367584
            lon = -68.972168
        }
        else if( state == 'Michigan'){
            lat = 44.182205
            lon = -84.506836
            lastState = 'Michigan'
        }
        else if( state == 'Georgia'){
            lat = 33.247875
            lon = -83.441162
        }
        else if( state == 'Hawaii'){
            lat = 19.741755
            lon = -155.844437
        }
        else if( state == 'Alaska'){
            lat = 66.160507
            lon = -153.369141
        }
        else if( state == 'Tennessee'){
            lat = 35.860119
            lon = -86.660156
        }
        else if( state == 'Virginia'){
            lat = 37.926868
            lon = -78.024902
        }
        else if( state == 'New Jersey'){
            lat = 39.833851
            lon = -74.871826
        }
        else if( state == 'Kentucky'){
            lat = 37.839333
            lon = -84.270020
        }
        else if( state == 'North Dakota'){
            lat = 47.650589
            lon = -100.437012
        }
        else if( state == 'Minnesota'){
            lat = 46.392410
            lon = -94.636230
        }
        else if( state == 'Oklahoma'){
            lat = 36.084621
            lon = -96.921387
        }
        else if( state == 'Montana'){
            lat = 46.965260
            lon = -109.533691
        }
        else if( state == 'Washington'){
            lat = 47.751076
            lon = -120.740135
        }
        else if( state == 'Utah'){
            lat = 39.419220
            lon = -111.950684
        }
        else if( state == 'Colorado'){
            lat = 39.113014
            lon = -105.358887
        }
        else if( state == 'Ohio'){
            lat = 40.367474
            lon = -82.996216
        }
        else if( state == 'Alabama'){
            lat = 32.318230
            lon = -86.902298
        }
        else if( state == 'Iowa'){
            lat = 42.032974
            lon = -93.581543
        }
        else if( state == 'New Mexico'){
            lat = 34.307144
            lon = -106.018066
        }
        else if( state == 'South Carolina'){
            lat = 33.836082
            lon = -81.163727
        }
        else if( state == 'Pennsylvania'){
            lat = 41.203323
            lon = -77.194527
        }
        else if( state == 'Arizona'){
            lat = 34.048927
            lon = -111.093735
        }
        else if( state == 'Maryland'){
            lat = 39.045753
            lon = -76.641273
        }
        else if( state == 'Massachusetts'){
            lat = 42.407211
            lon = -71.382439
        }
        else if( state == 'California'){
            lat = 36.778259
            lon = -119.417931
        }
        else if( state == 'Idaho'){
            lat = 44.068203
            lon = -114.742043
        }
        else if( state == 'Wyoming'){
            lat = 43.075970
            lon = -107.290283
        }

        else if( state == 'North Carolina'){
            lat = 35.782169
            lon = -80.793457
        }
        else if( state == 'Louisiana'){
            lat = 30.391830
            lon = -92.329102
        }
        
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
                strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
                lineWidth: 2,
                fillColor: 'rgba(0, 0, 255, 0.3)'  // Color of the circle
              }
            }
        ));
        map.addObject(new H.map.Circle(
            {lat:lat, lng:lon},
            100000*stateTweet,
            {
              style: {
                strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
                lineWidth: 2,
                fillColor: 'rgba(0, 255, 0, 0.3)'  // Color of the circle
              }
            }
        ));
    }
}


var platform = new H.service.Platform({
  apikey: //key
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
