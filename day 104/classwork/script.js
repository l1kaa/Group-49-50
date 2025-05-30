let submit = document.getElementById("btn-1");
let ul = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", () => {
    let inp = document.getElementById("task").value;
    let li = document.createElement("li");
    let editBtn = document.createElement("button");
    let completeBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let p = document.createElement("p");
    let div = document.createElement("div");

    p.textContent = inp;
    editBtn.textContent = "edit";
    completeBtn.textContent = "complete";
    deleteBtn.textContent = "delete";

    div.appendChild(editBtn);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    li.appendChild(p);
    li.appendChild(div);

    ul.appendChild(li);

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});