// public key:da5e4cf9f6f600c4782332d4d96233fd
// private key:d6c935869a9776ec1f26028fef1448d98cdeb069
var privateKey="d6c935869a9776ec1f26028fef1448d98cdeb069"
var publicKey="da5e4cf9f6f600c4782332d4d96233fd"
var url="https://gateway.marvel.com:443/v1/public/characters"



function thaythenoidung(thongtin){
    
        var infor=thongtin.results[1];
        var img=infor.thumbnail.path+"."+infor.thumbnail.extension;
        var name=infor.name;
        var comics=infor.comics.available
        var charactersHtml=`
        <div>   
            <img src="${img}" style="height:300px; width:300px"/>
            <h2> ${name}  </h2>
            <h3> ${comics} </h3>
        </div>
        `
        console.log(charactersHtml)
        document.getElementById("container").insertAdjacentElement("beforeend", charactersHtml)
    
}
async function fetchCharacters(){
    var key = marvelKey(privateKey,publicKey)
    var fullurl = `${url}?${key}`
    console.log(fullurl)
    let respone= await fetch(fullurl);
    let data = await respone.json();
    console.log(data)
    console.log(data.data.results)
    var thongtin=data.data;
    thaythenoidung(thongtin)
    
}
fetchCharacters()

// var apiKey=marvelKey(privateKey,publicKey);
// console.log(apiKey);