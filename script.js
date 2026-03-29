function openModal(place) {

    const data = {
        paris: "Paris is the city of love with iconic Eiffel Tower.",
        bali: "Bali offers tropical beaches and peaceful vibes.",
        tokyo: "Tokyo blends tradition with futuristic tech.",
        santorini: "Santorini is famous for white houses and sunsets.",
        dubai: "Dubai is luxury, skyscrapers, and desert adventures."
    };

    document.getElementById("title").innerText = place.toUpperCase();
    document.getElementById("desc").innerText = data[place];

    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
