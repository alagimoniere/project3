function isLetter(str) {
    var code = str.charCodeAt(0);
    if ( ((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122)) ) {
	    // it is a letter
	    return true;
	}
    else
	return false;
}//isLetter

function nameHandler(name){
    // alert("in name handler");
    console.log("old name: "+name);
    if (isLetter(name) === false) 
	{
	    alert("Error! That is not a name! Your name can't start with that symbol");
	    document.getElementById('number').value = "";
	}
    var newName = "";
    for (var i = 0; i < name.length; i++)
	{
	    newName += name.charAt(i).toLowerCase();
	}//for
    newName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log("new name: "+newName);
    document.getElementById('FirstName').value = newName;
}//nameHandler

//created a second name handler just so I could access the value of the last name text field in an easier way
function nameHandler2(name){
    // alert("in name handler");
    console.log("old name: "+name);
    //this below method works for c style but it may not work for js
    var newName = "";
    for (var i = 0; i < name.length; i++)
	{
	    newName += name.charAt(i).toLowerCase();
	}//for
    newName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log("new name: "+newName);
    document.getElementById('LastName').value = newName;
}//handler 2


//js regular expressions
function phoneNumber() {
    console.log("entered phoneNumber");
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(document.getElementById('number').value.match(phoneno))
	{
	    console.log("phone number is formatted correctly");
	    return true;
	}//if
    else 
	{
	    alert("You have entered an invalid phone number");
	    document.getElementById('number').value = "";
	    return false;
	}//else
}//phoneNumber

