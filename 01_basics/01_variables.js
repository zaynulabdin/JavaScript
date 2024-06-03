const accountId = 1234567
let accountEmail = "zain@google.com"
var accountPassword = "1234567890"
accountCity = "Karachi"
let accoutState;

// accountId = 2 // not allowed

accountEmail = "awais@google.com"
accountPassword = "12212121"
accountCity = "RYK"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accoutState]) 