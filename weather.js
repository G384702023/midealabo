

function print(data) {
  let p1 = document.querySelector('div#result');
let li = document.createElement("li");
li.textContent = "緯度:"+data.coord.lon+" 経度:"+data.coord.lat+" 天気"+data.weather[0].description
 +" 最低気温:"+data.main.temp_min+" 最高気温"+data.main.temp_max+" 湿度:"+data.main.humidity
 +" 風速:"+data.wind.speed+" 風向:"+data.wind.deg+" 都市名"+data.name;
p1.insertAdjacentElement('beforeend', li);
}

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
 console.log('  value=' + o.getAttribute('value'));
 console.log('  textContent='+o.textContent);
 let id = o.getAttribute('value');

 let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id + '.json';


 axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}  

function showResult(resp){
  let data = resp.data;
  if(typeof data ==='string'){
    data =JSON.parse(data);
  }
  print(data);
}


function showError(err){
  console.log(err);
}

function finish(){
  console.log('Ajax 通信が終わりました');
}