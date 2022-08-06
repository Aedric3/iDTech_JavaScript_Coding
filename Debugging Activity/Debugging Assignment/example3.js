/**
 * Description: This program is calculating the amount of change given to the customer after buying groceries but there is a bug 
 * in the code preventing the code to run as expected. Your task is to run and debug the program using the console to print 
 * statements.
 * 
 * TODO: The program currently displays NaN in the console as the returned change. You should check and make sure the function 
 * is reading the passed parameters.
 */

function checkPoint3(){
    alert4();
    
    // TODO: Remove the bugs from the code below.
    
    function superMarket() {
        const milk = 4.99;
        const vegetables = 15.99;
        const bread = 2.99;

        let total = milk + vegetables + bread; 
        let cash = totalCash - total;

        return cash;
    }

    
    function main(totalCash) {
        let moneySpent = totalCash - superMarket();
        return totalCash - moneySpent;
    }

    let totalCash = 50.00;
    console.log("Total Cash: $" + totalCash);
    console.log("Change Return = $" + main(totalCash));


    // DO NOT CHANGE THE CODE BELOW
    if (main(totalCash) < 50) {
        alert("Awesome work! You got the system running!");
    }

}


/************************************************ DONT CHANGE THE CODE BELOW ******************************************************/
function alert4() {
    alert("The system at the supermarket doesn't seem to be working. Can you help debug the system to help calculate the total change return to the customer? Go to the example3.js file and work on checkpoint 3.");
}