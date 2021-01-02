// gets data for header date 
$( document ).ready(function() {
   $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

// calculation for hours in a day 
const startTime = '09:00:00';
const durationInHours = '8';

const endTime = moment(startTime, 'HH:mm:ss').add(durationInHours, 'hours').format("h:mm:ss a");
// test console.log(endTime); //  returns 5:00:00 pm 
// test console.log(endTime.length); // returns 9

// create hours array 
hoursFunction = () => {
    var hours = []
    var hourList = moment(startTime, 'HH:mm:ss');
    new Array(9).fill().map((acc, index) => {
        hours.push(hourList.format('h:mm A'))
        hourList = hourList.add(60, 'minutes');

     // create table row 
     var row = $(`<div data-time=${hours} id='${hours}' class="row">`);
    
        // create a column
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + hours[hours.length - 1] + '</p>');

        //create column 2
        var col2 = $(`<div class="col-sm-8 past" id="event"><textarea id=event id=text${hours} class="description" placeholder="Add event..."></textarea>`);        

        //create column 3
        var col3 = $(`<div class="col-sm-2"><button class="save-button" id=save id=${hours}> <i class="fas fa-save"></i> </button>`)

        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // append rows to container
        $(".container").append(row);
        

        // question how to store the <teaxtarea> value to local storagedocument.getElementById("save").addEventListener("click", function () 
        //{   
            //window.localStorage.setItem("event", textarea.innerHTML);
    
        //} , false);


    })
    return hours
    
}
console.log(hoursFunction()); // returns hour array : (9) ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]


    




