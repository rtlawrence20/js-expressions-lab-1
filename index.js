//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//Create the variables for the data recorded
const all_temps = ["32F","25C","70F","18C","80F","15C","72F","28C","68F","20C","75F","23C","82F","30C","65F",
                    "22C","77F","26C","78F","24C","73F","21C","79F","27C","71F","19C","74F","17C","76F","29C"];
let tot_temperature_in_fahrenheit = 0; 
let tot_temperature_in_celsius = 0;
let avg_temperature_in_fahrenheit = 0; 
let avg_temperature_in_celsius = 0;

//Convert temperature from Celsius to Fahrenheit (or viceversa)
all_temps.forEach(element => {
    //Declare temporary variables during each pass of loop
    let temp_c, temp_f;
    if (element[element.length-1] === "C") {
        temp_c = parseFloat(element);
        temp_f = (temp_c * 9 / 5) + 32;
    }
    else if (element[element.length-1] === "F") {
        temp_f = parseFloat(element);
        temp_c = (temp_f - 32) * 5 / 9;
    }
    else {
        return;
    }

//Calculate total temperatures by adding to a running total
    tot_temperature_in_celsius += temp_c;
    tot_temperature_in_fahrenheit += temp_f;
});

//Calculate avg values for C and F
avg_temperature_in_fahrenheit =  tot_temperature_in_fahrenheit / all_temps.length;
avg_temperature_in_celsius =  tot_temperature_in_celsius / all_temps.length;

//export results
module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};