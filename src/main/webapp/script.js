console.log("Hello from new project");
const persons = ["Arne","Thorbjorn","SANTA MONICA THE LIBERATOR"];
const root = document.getElementById("root");
const btn1 = document.getElementById("btn1");
const url = "https://api.chucknorris.io/jokes/random";
btn1.onclick = function (){
    //const p = persons.map(el=>'<li>' + el + '</li>');
    //const p = persons.map(function(el){return '<li>'+el+'</li>';});
    //console.log("Någon klickade på mig");
    //root.innerHTML = '<ul>'+ p.join("")+'</ul>';
    fetch(url)
        .then(response => response.json()
        .then(data => root.innerHTML = (data.value)
))
}



