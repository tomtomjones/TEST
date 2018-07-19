





//gets the index of the postcode the user selects
function functionfindArrayIndex(arraytosearch, key, valuetosearch) {

    for (var i = 0; i < arraytosearch.length; i++) {

        if (arraytosearch[i][key] == valuetosearch) {
            return i;
        }
    }
return null;
}  

//made my own indexOf because it's not supported by all older browsers
function functionGetIndexOf(arrayLength, elementToFind, arrayToSearch) {
    
    for (i=0; i < arrayLength; i++) {
        
        if (arrayLength == 0) {
            return -2;
        } 
        
        else if(arrayToSearch[i] == elementToFind){
            return i;
        }
    };
    
    return -1;
    
}





$(document).ready(function () {

    var postcodeArray = new Array(); //stores the postcodes that are inserted in the #right-header
    
    $("#right-header").click(function(item){
  
        //get the value of the span we've selected in the header
        //then remove it from the html of the right-header
        var deleteItem = $(item.target).text();
        deleteItem = deleteItem.replace(/\, /g, "") //remove the comma and the space
        $("span[id="+deleteItem+"]").remove();

        //made my own indexOf because it's not supported by all older browsers
        //this removes the element from the array we use to calculate all the counts
        var myIndexOf = functionGetIndexOf(postcodeArray.length, deleteItem, postcodeArray);
        postcodeArray.splice(myIndexOf,1);
     
        
    });
    
// .PC is the class of 
    $(".PC").click(function(){
        
        var checkValueExists  = functionGetIndexOf(postcodeArray.length, $(this).text(), postcodeArray);
        if (checkValueExists < 0 || postcodeArray.length == 0 ) {
        
            postcodeArray.push($(this).text());
            console.log(postcodeArray);  
        
        
        
        var checkHeader = $('.header h1');
        checkHeader.empty();
//        checkHeader.css("visibility", "hidden");

        var postcode =  $(this).text();
        var header = $("#right-header").text();
        

        var postcodeAdd =  postcode + ', ' + postcodeAdd;
        $("#right-header").append("<span id='" + postcode + "'>" + postcode + ", "  + "</span>");
        
//        var postcodeAdd =  postcode + ', ' + header;
//        $("#right-header").text(postcodeAdd);
        } else {
            return;
        } //end of if statement checking if element already exists
    });


//    
//  action event listener for the GO button    
//    
  $('#test').click(function () {
    var showData = $('#json-output'); //store intial header in variable to remove later

//  pull the json file and loop through all the postcodes that have been selected
    $.getJSON('json/jsonPostcodesAll_.json', function (data) {    
      
      console.log(data);
      var areaKey = data.area[0].key;
      var indexKey = functionfindArrayIndex(data.area, "key", "LL");
//      console.log(indexKey);
//      console.log(data.area.length);
      
        
        
      var jsonLength = data.area.length;
      
        
        
//        May decide on showing this again. Displays all postcodes into table
//      //populate all postcodes into table
//      for (var i = 0; i < jsonLength; i++) {
//          var items = data.area[""+ i +""].employees;
//          var turn = data.area[""+ i +""].turnover;
//          var startup = data.area[""+ i +""].startupWeek;
//          var active_comp = data.area[""+ i +""].active_companies;
//
//        var content = '<td>' 
//                      + items + '</td><td>'
//                      + turn + '</td><td>'
//                      + startup + '</td><td>'
//                      + active_comp + '</td>';
//        showData.append($('<tr />').html(content));
//
//      } //end of the loop to get all areas
      
        
        
 

            
//  the function that checks the current loop iteration value and assigns the value to it     
        
      function sumItemValue (indexNumber, dataset)  {
          var sumOfItem1 = 0;  
//                  console.log(indexNumber + " : " + arrayItem);
//          holdSelectAreas.push(indexNumber);
          if (dataset == "employees") {
              var latestItem1 = data.area[""+ indexNumber +""].employees;
//              return latestItem1;
          } else if (dataset == "turnover") {
              var latestItem1 = data.area[""+ indexNumber +""].turnover;
//              return latestItem1;
          } else if (dataset == "startupWeek") {
              var latestItem1 = data.area[""+ indexNumber +""].startupWeek;
//              return latestItem1;
          } else if (dataset == "active_companies") {
              var latestItem1 = data.area[""+ indexNumber +""].active_companies;

          } else if (dataset == "telephone") {
              var latestItem1 = data.area[""+ indexNumber +""].telephone;
          
          } else if (dataset == "telephone_tps") {
              var latestItem1 = data.area[""+ indexNumber +""].telephone_tps;

          } else if (dataset == "insolvencies") {
              var latestItem1 = data.area[""+ indexNumber +""].insolvencies;
       
           } else if (dataset == "ccj") {
              var latestItem1 = data.area[""+ indexNumber +""].ccj;
      
          } else if (dataset == "ccj_value") {
              var latestItem1 = data.area[""+ indexNumber +""].ccj_value;
       
          } else if (dataset == "bad_debt") {
              var latestItem1 = data.area[""+ indexNumber +""].bad_debt;
        
          } else if (dataset == "bad_debt_value") {
              var latestItem1 = data.area[""+ indexNumber +""].bad_debt_value;

          }        
        
        
        
        
          sumOfItem1 += latestItem1;
          return sumOfItem1;
      }; // end of sumItemValue function

        
        
      var sumEmployees = 0;
      var sumTurnover = 0;
      var sumStartup = 0;
      var sumActive = 0;
      var sumTelephone = 0;
      var sumTelTps = 0;
      var sumInsolvencies = 0;
      var sumCcjCount = 0;
      var sumCcj_value = 0;      
      var sumBadDebt = 0;
      var sumBadDebtValue = 0;
        
        
        
 // for each item(postcode selected) in the arrayItem loop through and add up the relevant figures. triggers the function above to find the selected postcode and another to trigger the sumItemValue.
        
      postcodeArray.forEach(function(arrayItem) {
          
      var indexOfPostcode = functionfindArrayIndex(data.area, "key", arrayItem);
      sumEmployees += sumItemValue(indexOfPostcode, 'employees');             
//      var indexOfPostcode = functionfindArrayIndex(data.area, "turnover", arrayItem);
      sumTurnover += sumItemValue(indexOfPostcode, 'turnover'); 
      sumStartup += sumItemValue(indexOfPostcode, 'startupWeek');
      sumActive += sumItemValue(indexOfPostcode, 'active_companies');
      sumTelephone += sumItemValue(indexOfPostcode, 'telephone'); 
          
      sumTelTps += sumItemValue(indexOfPostcode, 'telephone_tps');
          
      sumInsolvencies += sumItemValue(indexOfPostcode, 'insolvencies');
          
      sumBadDebt += sumItemValue(indexOfPostcode, 'bad_debt');
      sumCcj_value += sumItemValue(indexOfPostcode, 'ccj_value');     
      sumCcjCount += sumItemValue(indexOfPostcode, 'ccj');
      sumBadDebtValue += sumItemValue(indexOfPostcode, 'bad_debt_value');           
     
      });

//  This part displays the data in the span fields of the website
        
      console.log(sumEmployees.toLocaleString());    
      console.log(sumTurnover);    
      console.log(sumStartup);    
      console.log(sumActive);    
      $('#disEmployees').text(sumEmployees.toLocaleString());
      $('#disTurnover').text(sumTurnover.toLocaleString());
      $('#disStartups').text(sumStartup.toLocaleString());
      $('#disActive').text(sumActive.toLocaleString());
      
      $('#disTel').text(sumTelephone.toLocaleString());
      $('#disTelTps').text(sumTelTps.toLocaleString());
      $('#disInsolvency').text(sumInsolvencies.toLocaleString());
        
      $('#disBadDebt').text(sumBadDebt.toLocaleString());        
      $('#disCcj').text(sumCcjCount.toLocaleString());
      $('#disCcjVal').text(sumCcj_value.toLocaleString());
      $('#disBadDebtVal').text(sumBadDebtValue.toLocaleString());



    }); //end of getJson
 

// populates the fields for monthly counts
      
    $.getJSON('json/jsonPostcodesAllMonthly.json', function (data) {    
      
      console.log(data);
      var areaKey = data.area[0].key;
      var indexKey = functionfindArrayIndex(data.area, "key", "LL");
//      console.log(indexKey);
//      console.log(data.area.length);
      
        
        
      var jsonLength = data.area.length;
         
//  the function that checks the current loop iteration value and assigns the value to it     
        
      function sumItemValue (indexNumber, dataset)  {
          var sumOfItem1 = 0;  
//                  console.log(indexNumber + " : " + arrayItem);
//          holdSelectAreas.push(indexNumber);
          if (dataset == "employees") {
              var latestItem1 = data.area[""+ indexNumber +""].employees;
//              return latestItem1;
          } else if (dataset == "turnover") {
              var latestItem1 = data.area[""+ indexNumber +""].turnover;
//              return latestItem1;
          } else if (dataset == "startupWeek") {
              var latestItem1 = data.area[""+ indexNumber +""].startupWeek;
//              return latestItem1;
          } else if (dataset == "active_companies") {
              var latestItem1 = data.area[""+ indexNumber +""].active_companies;

          } else if (dataset == "telephone") {
              var latestItem1 = data.area[""+ indexNumber +""].telephone;
          
          } else if (dataset == "telephone_tps") {
              var latestItem1 = data.area[""+ indexNumber +""].telephone_tps;

          } else if (dataset == "insolvencies") {
              var latestItem1 = data.area[""+ indexNumber +""].insolvencies;
       
           } else if (dataset == "ccj") {
              var latestItem1 = data.area[""+ indexNumber +""].ccj;
      
          } else if (dataset == "ccj_value") {
              var latestItem1 = data.area[""+ indexNumber +""].ccj_value;
       
          } else if (dataset == "bad_debt") {
              var latestItem1 = data.area[""+ indexNumber +""].bad_debt;
        
          } else if (dataset == "bad_debt_value") {
              var latestItem1 = data.area[""+ indexNumber +""].bad_debt_value;

          }        
         
          sumOfItem1 += latestItem1;
          return sumOfItem1;
      }; // end of sumItemValue function
    
      var sumEmployees = 0;
      var sumTurnover = 0;
      var sumStartup = 0;
      var sumActive = 0;
      var sumTelephone = 0;
      var sumTelTps = 0;
      var sumInsolvencies = 0;
      var sumCcjCount = 0;
      var sumCcj_value = 0;      
      var sumBadDebt = 0;
      var sumBadDebtValue = 0;
        
        
        
 // for each item(postcode selected) in the arrayItem, loop through and add up the relevant figures. triggers the function above to find the selected postcode and another to trigger the sumItemValue.
        
      postcodeArray.forEach(function(arrayItem) {   
      var indexOfPostcode = functionfindArrayIndex(data.area, "key", arrayItem);
      sumEmployees += sumItemValue(indexOfPostcode, 'employees');       
      sumTurnover += sumItemValue(indexOfPostcode, 'turnover'); 
      sumStartup += sumItemValue(indexOfPostcode, 'startupWeek');
      sumActive += sumItemValue(indexOfPostcode, 'active_companies');
      sumTelephone += sumItemValue(indexOfPostcode, 'telephone'); 
          
      sumTelTps += sumItemValue(indexOfPostcode, 'telephone_tps');
          
      sumInsolvencies += sumItemValue(indexOfPostcode, 'insolvencies');
          
      sumBadDebt += sumItemValue(indexOfPostcode, 'bad_debt');
      sumCcj_value += sumItemValue(indexOfPostcode, 'ccj_value');     
      sumCcjCount += sumItemValue(indexOfPostcode, 'ccj');
      sumBadDebtValue += sumItemValue(indexOfPostcode, 'bad_debt_value');           
     
      });

//  This part displays the data in the span fields of the website
        
      console.log(sumEmployees.toLocaleString());    
      console.log(sumTurnover);    
      console.log(sumStartup);    
      console.log(sumActive);    
//      $('#disEmployees').text(sumEmployees.toLocaleString());
//      $('#disTurnover').text(sumTurnover.toLocaleString());
      $('#disStartupsMonth').text(sumStartup.toLocaleString());
//      $('#disActive').text(sumActive.toLocaleString());
     
//      $('#disTel').text(sumTelephone.toLocaleString());
//      $('#disTelTps').text(sumTelTps.toLocaleString());
      $('#disInsolvencyMonth').text(sumInsolvencies.toLocaleString());
        
      $('#disBadDebtMonth').text(sumBadDebt.toLocaleString());        
      $('#disCcjMonth').text(sumCcjCount.toLocaleString());
      $('#disCcjValMonth').text(sumCcj_value.toLocaleString());
      $('#disBadDebtValMonth').text(sumBadDebtValue.toLocaleString());



    }); //end of getJson      
      
      
      
  $( function() {
      $( "#accordion1" ).children().hide();

  } );
      
    
  }); //end of button click listener

    
    
    
    
    
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
        
    });
  } );
    
    
    
    
    
});









