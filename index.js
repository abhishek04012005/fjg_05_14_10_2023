



function handleClick() {


    var n = document.getElementById("userInput").value;
    let l = document.getElementById("userInput2").value;
    for (let i = 1; i <= l; i++) {

        document.getElementById("demo").innerHTML += `${n} × ${i} = ${n * i}<br>`;

    }
}





document.querySelector("#btn").addEventListener("click", function () {

    if (document.getElementById("userInput").value == 0 && document.getElementById("userInput2").value == 0) {
        alert("Please fill!");
    }
    else if (document.getElementById("userInput").value == 0) {
        alert("Please fill your Number!");
    }
    else if (document.getElementById("userInput2").value == 0) {
        alert("Please fill multiple")
    }
    else {
        document.querySelector(".multiplication").style.display = "none";
        document.querySelector(".table").style.display = "block";
        document.querySelector("h1").style.display = "none";
    }
}

);

function myHand() {
    location.reload();
}



