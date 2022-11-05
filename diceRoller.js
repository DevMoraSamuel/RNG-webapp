function diceRolling() {

    // let randomNumber = 0;
    let numberOfDies = 0;
    let typeOfDice = 0;
    let rollingResult = Array(numberOfDies);
    let roll = 0;

    // Select the number of dies
    numberOfDies = document.getElementById("quantity").value;
    // console.log("amount of dice: " + numberOfDies);

    if (numberOfDies < 1) {
        window.alert("please select a number of dices");
        return null;
    } //end if

    // Select the dice size (amount of faces)
    typeOfDice = document.getElementById("diceDropdown").value;
    // console.log("size of dice: " + typeOfDice);

    if (typeOfDice == 0) {
        window.alert("please select a dice type");
    } //end if


    // when the number of dice is above the limit send a message
    if (numberOfDies > 10) {
        window.alert("number of dices about limit");
    } else {
        // On console, shown the values of dice by amount and type
        console.log(
            "Amount of dice: " + numberOfDies + " -",
            "Size of dice: " + typeOfDice
        );
        // Fill the array of dice results in a cycle for
        for (numberOfDies; roll < numberOfDies; roll++) {
            rollingResult[roll] = Math.floor((Math.random() * typeOfDice) + 1);
            console.log("result n" + (roll + 1) + ": " + rollingResult[roll]);
        }
        // show the result on the DOM as a line of text
        document.getElementById("diceResult").innerHTML = "<p>" + rollingResult + "</p>";
    }
    // return the result
    return rollingResult;
};