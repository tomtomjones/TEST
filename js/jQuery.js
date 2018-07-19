var trHTML = '';
 
var trHTML_Stats = '';
 
var DATA = [{
    "name": "test1",
    "type": "flower",
    "age": "43"
},
{
    "name": "TOM",
    "type": "MALE",
    "age": "26"
},
{
    "name": "test2",
    "type": "water",
    "age": "23"
}];
 
 
var POSTCODE_STATS = [{
    "region": "CF",
    "ccj_count": "123",
    "employee": "423",
    "turnover": "39994",
    "companies": "54632"
},
{
    "region": "SA",
    "ccj_count": "2345",
    "employee": "321",
    "turnover": "57665",
    "companies": "32670"
},
{
    "region": "NP",
    "ccj_count": "676867",
    "employee": "3255",
    "turnover": "32113",
    "companies": "64578"
}
];
 
 
 
 
 
 
window.onload = function () {
 
 
    console.log("test");
    //window.alert(DATA[0]);
    //window.alert(DATA[0].name);
    //window.alert(DATA[0].type);
    //window.alert(DATA[0].age);
    //window.alert(DATA[0].name + ' ' + DATA[0].type + ' ' + DATA[0].age);
 
    $.each(DATA, function (i, item) {
        trHTML += '<tr><td>' + DATA[i].name + '</td><td>' + DATA[i].type + '</td><td>' + DATA[i].age + '</td></tr>'
    }
    );
 
    $('#location').append(trHTML);
    //window.alert(trHTML);
   
    //("#location")
 
 
 
    $.each(POSTCODE_STATS, function (i, item) {
        trHTML_Stats += '<tr><td>' + POSTCODE_STATS[i].region + '</td><td>' + POSTCODE_STATS[i].ccj_count + '</td><td>' + POSTCODE_STATS[i].employee +
                        '</td><td>' + POSTCODE_STATS[i].turnover + '</td><td>' + POSTCODE_STATS[i].companies + '</td></tr>'
    }
    );
 
    $('#stats').append(trHTML_Stats);
 
 
    //$(':header').addClass('headline');
    //$('li:lt(1)').hide().fadeOut(1500);
    $('li.LiGroc').on('click', function () {
        //$(this).remove();
        $(this).animate({
            opacity: 0
           
        });
 
        $(this).removeClass('LiGroc');
 
    });
 
 
   
}