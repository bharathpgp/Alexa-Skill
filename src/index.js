
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Thirukkural! Let's learn some ",
            'HELP'    : "Say about, to hear more about the city, or say kural, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside. ",
            'ABOUT'   : "The Thirukkural (literally Sacred Verses), or shortly the Kural, is a classic Tamil sangam literature consisting of 1330 couplets or kurals, dealing with the everyday virtues of an individual",
            'STOP'    : "Okay, see you next time!"
        }
    }
    // , 'de-DE': { 'translation' : { 'TITLE'   : "Local Helfer etc." } }
};
// var virtue = {
//     "city"        : "Gloucester",
//     "state"       : "MA",
//     "postcode"    : "01930",
//     "restaurants" : [
//         { "name":"Zeke's Place",
//             "address":"66 East Main Street", "phone": "978-283-0474",
//             "meals": "breakfast, lunch",
//             "description": "A cozy and popular spot for breakfast.  Try the blueberry french toast!"
//         },
//         { "name":"Morning Glory kural Shop",
//             "address":"25 Western Avenue", "phone": "978-281-1851",
//             "meals": "kural, breakfast, lunch",
//             "description": "A homestyle diner located just across the street from the harbor sea wall."
//         },
//         { "name":"Sugar Magnolias",
//             "address":"112 Main Street", "phone": "978-281-5310",
//             "meals": "breakfast, lunch",
//             "description": "A quaint eatery, popular for weekend brunch.  Try the carrot cake pancakes."
//         },
//         { "name":"Seaport Grille",
//             "address":"6 Rowe Square", "phone": "978-282-9799",
//             "meals": "lunch, dinner",
//             "description": "Serving seafood, steak and casual fare.  Enjoy harbor views on the deck."
//         },
//         { "name":"Latitude 43",
//             "address":"25 Rogers Street", "phone": "978-281-0223",
//             "meals": "lunch, dinner",
//             "description": "Features artsy decor and sushi specials.  Live music evenings at the adjoining Minglewood Tavern."
//         },
//         { "name":"George's kural Shop",
//             "address":"178 Washington Street", "phone": "978-281-1910",
//             "meals": "kural, breakfast, lunch",
//             "description": "A highly rated local diner with generously sized plates."
//         },

//     ],
//     "attractions":[
//         {
//             "name": "Whale Watching",
//             "description": "Gloucester has tour boats that depart twice daily from Rogers street at the harbor.  Try either the 7 Seas Whale Watch, or Captain Bill and Sons Whale Watch. ",
//             "distance": "0"
//         },
//         {
//             "name": "Good Harbor Beach",
//             "description": "Facing the Atlantic Ocean, Good Harbor Beach has huge expanses of soft white sand that attracts hundreds of visitors every day during the summer.",
//             "distance": "2"
//         },
//         {
//             "name": "Rockport",
//             "description": "A quaint New England town, Rockport is famous for rocky beaches, seaside parks, lobster fishing boats, and several art studios.",
//             "distance": "4"
//         },
//         {
//             "name": "Fenway Park",
//             "description": "Home of the Boston Red Sox, Fenway park hosts baseball games From April until October, and is open for tours. ",
//             "distance": "38"
//         }
//     ]
// }
var virtue = [
    "1: Akara Mudhala Ezhuththellaam Aadhi Pakavan Mudhatre Ulaku",
    "2: Katradhanaal Aaya Payanenkol Vaalarivan Natraal Thozhaaar Enin",
    "3:Malarmisai Ekinaan Maanati Serndhaar Nilamisai Neetuvaazh Vaar",
    "4: Ventudhal Ventaamai Ilaanati Serndhaarkku Yaantum Itumpai Ila",
    "5: Irulser Iruvinaiyum Seraa Iraivan Porulser Pukazhpurindhaar Maattu",
    "6: Porivaayil Aindhaviththaan Poidheer Ozhukka Nerinindraar Neetuvaazh Var"
];

// Weather courtesy of the Yahoo Weather API.
// This free API recommends no more than 2000 calls per day

