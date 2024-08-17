let arr = []

function addItem() {
    let item = document.getElementById("item").value;

    document.getElementById("result").innerHTML += `<li class="list-group-item"> ${item} </li>`;
    document.getElementById("item").value = "";
    
    arr.push([item])
    console.log(arr);
}