var cityArray = [
 ["Abbeville", 31001],
 ["Acworth",30101, 30102],
 ["Adairsville",30103],
 ["Adel",31620],
 ["Adrian",31002],
 ["Ailey",30410],
 ["Alamo",30411],
 ["Alapaha",31622],
 ["Albany",31701, 31702, 31703, 31704, 31705, 31706, 31707, 31708],
 ["Allenhurst",31301],
 ["Allentown",31003],
 ["Alma",31510],
 ["Alpharetta",30004,30005,30009,30022,30023],
 ["Alston",30412],
 ["Alto",30510,30596],
 ["Ambrose",31512],
 ["Americus",31709,31710],
 ["Andersonville",31711],
 ["Appling",30802],
 ["Arabi",31712],
 ["Aragon",30104],
 ["Argyle",31623],
 ["Arlington",31713],
 ["Armuchee",30105],
 ["Arnoldsville",30619],
 ["Ashburn",31714],
 ["Athens",30601,30602,30603,30604,30605,30606,30607,30608,30609,30612],
 ["Atlanta",30301,30302,30303,30304,30305,30306,30307,30308,30309,30310,30311,30312,30313,30314,30315,30316,30317,30318,30319,30320,30321,30322,30324,30325,30326,30327,30328,30329,30330,30331,30332,30333,30334,30336,30337,30338,30339,30340,30341,30342,30343,30344,30345,30346,30347,30348,30349,30350,30353,30354,30355,30356,30357,30358,30359,30360,30361,30362,30364,30366,30368,30369,30370,30371,30374,30375,30376,30377,30378,30379,30380,30384,30385,30386,30387,30388,30389,30390,30392,30394,30396,30398,30399,31106,31107,31119,31126,31139,31141,31145,31146,31150,31156,31191,31192,31193,31195,31196,31197,31198,31199,39901],
 ["Attapulgus",31715],
 ["Auburn",30011],
 ["Augusta",30901,30903,30904,30905,30906,30907,30909,30910,30911,30912,30913,30914,30916,30917,30919,30999],
 ["Austell",30106, 30168],
 ["Avera",30803],
 ["Avondale Estates",30002],
 ["Axson",31624],
 ["Baconton",31716],
 ["Bainbridge",31717, 31718],
 ["Baldwin",30511],
 ["Ball Ground",30107],
 ["Barnesville",30204],
 ["Barney",31625],
 ["Bartow",30413],
 ["Barwick",31720],
 ["Baxley",31513,31515],
 ["Bellville",30414],
 ["Berlin",31722],
 ["Bethlehem",30620],
 ["Bishop",30621],
 ["Blackshear",31516],
 ["Blairsville",30512,30514],
 ["Blakely",31723],
 ["Bloomingdale",31302],
 ["Blue Ridge",30513],
 ["Bluffton",31724],
 ["Blythe",30805],
 ["Bogart",30622],
 ["Bolingbroke",31004],
 ["Bonaire",31005],
 ["Boneville",30806],
 ["Boston",31626],
 ["Bostwick",30623],
 ["Bowdon",30108],
 ["Bowdon Junction",30109],
 ["Bowersville",30516],
 ["Bowman",30624],
 ["Box Springs",31801],
 ["Braselton",30517],
 ["Bremen",30110],
 ["Brinson",31725],
 ["Bristol",31518],
 ["Bronwood",31726],
 ["Brookfield",31727],
 ["Brooklet",30415],
 ["Brooks",30205],
 ["Broxton",31519],
 ["Brunswick",31520,31521,31523,31524,31525],
 ["Buchanan",30113],
 ["Buckhead",30625],
 ["Buena Vista",31803],
 ["Buford",30515,30518,30519],
 ["Butler",31006],
 ["Byromville",31007],
 ["Byron",31008],
 ["Cadwell",31009],
 ["Cairo",31728],
 ["Calhoun",30701,30703],
 ["Calvary",31729],
 ["Camak",30807],
 ["Camilla",31730],
 ["Canon",30520],
 ["Canton",30114,30115,30627],
 ["Carnesville",30521],
 ["Carrollton",30116,30117,30118,30119],
 ["Cartersville",30120],
 ["Cassville",30123],
 ["Cataula",31804],
 ["Cave Spring",30124],
 ["Cecil",31627],
 ["Cedar Springs",31732],
 ["Cedartown",30125],
 ["Centerville",31028],
 ["Chatsworth",30705],
 ["Chauncey",31011],
 ["Cherrylog",30522],
 ["Chester",31012],
 ["Chestnut Mountain",30502],
 ["Chickamauga",30707],
 ["Chula",31733],
 ["Cisco",30708],
 ["Clarkdale",30111],
 ["Clarkesville",30523],
 ["Clarkston",30021],
 ["Claxton",30417],
 ["Clayton",30525],
 ["Clermont",30527],
 ["Cleveland",30528],
 ["Climax",31734],
 ["Clinchfield",31013],
 ["Clyo",31303],
 ["Cobb",31735],
 ["Cobbtown",30420],
 ["Cochran",31014],
 ["Cohutta",30710],
 ["Colbert",30628],
 ["Coleman",31736],
 ["Collins",30421],
 ["Colquitt",31737],
 ["Columbus",31901,31902,31903,31904,30190,31907,31908,31909,31914,31917,91993,31994,31997,31998,3199],
 ["Columbus",31902],
 ["Comer",30629],
 ["Commerce",30529,30530,30599],
 ["Concord",30206],
 ["Conley",30288],
 ["Conyers",30012,30013,30094],
 ["Coolidge",31738],
 ["Coosa",30129],
 ["Cordele",31010,31015],
 ["Cornelia",30531],
 ["Cotton",31739],
 ["Covington",30014,30015,30016],
 ["Crandall",30711],
 ["Crawford",30630],
 ["Crawfordville",30631],
 ["Crescent",31304],
 ["Culloden",31016],
 ["Cumming",30028,30040,30041],
 ["Cusseta",31805],
 ["Cuthbert",31740],
 ["Dacula",30019],
 ["Dahlonega",30533,30597],
 ["Daisy",30423],
 ["Dallas",30132,30157],
 ["Dalton",30719,30720,30721,30722],
 ["Damascus",31741],
 ["Danielsville",30633],
 ["Danville",31017],
 ["Darien",31305],
 ["Davisboro",31018],
 ["Dawson",31742],
 ["Dawsonville",30534],
 ["De Soto",31743],
 ["Dearing",30808],
 ["Decatur",30030,30031,30032,30033,30034,30035,30036,30037],
 ["Demorest",30535,30544],
 ["Denton",31532],
 ["Dewy Rose",30634],
 ["Dexter",31019],
 ["Dillard",30537],
 ["Dixie",31629],
 ["Doerun",31744],
 ["Donalsonville",31745],
 ["Douglas",31533,31534,31535],
 ["Douglasville",30133,30134,30135,30154],
 ["Dover",30424],
 ["Dry Branch",31020],
 ["Du Pont",31630],
 ["Dublin",31021,31040],
 ["Dudley",31022],
 ["Duluth",30095,30096,30097,30098,30099],
 ["East Dublin",31027],
 ["East Ellijay",30539],
 ["Eastanollee",30538],
 ["Eastman",31023],
 ["Eatonton",31024],
 ["Eden",31307],
 ["Edison",31746],
 ["Elberton",30635],
 ["Elko",31025],
 ["Ellabell",31308],
 ["Ellaville",31806],
 ["Ellenton",31747],
 ["Ellenwood",30294],
 ["Ellerslie",31807],
 ["Ellijay",30540],
 ["Emerson",30137],
 ["Enigma",31749],
 ["Epworth",30541],
 ["Esom Hill",30138],
 ["Eton",30724],
 ["Evans",30809],
 ["Experiment",30212],
 ["Fairburn",30213],
 ["Fairmount",30139],
 ["Fairmount",30139],
 ["Fargo",31631],
 ["Farmington",30638],
 ["Fayetteville",30214,30215],
 ["Felton",30140],
 ["Fitzgerald",31750],
 ["Fleming",31309],
 ["Flintstone",30725],
 ["Flovilla",30216],
 ["Flowery Branch",30542],
 ["Folkston",31537],
 ["Forest Park",30297,30298],
 ["Forsyth",31029],
 ["Fort Benning",31905,31995],
 ["Fort Gaines",31751],
 ["Fort Oglethorpe",30742],
 ["Fort Stewart",31314,31315],
 ["Fort Valley",31030],
 ["Fortson",31808],
 ["Fowlstown",31752],
 ["Franklin",30217],
 ["Franklin Springs",30639],
 ["Funston",31753],
 ["Gainesville",30501,30503,30504,30506,30507],
 ["Garfield",30425],
 ["Gay",30218],
 ["Geneva",31810],
 ["Georgetown",31754],
 ["Gibson",30810],
 ["Gillsville",30543],
 ["Girard",30426],
 ["Glenn",30219],
 ["Glennville",30427],
 ["Glenwood",30428],
 ["Good Hope",30641],
 ["Gordon",31031],
 ["Gough",30811],
 ["Gracewood",30812],
 ["Grantville",30220],
 ["Gray",31032],
 ["Grayson",30017],
 ["Graysville",30726],
 ["Greensboro",30642],
 ["Greenville",30222],
 ["Griffin",30223,30224],
 ["Grovetown",30813],
 ["Guyton",31312],
 ["Haddock",31033],
 ["Hagan",30429],
 ["Hahira",31632],
 ["Hamilton",31811],
 ["Hampton",30228],
 ["Haralson",30229],
 ["Hardwick",31034],
 ["Harlem",30814],
 ["Harrison",31035],
 ["Hartsfield",31756],
 ["Hartwell",30643],
 ["Hawkinsville",31036],
 ["Hazlehurst",31539],
 ["Helen",30545],
 ["Helena",31037],
 ["Hephzibah",30815],
 ["Hiawassee",30546],
 ["High Shoals",30645],
 ["Hillsboro",31038],
 ["Hinesville",31310,31313],
 ["Hiram",30141],
 ["Hoboken",31542],
 ["Hogansville",30230],
 ["Holly Springs",30142],
 ["Homer",30547],
 ["Homerville",31634],
 ["Hortense",31543],
 ["Hoschton",30548],
 ["Howard",31039],
 ["Hull",30646],
 ["Ideal",31041],
 ["Ila",30647],
 ["Inman",30232],
 ["Iron City",31759],
 ["Irwinton",31042],
 ["Irwinville",31760],
 ["Jackson",30233],
 ["Jacksonville",31544],
 ["Jakin",31761],
 ["Jasper",30143],
 ["Jefferson",30549],
 ["Jeffersonville",31044],
 ["Jekyll Island",31527],
 ["Jenkinsburg",30234],
 ["Jersey",30018],
 ["Jesup",31545,31546,31598,31599],
 ["Jewell",31045],
 ["Jonesboro",30236,30237,30238],
 ["Juliette",31046],
 ["Junction City",31812],
 ["Kathleen",31047],
 ["Kennesaw",30144,30152],
 ["Keysville",30816],
 ["Kings Bay",31547],
 ["Kingsland",31548],
 ["Kingston",30145],
 ["Kite",31049],
 ["Knoxville",31050],
 ["La Fayette",30728],
 ["Lagrange",30240,30241,30261],
 ["Lake Park",31636],
 ["Lakeland",31635],
 ["Lakemont",30552],
 ["Lavonia",30553],
 ["Lawrenceville",30042,30043,30044,30045,30046],
 ["Leary",31762],
 ["Lebanon",30146],
 ["Leesburg",31763],
 ["Lenox",31637],
 ["Leslie",31764],
 ["Lexington",30648],
 ["Lilburn",30047,30048],
 ["Lilly",31051],
 ["Lincolnton",30817],
 ["Lindale",30147],
 ["Lithia Springs",30122],
 ["Lithonia",30038,30058],
 ["Lizella",31052],
 ["Locust Grove",30248],
 ["Loganville",30052],
 ["Lookout Mountain",30750],
 ["Louisville",30434],
 ["Louvale",31814],
 ["Lovejoy",30250],
 ["Ludowici",31316],
 ["Lula",30554],
 ["Lumber City",31549],
 ["Lumpkin",31815],
 ["Luthersville",30251],
 ["Lyerly",30730],
 ["Lyons",30436],
 ["Mableton",30126],
 ["Macon",31201,31202,31203,31204,31205,31206,31207,31208,31209,31210,31211,31212,31213,31216,31217,31220,31221,31294,31295,31296,31297,31298,31299],
 ["Madison",30650],
 ["Manassas",30438],
 ["Manchester",31816],
 ["Manor",31550],
 ["Mansfield",30055],
 ["Marble Hill",30148],
 ["Marietta",30006,30007,30008,30060,30061,30062,30063,30034,30065,30066,30067,30068,30069,30090],
 ["Marshallville",31057],
 ["Martin",30557],
 ["Matthews",30818],
 ["Mauk",31058],
 ["Maxeys",30671],
 ["Maysville",30558],
 ["Mc Caysville",30555],
 ["Mc Intyre",31054],
 ["Mc Rae",31055],
 ["McDonough",30252,30253],
 ["Meansville",30256],
 ["Meigs",31765],
 ["Meldrim",31318],
 ["Menlo",30731],
 ["Meridian",31319],
 ["Mershon",31551],
 ["Mesena",30819],
 ["Metter",30439],
 ["Midland",31820],
 ["Midville",30441],
 ["Midway",31320],
 ["Milan",31060],
 ["Milledgeville",31061,31062],
 ["Millen",30442],
 ["Millwood",31552],
 ["Milner",30257],
 ["Mineral Bluff",30559],
 ["Mitchell",30820],
 ["Molena",30258],
 ["Monroe",30655,30656],
 ["Montezuma",31063],
 ["Monticello",31064],
 ["Montrose",31065],
 ["Moreland",30259],
 ["Morgan",31766],
 ["Morganton",30560],
 ["Morris",31767],
 ["Morrow",30260,30287],
 ["Morven",31638],
 ["Moultrie",31768,31776],
 ["Mount Airy",30563],
 ["Mount Berry",30149],
 ["Mount Vernon",30445],
 ["Mount Zion",30150],
 ["Mountain City",30562],
 ["Murrayville",30564],
 ["Musella",31066],
 ["Mystic",31769],
 ["Nahunta",31553],
 ["Nashville",31639],
 ["Naylor",31641],
 ["Nelson",30151],
 ["Newborn",30056],
 ["Newington",30446],
 ["Newnan",30263,30264,30265,30271],
 ["Newton",31770],
 ["Nicholls",31554],
 ["Nicholson",30565],
 ["Norcross",30003,30010,30071,30091,30092,30093],
 ["Norman Park",31771],
 ["Norristown",30447],
 ["North Metro",30026,30029],
 ["Norwood",30821],
 ["Nunez",30448],
 ["Oakfield",31772],
 ["Oakman",30732],
 ["Oakwood",30566],
 ["Ochlocknee",31773],
 ["Ocilla",31774],
 ["Oconee",31067],
 ["Odum",31555],
 ["Offerman",31556],
 ["Offerman",31556],
 ["Oglethorpe",31068],
 ["Oliver",30449],
 ["Omaha",31821],
 ["Mount Vernon",30445],
 ["Mount Zion",30150],
 ["Mountain City",30562],
 ["Murrayville",30564],
 ["Musella",31066],
 ["Mystic",31769],
 ["Nahunta",31553],
 ["Nashville",31639],
 ["Naylor",31641],
 ["Nelson",30151],
 ["Newborn",30056],
 ["Newington",30446],
 ["Newnan",30263],
 ["Newton",31770],
 ["Nicholls",31554],
 ["Norcross",30003],
 ["Norman Park",31771],
 ["Norristown",30447],
 ["North Metro",30026],
 ["Norwood",30821],
 ["Nunez",30448],
 ["Oakfield",31772],
 ["Oakman",30732],
 ["Oakwood",30566],
 ["Ochlocknee",31773],
 ["Ocilla",31774],
 ["Oconee",31067],
 ["Odum",31555],
 ["Offerman",31556],
 ["Oglethorpe",31068],
 ["Oliver",30449],
 ["Omaha",31821],
 ["Omega",31775],
 ["Orchard Hill",30266],
 ["Oxford",30054],
 ["Palmetto",30268],
 ["Parrott",31777],
 ["Patterson",31557],
 ["Pavo",31778],
 ["Peachtree City",30269],
 ["Pearson",31642],
 ["Pelham",31779],
 ["Pembroke",31321],
 ["Pendergrass",30567],
 ["Perkins",30822],
 ["Perry",31069],
 ["Pine Lake",30072],
 ["Pine Mountain",31822],
 ["Pine Mountain Valley",31823],
 ["Pinehurst",31070],
 ["Pineview",31071],
 ["Pitts",31072],
 ["Plainfield",31073],
 ["Plains",31780],
 ["Plainville",30733],
 ["Pooler",31322],
 ["Portal",30450],
 ["Porterdale",30070],
 ["Poulan",31781],
 ["Powder Springs",30127],
 ["Preston",31824],
 ["Pulaski",30451],
 ["Putney",31782],
 ["Quitman",31643],
 ["Rabun Gap",30568],
 ["Ranger",30734],
 ["Ray City",31645],
 ["Rayle",30660],
 ["Rebecca",31783],
 ["Red Oak",30272],
 ["Redan",30074],
 ["Register",30452],
 ["Reidsville",30453,30499],
 ["Rentz",31075],
 ["Resaca",30735],
 ["Rex",30273],
 ["Reynolds",31076],
 ["Rhine",31077],
 ["Riceboro",31323],
 ["Richland",31825],
 ["Richmond Hill",31324],
 ["Rincon",31326],
 ["Ringgold",30736],
 ["Rising Fawn",30738],
 ["Riverdale",30274,30296],
 ["Roberta",31078],
 ["Rochelle",31079],
 ["Rock Spring",30739],
 ["Rockledge",30454],
 ["Rockmart",30153],
 ["Rocky Face",30740],
 ["Rocky Ford",30455],
 ["Rome",30161,30162,30163,30164,30165],
 ["Roopville",30170],
 ["Rossville",30741],
 ["Roswell",30075,30076,30077],
 ["Royston",30662],
 ["Rupert",31081],
 ["Rutledge",30663],
 ["Rydal",30171],
 ["Saint George",31646],
 ["Saint Marys",31558],
 ["Saint Simons Island",31522],
 ["Sale City",31784],
 ["Sandersville",31082],
 ["Sapelo Island",31327],
 ["Sardis",30456],
 ["Sargent",30275],
 ["Sasser",31785],
 ["Sautee Nacoochee",30571],
 ["Savannah",31401,31402,31403,31404,31405,31406,31407,31408,31409,31410,31411,31412,31414,31415,31416,31418,31419,31420,31421,31422,31498,31499],
 ["Scotland",31083],
 ["Scottdale",30079],
 ["Screven",31560],
 ["Sea Island",31561],
 ["Senoia",30276],
 ["Seville",31084],
 ["Shady Dale",31085],
 ["Shannon",30172],
 ["Sharon",30664],
 ["Sharpsburg",30277],
 ["Shellman",31786],
 ["Shiloh",31826],
 ["Siloam",30665],
 ["Silver Creek",30173],
 ["Smarr",31086],
 ["Smithville",31787],
 ["Smyrna",30080,30081,30082],
 ["Snellville",30039,30078],
 ["Social Circle",30025],
 ["Soperton",30457],
 ["Sparks",31647],
 ["Sparta",31087],
 ["Springfield",31329],
 ["Stapleton",30823],
 ["Statenville",31648],
 ["Statesboro",30458,30459,30460,30461],
 ["Statham",30666],
 ["Stephens",30667],
 ["Stillmore",30464],
 ["Stockbridge",30281],
 ["Stockton",31649],
 ["Stone Mountain",30083,30086,30087,30088],
 ["Suches",30572],
 ["Sugar Valley",30746],
 ["Summerville",30747],
 ["Sumner",31789],
 ["Sunny Side",30284],
 ["Surrency",31563],
 ["Suwanee",30024],
 ["Swainsboro",30401],
 ["Sycamore",31790],
 ["Sylvania",30467],
 ["Sylvester",31791],
 ["Talbotton",31827],
 ["Talking Rock",30175],
 ["Tallapoosa",30176],
 ["Tallulah Falls",30573],
 ["Talmo", 30575],
 ["Tarrytown",30470],
 ["Tate",30177],
 ["Taylorsville",30178],
 ["Temple",30179],
 ["Tennga",30751],
 ["Tennille",31089],
 ["The Rock",30285],
 ["Thomaston",30286],
 ["Thomasville",31757,31758,31792,31799],
 ["Thomson",30824],
 ["Tifton",31793,31794],
 ["Tiger",30576],
 ["Tignall",30668],
 ["Toccoa",30577],
 ["Toccoa Falls",30598],
 ["Toomsboro",31090],
 ["Townsend",31331],
 ["Trenton",30752],
 ["Trion",30753],
 ["Tucker",30084,30085],
 ["Tunnel Hill",30755],
 ["Turin",30289],
 ["Turnerville",30580],
 ["Twin City",30471],
 ["Ty Ty",31795],
 ["Tybee Island",31328],
 ["Tyrone",30290],
 ["Unadilla",31091],
 ["Union City",30291],
 ["Union Point",30669],
 ["Upatoi",31829],
 ["Uvalda",30473],
 ["Valdosta",31601,31602,31603,31604,31605,31606,31698,31699],
 ["Varnell",30756],
 ["Vidalia",30474,30475],
 ["Vienna",31092],
 ["Villa Rica",30180],
 ["Waco",30182],
 ["Wadley",30477],
 ["Waleska",30183],
 ["Walthourville",31333],
 ["Waresboro",31564],
 ["Warm Springs",31830],
 ["Warner Robins",31088,31093,31095,31098,31099],
 ["Warrenton",30828],
 ["Warthen",31094],
 ["Warwick",31796],
 ["Washington",30673],
 ["Watkinsville",30677],
 ["Waverly",31565],
 ["Waverly Hall",31831],
 ["Waycross",31501,31502,31503],
 ["Waynesboro",30830],
 ["Waynesville",31566],
 ["West Green",31567],
 ["West Point",31833],
 ["Weston",31832],
 ["Whigham",31797],
 ["White",30184],
 ["White Oak",31568],
 ["White Plains",30678],
 ["Whitesburg",30185],
 ["Wildwood",30757],
 ["Wiley",30581],
 ["Willacoochee",31650],
 ["Williamson",30292],
 ["Winder",30680],
 ["Winston",30187],
 ["Winterville",30683],
 ["Woodbine",31569],
 ["Woodbury",30293],
 ["Woodland",31836],
 ["Woodstock",30188,30189],
 ["Wray",31798],
 ["Wrens",30833],
 ["Wrightsville", 31096],
 ["Yatesville",31097],
 ["Young Harris",30582],
 ["Zebulon",30295]
];

