let Mydate = new Date();
// console.log(typeof Mydate); //object
// console.log("My date is ", Mydate); //2023-10-26T05:33:48.660Z

// console.log(Mydate.toString()); //"Thu Oct 26 2023 10:58:02 GMT+0530 (India Standard Time)"
// console.log(Mydate.toDateString()); //"Thu Oct 26 2023"
// console.log(Mydate.toLocaleString()); //"10/26/2023, 11:01:10 AM"
// console.log(Mydate.toJSON()); //"2023-10-26T05:31:30.035Z"
// console.log(Mydate.toISOString()); //"2023-10-26T05:32:04.897Z"

//Month start with '0'

// let MycreateDate = new Date(2023, 1, 23);
// console.log("created date is", MycreateDate.toDateString()); // thu feb 2023
// let MycreateDate1 = new Date(2023, 0, 23, 5, 30);
// console.log("created date is", MycreateDate1.toLocaleString()); // 1/23/2023 5:30:00

//here month start with 1 in this structure
// yyyy-mm-dd

// let datestr = new Date("2023-2-15");
// console.log(datestr.toLocaleDateString()); //2/15/2023

// let datestr1 = new Date("01-15-2023");
// console.log(datestr1.toLocaleDateString()); //1/15/2023

let myTimestamp = Date.now();
console.log(myTimestamp);
