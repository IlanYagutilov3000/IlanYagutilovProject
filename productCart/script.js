function addItem() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let describe = document.getElementById("describe").value;
    let rating = document.getElementById("rating").value;
    let yes = document.getElementById("yes").checked;

    let icon = yes ? "<i class='fas fa-check'></i>" : "<i class='fas fa-times'></i>";

    document.getElementById("products").innerHTML += `<tr><td> ${name} </td> <td> ${price} </td>
    <td> ${category} </td> <td> ${describe} </td> <td> ${rating} </td> <td> ${icon} </td> </tr>`

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("describe").value = "";
    document.getElementById("rating").value = "Rate item";
    document.getElementById("yes").checked = false;
}