// var myAPI = {
//     host: 'query.yahooapis.com',
//     port: 443,
//     path: `/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(virtue.city)}%2C%20${virtue.state}%22)&format=json&env=store%3A%2F%2Fvirtuetables.org%2Falltableswithkeys`,
//     method: 'GET'
// };
// 2. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.emit(':ask', say, say);
    },

    'AboutIntent': function () {
        this.emit(':tell', this.t('ABOUT'));
    },

    // '1Intent': function () {
    //     var restaurant = randomArrayElement(getRestaurantsByMeal('kural'));
    //     this.attributes['restaurant'] = restaurant.name;

    //     var say = 'kural, Akara Mudhala Ezhuththellaam Aadhi Pakavan Mudhatre Ulaku. What kural do want to learn next?';
    //     this.emit(':ask', say);
    // },
    'kuralIntent': function () {
        var factArr = virtue;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'arattuppalIntent': function () {
        var factArr = virtue;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'porutpalIntent': function () {
        var factArr = virtue;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },
    'kamattuppalIntent': function () {
        var factArr = virtue;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = "Kural of the day for you!" + randomFact;
        this.emit(':tellWithCard', speechOutput,  randomFact)
    },

    'BreakfastIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('breakfast'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'For breakfast, try this, ' + restaurant.name + '. Would you like to hear more?';
        this.emit(':ask', say);
    },

    'LunchIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('lunch'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Lunch time! Here is a good spot. ' + restaurant.name + '. Would you like to hear more?';
        this.emit(':ask', say);
    },

    'DinnerIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('dinner'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Enjoy dinner at, ' + restaurant.name + '. Would you like to hear more?';
        this.emit(':ask', say);
    },

    'AMAZON.YesIntent': function () {
        var restaurantName = this.attributes['restaurant'];
        var restaurantDetails = getRestaurantByName(restaurantName);

        var say = restaurantDetails.name
            + ' is located at ' + restaurantDetails.address
            + ', the phone number is ' + restaurantDetails.phone
            + ', and the description is, ' + restaurantDetails.description
            + '  I have sent these details to the Alexa App on your phone.  Enjoy your meal! <say-as interpret-as="interjection">bon appetit</say-as>' ;

        var card = restaurantDetails.name + '\n' + restaurantDetails.address + '\n'
            + virtue.city + ', ' + virtue.state + ' ' + virtue.postcode
            + '\nphone: ' + restaurantDetails.phone + '\n';

        this.emit(':tellWithCard', say, restaurantDetails.name, card);

    },

    'AttractionIntent': function () {
        var distance = 200;
        if (this.event.request.intent.slots.distance.value) {
            distance = this.event.request.intent.slots.distance.value;
        }

        var attraction = randomArrayElement(getAttractionsByDistance(distance));

        var say = 'Try '
            + attraction.name + ', which is '
            + (attraction.distance == "0" ? 'right downtown. ' : attraction.distance + ' miles away. Have fun! ')
            + attraction.description;

        this.emit(':tell', say);
    },

    'GoOutIntent': function () {

        getWeather( ( localTime, currentTemp, currentCondition) => {
            // time format 10:34 PM
            // currentTemp 72
            // currentCondition, e.g.  Sunny, Breezy, Thunderstorms, Showers, Rain, Partly Cloudy, Mostly Cloudy, Mostly Sunny

            // sample API URL for Irvine, CA
            // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22irvine%2C%20ca%22)&format=json&env=store%3A%2F%2Fvirtuetables.org%2Falltableswithkeys

            this.emit(':tell', 'It is ' + localTime
            + ' and the weather in ' + virtue.city
            + ' is '
            + currentTemp + ' and ' + currentCondition);

        // TODO
        // Decide, based on current time and weather conditions,
        // whether to go out to a local beach or park;
        // or recommend a movie theatre; or recommend staying home


    });
    },

    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', this.t('HELP'));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP'));
    }

};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getRestaurantsByMeal(mealtype) {

    var list = [];
    for (var i = 0; i < virtue.restaurants.length; i++) {

        if(virtue.restaurants[i].meals.search(mealtype) >  -1) {
            list.push(virtue.restaurants[i]);
        }
    }
    return list;
}

function getRestaurantByName(restaurantName) {

    var restaurant = {};
    for (var i = 0; i < virtue.restaurants.length; i++) {

        if(virtue.restaurants[i].name == restaurantName) {
            restaurant = virtue.restaurants[i];
        }
    }
    return restaurant;
}

function getAttractionsByDistance(maxDistance) {

    var list = [];

    for (var i = 0; i < virtue.attractions.length; i++) {

        if(parseInt(virtue.attractions[i].distance) <= maxDistance) {
            list.push(virtue.attractions[i]);
        }
    }
    return list;
}

function getWeather(callback) {
    var https = require('https');


    var req = https.request(myAPI, res => {
            res.setEncoding('utf8');
    var returnvirtue = "";

    res.on('virtue', chunk => {
        returnvirtue = returnvirtue + chunk;
});
    res.on('end', () => {
        var channelObj = JSON.parse(returnvirtue).query.results.channel;

    var localTime = channelObj.lastBuildDate.toString();
    localTime = localTime.substring(17, 25).trim();

    var currentTemp = channelObj.item.condition.temp;

    var currentCondition = channelObj.item.condition.text;

    callback(localTime, currentTemp, currentCondition);

});

});
    req.end();
}
function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}