//Keep as orignial that works
//$(document).ready(function () {
//  $('#test').click(function () {
//    var showData = $('#json-tables');
//
////    $.getJSON('http://0.0.0.0:8000/Creditsafe/json/jsonTest.json', function (data){
//    $.getJSON('json/jsonTest.json', function (data) {    
//      console.log(data);
//
//      var items1 = data.items.map(function (item) {
//        console.log(item.key + ': ' + item.value);
//        return item.key + ': ' + item.value;
//      });
//
//      showData.empty();
//
//      if (items1.length) {
//        var content = '<li>' + items1.join('</li><li>') + '</li>';
//        var list = $('<ul />').html(content);
//        showData.append(list);
//        console.log(list);
//      }
//    });
////    console.log(showData.text());
//    showData.text('Loading the JSON file.');
//  });
//});

//
//This version works. just holding on to it
//
//$(document).ready(function () {
//  $('#test').click(function () {
//    var showData = $('#json-tables');
//
//    $.getJSON('json/jsonPostcodes.json', function (data) {    
//      console.log(data);
//      
//      var count = 0
//        
//      var items = data.area.map(function (item1) {
//          console.log(data.area[""+ count +""].employees);
//          return item1.employees;
////        return item.key + ': ' + item.value;
//      });
//      
//      var turn = data.area.map(function (item2) {
//          return item2.turnover;
////        return item.key + ': ' + item.value;
//      });
//        
//        
//      var startup = data.area.map(function (item3) {
//          return item3.startupWeek;
////        return item.key + ': ' + item.value;
//      });
//        
//        
//      var active_comp = data.area.map(function (item4) {
//          return item4.active_companies;
////        return item.key + ': ' + item.value;
//      });
//        
//        
//        
//        
//      showData.empty();
//
//      if (items.length) {
//        var content = '<td>' 
//                      + items.join('</td><td>')
//                      + turn.join('</td><td>')
//                      + startup.join('</td><td>')
//                      + active_comp.join('</td><td>')
//                      + '</td>';
//        var list = $('<tr />').html(content);
//        showData.append(list);
//        console.log(list);
//      }
//    });
//
////    showData.text('Loading the JSON file.');
//  });
//});




