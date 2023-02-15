(function() {
    const formElement = document.querySelector(".rating-card__form");
    const ratingSection = document.querySelector(".rating-card");
    const thankYouSection = document.querySelector(".thank-you");
    const resultEle = document.querySelector(".thank-you__result-value");
    let selectedRating = 0;

    formElement.addEventListener("submit", (eve) => {
        eve.preventDefault();
        selectedRating = getSelectedRating();
        console.log(selectedRating);
        if(selectedRating) {
            activateThankYouSection();
            updateResultElement(selectedRating);
        }
    })


    function getSelectedRating() {
        const selectedRadioBtn = document.querySelector("input[name=star]:checked");
        selectedRating = 0;
        if(selectedRadioBtn) {
            selectedRating = selectedRadioBtn.value;
        }
        return selectedRating;
    }

    function activateThankYouSection() {
        ratingSection.classList.add("d-none");
        thankYouSection.classList.remove("d-none");
    }

    function updateResultElement(selectedRating) {
        resultEle.textContent = selectedRating;
    }

})()