var reasons= [
    "Thirumal Baddam (My Dad)",
    "Madhuri Muthyala (My Mom)",
    "Sriyansai Baddam (My Brother)",
    "Shreenithi Baddam (Me)"
    ];
    var images=[
    "dad.jpg",
    "mom.jpg",
    "brother.jpg",
    "me.jpg"
    ];
    var i=0;
    function next(){
    document.getElementById("reason1").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    if(i>3){
    i=0;
    }
    }