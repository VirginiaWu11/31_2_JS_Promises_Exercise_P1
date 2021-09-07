//Use promises to work with APIs

BASE_URL = "http://numbersapi.com/";
BASE_JSON = "?json";

//1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

axios.get(BASE_URL + "11" + BASE_JSON).then((response) => {
  console.log(response);
});

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

const fourNumArray = [3, 5, 7, 9];
const fourNumPromises = [];

for (let i = 0; i < fourNumArray.length; i++) {
  fourNumPromises.push(axios.get(BASE_URL + fourNumArray[i] + BASE_JSON));
}
Promise.all(fourNumPromises)
  .then((fourFactResponses) =>
    fourFactResponses.forEach((val) =>
      $("body").append(`<p>${val.data.text}</p>`)
    )
  )
  .catch((err) => console.log(err));

//3 Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let favoriteNumber = "11";

const fourFactPromises = [];

for (let i = 0; i < fourNumArray.length; i++) {
  fourFactPromises.push(axios.get(BASE_URL + favoriteNumber + BASE_JSON));
}
Promise.all(fourFactPromises)
  .then((fourFactResponses) =>
    fourFactResponses.forEach((val) =>
      $("body").append(`<p>${val.data.text}</p>`)
    )
  )
  .catch((err) => console.log(err));
