function displayCountryName(country, name){
    let h3 = document.createElement("h3");
    h3.innerText = country + " - " + name;
    document.getElementById("name-country").appendChild(h3);
}

//displayCountryName("VietNam", "Ho Chi Minh");

function displayCondition(temp_c, status, icon){
    let img = document.createElement("img");
    img.setAttribute("src", icon);

    let h3Temp = document.createElement("h3");
    h3Temp.innerText = temp_c + "độ C";

    let h3Status = document.createElement("h3");
    h3Status.innerText = "Trạng Thái:" + status;

    let div = document.createElement("div");
    div.appendChild(h3Temp);
    div.appendChild(h3Status);

    document.getElementById("condition").appendChild(img);
    document.getElementById("condition").appendChild(div);
}

//displayCondition(32, "Nóng qtqd", "https://cdn.weatherapi.com/weather/64x64/day/116.png")

function search(){
    let searchInput = document.getElementById("searchInput").ariaValueMax;
    alert(searchInput)
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=long%20an=${searchInput}';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84618ae1d7msh678d5482a3b38b8p1fab1djsnc01eea8259b4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url, options).then ((res) => {
console.log(res.json());
}).then((data)=>{
    displayCountryName(data.location.country,data.location.name);
    displayCondition(data.current.temp_c,data.current.condition.icon,data.current.condition.text);
})

}