//var to hold city list as a string for the autocomplete function
var cityListString = "";
for(var counter = 0; counter<cityArray.length;counter++){
	cityListString += cityArray[counter][0];
	cityListString += " ";
}//for

//zipCode handler
function zipCode()
{
	
    var cityName = document.getElementById('CITY').value;
    var cityZips = [];
	//Esa's code here
	//THESE LOG STATEMENTS ARE FOR TESTING
	/*
	console.log(cityName);
	console.log(cityArray[2][0].toUpperCase());
	console.log(cityName.toUpperCase() == cityArray[2][0].toUpperCase());
	*/

	var matchingIndex;
	for(var i = 0; i < cityArray.length; i++){
        //for some reason this code below isn't working even though it should be -- I checked with console log statements
		if(cityName/*.toUpperCase()*/ == cityArray[i][0]/*.toUpperCase()*/){
			matchingIndex = i; //saves the index where city was matched with list
			for(var j = 0; j < cityArray[i].length; j++){
            	cityZips.push(cityArray[i][j]);
				console.log(cityZips[j]); //lists area codes at that length
			}//for
			break; //break from loop to save time
		}//if
		//make sure this else if checks for i to be at the end of the list
		else if(i == cityArray.length - 1 && cityName != cityArray[i][0]){
			alert("That is not a valid city, make sure you capitilize the first letter of the city!");
			document.getElementById('CITY').value = "";
			break;
		}//else
	}//for


	var menu = document.getElementById("MENU");
	//remove elements from menu that may have existed from a previous method call
    for(var i=menu.options.length-1;i>=0;i--)
        menu.remove(i);

    //create and add the options
	var option;
	//start at 1 to skip city name
	for (var i = 1; i < cityZips.length; i++) {
		option = document.createElement("option");
		option.text = cityZips[i];
		menu.add(option);
	}//for
}//zipcoude

