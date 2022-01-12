window.onload = function(){
    console.log("page loaded");
    let div1 = document.getElementById("div1");
    let h1 = div1.children[0];
    console.log("console.log(div1.children[0])");
    console.log(div1.children[0]);
    console.log("console.log(h1)");
    console.log(h1);
    console.log("console.log(h1.parentElement)");
    console.log(h1.parentElement);

    console.log(document.body.children);
    console.log(document.body.children[1].children[0].children[0]);
    let titulo = document.getElementsByTagName("h1");
    console.log(titulo);
    console.log(titulo[0]);
    console.log(titulo[1]);

    for(let h of titulo){
        console.log(h);
        h.addEventListener("click", whoisparent);
    }

    function whoisparent(e){
        let t = e.target;
        console.log(t.parentElement);
    }

    for(let h in titulo){
        console.log(h);
    }
}

