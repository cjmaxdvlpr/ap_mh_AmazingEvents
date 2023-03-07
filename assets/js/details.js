let whereIAm = location.search;
let params = new URLSearchParams(whereIAm);
let id = params.get('id');
let event = data.events.find(event => event._id == id);
document.getElementById('eventDetailContainer').innerHTML = 
`               <div class="col-md-6">
<img src="${event.image}" class="img-fluid border border-1 border-dark m-5" alt="imagen evento">
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
<div class="card-body border border-1 border-dark m-3">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    </div>
</div>`



