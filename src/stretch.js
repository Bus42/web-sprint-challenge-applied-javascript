const stretch = () => {
    // select all topic tabs on page
    const topicFilters = document.querySelectorAll(".tab");
    // select all cards on page
    const cards = document.querySelectorAll(".card");
    // add listeners to tabs
    topicFilters.forEach(filter => filter.addEventListener('click', e => {
        // avoid issues caused by text of Node.js tab, convert to lowercase to match classes assigned in card.js
        const filterText = e.target.innerText.split('.')[0].toLowerCase();
        // filter by class to show related cards
        cards.forEach(card => {
            if (card.classList.contains(filterText)) {
                card.classList.remove('filtered');
            } else {
                card.classList.add('filtered');
            }
        })
    }));
}

export default stretch;