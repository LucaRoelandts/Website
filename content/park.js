$(function () {
    function filterAttractions() {
        var selectedTypes = [];
        var checkboxes = document.querySelectorAll("#typeCheckboxes input[type=checkbox]");
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedTypes.push(checkbox.value);
            }
        });

        var attractions = document.getElementsByClassName("attraction");
        for (var i = 0; i < attractions.length; i++) {
            var attraction = attractions[i];
            if(selectedTypes.length===0){
                attraction.classList.remove("hidden");
            } else{
                var isVisible = selectedTypes.includes(attraction.classList[2]); // index 2 corresponds to the type class
                if (isVisible) {
                    attraction.classList.remove("hidden");
                } else {
                    attraction.classList.add("hidden");
                }
            }
        }
    }

    document.getElementById("filterButton").addEventListener("click", filterAttractions);

});