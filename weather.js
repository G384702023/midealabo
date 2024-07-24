let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather[0].description);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.name);

let p1 = document.querySelector('div#result');
let li = document.createElement("li");
li.textContent = "緯度:"+data.coord.lon+" 経度:"+data.coord.lat+" 天気"+data.weather[0].description
 +" 最低気温:"+data.main.temp_min+" 最高気温"+data.main.temp_max+" 湿度:"+data.main.humidity
 +" 風速:"+data.wind.speed+" 風向:"+data.wind.deg+" 都市名"+data.name;
p1.insertAdjacentElement('beforeend', li);

let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);

function sendRequest() {

 let w =document.querySelectorAll('ul#list > li');
 for(let n of w){n.remove();}
 let w2 =document.querySelector('ul#location');
 let s =document.querySelector('select#city');
 let idx =s.selectedIndex;
 let os = s.querySelectorAll('option');
 let o = os.item(idx);
 console.log('選択された ' +idx + ' 番目の option の情報:');
 console.log('  value' + o.getAttribute('value'));
 console.log('  textContent='+o.textContent);
 let id = o.getAttribute('value');

 let url = 'https://www.nishita-lab.org/web-contents/jsons/openwether/'+ id + '.json';


 axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}  

function showResult(resp){
  let date = resp.date;
  if(typeof date ==='string'){
    date =JSON.parse(date);
  }
  print(date);
}


function showError(err){
  console.log(err);
}

function finish(){
  console.log('Ajax 通信が終わりました');
}