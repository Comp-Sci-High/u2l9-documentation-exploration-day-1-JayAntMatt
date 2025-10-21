// Async Functions with randomuser.me API
// ----------------------------------------------------
let runerage = "https://randomuser.me/api/"
// Define a function called fetchUserData(url)
//    - It should take a URL as a parameter
//    - Use fetch() and await the response
//    - Convert the response to JSON
//    - Log out the JSON or specific info (like name or country)
async function fetchUserData(runerage){
    const resposne = await fetch(runerage);
    const data = await resposne.json();
    console.log(data)
    return data
}
fetchUserData(runerage)

// ----------------------------------------------------
// Create a variable for each request below (reqUrl1, reqUrl2, etc.)
// Then call your fetchUserData() function with each one.
let reqUrl1 = "https://randomuser.me/api/?results=8"
let reqUrl2 = "https://randomuser.me/api/?nat=CA"
let reqUrl3 = "https://randomuser.me/api/?gender=male"
let reqUrl4 = "https://randomuser.me/api/?exe=email"
let requrl5 = "https://randomuser.me/api/?results=5&nat=FR&gender=female"
// 1 URL to Get 8 Random Users
// Call the fetchUserData function with this URL
fetchUserData(reqUrl1)


// 2 URL to Get a Random User from Canada
// Call the fetchUserData function with this URL
fetchUserData(reqUrl2)




// 3 URL to Get a Random User that’s Male
// Call the fetchUserData function with this URL
fetchUserData(reqUrl3)



// 4 URL to Get a Random User while Excluding Their Email
// Call the fetchUserData function with this URL
fetchUserData(reqUrl4)




// 5 Get 5 Female Users from the Colombia
// Call the fetchUserData function with this URL
fetchUserData(requrl5)



