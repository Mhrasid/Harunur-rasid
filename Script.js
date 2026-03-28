const cardsData = [
    {
        title: "Trending Video 1",
        description: "Watch the latest trending video.",
        img: "https://via.placeholder.com/300x180.png?text=Video+1",
        link: "#"
    },
    {
        title: "Trending Video 2",
        description: "Social media updates and news.",
        img: "https://via.placeholder.com/300x180.png?text=Video+2",
        link: "#"
    },
    {
        title: "Shopping Product 1",
        description: "Check out this trending product.",
        img: "https://via.placeholder.com/300x180.png?text=Product+1",
        link: "#"
    },
    {
        title: "Shopping Product 2",
        description: "Must-have item this week.",
        img: "https://via.placeholder.com/300x180.png?text=Product+2",
        link: "#"
    }
];

const container = document.getElementById('cards-container');

cardsData.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${card.img}" alt="${card.title}">
        <div class="card-content">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <a href="${card.link}" target="_blank">View</a>
        </div>
    `;
    container.appendChild(div);
});
