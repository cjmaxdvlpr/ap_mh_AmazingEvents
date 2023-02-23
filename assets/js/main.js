function buildHTMLEventCard(eventData){
    return `<div class="card border-dark rounded-0 m-4" style="width: 15rem;">
        <img src="${eventData.image}" class="card-img-top mt-3 sombreado" alt="food fair">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">${eventData.name}</h5>
            <p class="card-text text-center">${eventData.description}</p>
            <div class="mt-auto">
                <div class="d-flex align-items-center justify-content-between mx-0">
                    <p>Price $${eventData.price}</p>
                    <a href="./details.html" class="btn bg-dark text-light rounded-0 sombreado mb-3">Ver
                        más</a>
                </div>
            </div>
        </div>
    </div>`;
}