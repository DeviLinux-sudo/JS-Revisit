const accountId = 56789; // value stays static , cant be changed
/* Prefer using Let keyword than var , due to Block and function scope issues */
let accountEmail = "arohisaxena@xyz.com";
var accountPassword = "234678";
accountCity = "Jaipur" // can declare variable like this too
let accountState;
// accountId = 798732; // throws error
accountEmail = "devilinux@xyz.com";
accountPassword = "789903";
accountCity = "Bengaluru";
/* To print multiple variables to check their values , can use console.table */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);