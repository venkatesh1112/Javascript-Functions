////////////////////////////////////////////////////
// Asychronous using XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.flags.png);
  });
};

getCountryData("portugal");
getCountryData("india");
getCountryData("usa");

/*
  In the above code we couldn't get proper order of results. There will a minor delay in each call. 
*/
