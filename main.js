window.addEventListener("load", function () {
    let buttonElement = document.getElementById("submit");
    let maxpriceElement = document.getElementById("maxprice-input");
    let actualmaxpriceElement = document.getElementById("actual-maxprice");
    let checkinElement = document.getElementById("checkin").querySelector("input");
    let checkoutElement = document.getElementById("checkout").querySelector("input");
    let mainElement = document.getElementsByTagName("main")[0];
    let hotelElement = document.getElementsByClassName("hotel");
    let offerElement = document.getElementsByClassName("various-offers");
    let viewOfferElement = document.getElementsByClassName("view-offer");
    let favoriteElement = document.getElementsByClassName("favorite");
    
    // The following will be used to calculate and change the price depending 
    // on the number of nights and selected offer, whenever I have the time to do it...
    // let nightsElement = document.getElementsByClassName("nights");
    // let totalPriceElement = document.getElementsByClassName("calculated-price");

    // Set check-in date value to today
    let today = new Date();
    checkinElement.setAttribute("min", today.toISOString().split('T')[0]);

    buttonElement.addEventListener("mouseover", function () {
        buttonElement.classList.remove("submit-normal");
        buttonElement.classList.add("submit-hover");
    });

    buttonElement.addEventListener("mouseout", function () {
        buttonElement.classList.remove("submit-hover");
        buttonElement.classList.add("submit-normal");
    });

    // Checkout date depends on checkin date
    checkinElement.addEventListener("input", function () {
        // get date value from element as JS Date object
        let date = new Date(checkinElement.value);
        console.log(date);
        // add one day to check-in date
        date.setDate(date.getDate() + 1);
        // console.log(date.toISOString().split('T')[0]);
        // set check-out date to the updated date value
        checkoutElement.setAttribute("min", date.toISOString().split('T')[0]);

    });

    // Update slider label on change
    maxpriceElement.addEventListener("input", function () {
        actualmaxpriceElement.innerHTML = maxpriceElement.value;
    });

    // Show current selected deal
    mainElement.addEventListener("click", function (e) {

        for (let i = 0; i < offerElement.length; i++) {
            offerElement[i].classList.remove("selected");
        }

        for (let i = 0; i < hotelElement.length; i++) {
            if (hotelElement[i].contains(e.target)) {
                if (offerElement[i * 3].contains(e.target)) {
                    offerElement[i * 3].classList.add("selected");
                    viewOfferElement[i].innerHTML = offerElement[i * 3].innerHTML;
                } else if (offerElement[(i * 3) + 1].contains(e.target)) {
                    offerElement[(i * 3) + 1].classList.add("selected");
                    viewOfferElement[i].innerHTML = offerElement[(i * 3) + 1].innerHTML;
                } else if (offerElement[(i * 3) + 2].contains(e.target)) {
                    offerElement[(i * 3) + 2].classList.add("selected");
                    viewOfferElement[i].innerHTML = offerElement[(i * 3) + 2].innerHTML;
                } else if (favoriteElement[i].contains(e.target)) {
                    let favoriteState = favoriteElement[i].getAttribute("alt");
                    switch (favoriteState) {
                        case "Add to favorites":
                            favoriteElement[i].setAttribute("src", "Media/heart-icon-red.png");
                            favoriteElement[i].setAttribute("alt", "Remove from favorites");
                            break;
                        case "Remove from favorites":
                            favoriteElement[i].setAttribute("src", "Media/heart-icon-gray.png");
                            favoriteElement[i].setAttribute("alt", "Add to favorites");
                            break;
                        default:
                            console.log("Something is wrong with the switch statement!!!")
                            break;
                    }

                }
            }
        }
    });


});