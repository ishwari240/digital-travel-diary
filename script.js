function showInfo(place) {
    const descriptions = {
        paris: `
Paris, known as the City of Love, is famous for its timeless art,
romantic streets, and iconic landmarks like the Eiffel Tower.
It is a perfect blend of culture, history, and elegance.
        `,

        bali: `
Bali is a tropical paradise known for its serene beaches,
lush green landscapes, and rich spiritual culture.
It offers peace, adventure, and unforgettable sunsets.
        `,

        tokyo: `
Tokyo is a vibrant city where modern technology meets tradition.
From neon-lit streets to peaceful temples, it offers a unique experience.
The city never sleeps and never stops inspiring.
        `,

        santorini: `
Santorini is known for its whitewashed houses and stunning sunsets.
The island offers breathtaking views of the Aegean Sea.
It is a dream destination for travelers worldwide.
        `,

        dubai: `
Dubai represents luxury, innovation, and modern architecture.
From towering skyscrapers to desert safaris, it has it all.
The city blends tradition with futuristic vision.
        `
    };

    document.getElementById("infoBox").innerText = descriptions[place];
}
