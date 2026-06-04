document.addEventListener("DOMContentLoaded", function () {
     
    const backToTop = document.querySelector("#back");

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }); 

});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");
    const boxes = document.querySelectorAll(".box");

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase();
        
        boxes.forEach(box => {
            const productName = box.querySelector("h2").innerText.toLowerCase();
            
            if (productName.includes(searchText) || searchText === "") {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    }
    
    searchInput.addEventListener("input", filterProducts);
    searchButton.addEventListener("click", filterProducts);
});