//TODO: Implement
var instanceCount = 0;
var tempArray = [];
function autoComplete()
{
	if(instanceCount == 1)
	{
		document.getElementById('CITY').value = tempArray[0];
		tempArray = [];
		instanceCount = 0;
		zipCode()
		return;
	}
	instanceCount =0;
	tempArray = [];
	var userInput = document.getElementById('CITY').value;
	userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1); //make first letter uppercase to match with cities
    for(var x = 0; x < 664; x++)
	{
		if(cityArray[x][0].substring(0,userInput.length)== userInput)
		{
			tempArray.push(cityArray[x][0]);
			instanceCount++;
		}//if
	}//for
	
	console.log("TEMP ARRAY: "+tempArray.toString());
	console.log("ID: "+document.getElementById('CITY').value);
	
	
	/*
	//Josh's code
	//TODO: fix errors, code is never really making it past line 797 because for loop doesn't do anything
	var userInput = document.getElementById('CITY').value;
	userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1); //make first letter uppercase to match with cities
    var nameMatch = " ";
    var searchWorked = false;

    //for loop to find match
    //this for loop never enters because nameMatch.length is always 1
    //console.log("nameMatch.length: "+nameMatch.length);
    for(var counter = 0; counter < nameMatch.length; counter++){
		nameMatch = cityListString.match(userInput) 
		if (nameMatch == null) 
		{
			console.log("NAME MATCH == NULL");
			break;
		}//if
		//console.log("nameMatch = "+nameMatch);
	}//for
	//for loop to search through array
	if (nameMatch != null){
		for(var counter1 = 0; counter1 < cityArray.length; counter1++){
			for(var counter2 = 0; counter2 < nameMatch.length && counter2<cityArray[counter1][0].length; counter2++){
				//console.log("nameMatch.charAt(counter2): "+nameMatch[counter2]);
				//console.log("cityArray[counter1][0].length: "+cityArray[counter1][0].length);
				//console.log("nameMatch.charAt(counter2): "+nameMatch.charAt(counter2));
				//console.log("nameMatch.charAt(counter1): "+cityArray[counter1][0]);
				//console.log("cityArray[counter1][0].charAt(counter2): "+cityArray[counter1][0].charAt(counter2));
				if(nameMatch[counter2] == cityArray[counter1][0].charAt(counter2)){
					//console.log("name matched at counter2 -- if statement");
					if(nameMatch.length==counter2){
						//console.log("name matched == counter2 -- if statement");
						nameMatch = cityArray[counter1][0];
						searchWorked=true;
						break;
					}//if
					else{
						continue;
					}//else

				}//if
				else{
					break;
				}//else
			}//for
			if (counter1 == cityArray.length-1)
				console.log("end of city array");
			if(searchWorked==true){
				console.log("search worked");
				break;
			}
		}//for
	 	if(searchWorked){
	 		console.log("search worked");
	 		document.getElementById('CITY').value=nameMatch;
	 	}//if
 	}//if nameMatch == null
 	else{
 		alert("that is not a valid city");
 		document.getElementById('CITY').value="";
 	}
 	*/
}//autoComplete

//TODO: implement cities and zip codes
//for cities use the event code "on key up" in HTML

