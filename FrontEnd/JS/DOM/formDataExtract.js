let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.log(`entered username : ${user.value}`);
    // console.log(`entered password : ${pass.value}`);
    let user = form.elements[0];
    let pass = form.elements[1];

    console.log(`Username : ${user.value}`);
    console.log(`Password : ${pass.value}`);

    alert(`Hi! ${user.value} , Your password has been set to ${pass.value}`);
});