const selectBtn = document.querySelector(".select-btn"),
        items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", ()=>{
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");


            if(checked && checked.length ==1){
                btnText.innerText = checked[0].innerText;
            }
            else if(checked && checked.length>0){
                btnText.innerText = `(${checked.length}) Selected`;
            }
            else{
                btnText.innerText = "Select";
            }
    })
})