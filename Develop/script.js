// gets data for header date 
$( document ).ready(function() {
   $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

// calculation for hours in a day - trying to find a way to break down each hour and input it on the page 
const startTime = '09:00:00';
const durationInHours = '8';

const endTime = moment(startTime, 'HH:mm:ss').add(durationInHours, 'hours').format("h:mm:ss a");
// test console.log(endTime); //  returns 5:00:00 pm 
// test console.log(endTime.length); // returns 10 ?

// create hours array 
hoursFunction = () => {
    var hours = []
    var hourList = moment(startTime, 'HH:mm:ss');
    new Array(9).fill().map((acc, index) => {
        hours.push(hourList.format('h:mm A'))
        hourList = hourList.add(60, 'minutes');

        // $("#currentDay").text(moment().format("dddd, MMMM Do"));
        // for (i = 9, len = hours.length, text = ""; i < len; i++) {
        //     text += hours[i] + "<br>";
        // } 

     var row = $(`<div data-time=${hours} id='${hours}' class="row">`);
    
     // create a column
     var col1 = $('<div class="col-sm-2"> <p class="hour">' + hours + '</p>');

     //create column 2
     var col2 = $(`<div class="col-sm-8 past"><textarea id=text${hours} class="description" placeholder="Add event..."></textarea>`);        
    
     //create column 3
     var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${hours}> <i class="fas fa-save"></i> </button>`)

    // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

    // last step add rows to container
        $(".container").append(row);

    })
    return hours
    
}
console.log(hoursFunction()); // returns hour array : (9) ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]


    




