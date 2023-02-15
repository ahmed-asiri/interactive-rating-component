(function() {
    const formElement = document.querySelector(".rating-card__form");
    let selectedRating = 0;

    formElement.addEventListener("submit", (eve) => {
        eve.preventDefault();
        selectedRating = getSelectedRating();
    })


    function getSelectedRating() {
        const selectedRadioBtn = document.querySelector("input[name=star]:checked");
        selectedRating = 0;
        if(selectedRadioBtn) {
            selectedRating = selectedRadioBtn.value;
        }
        return selectedRating;
    }

})()