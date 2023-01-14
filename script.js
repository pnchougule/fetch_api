let url = "https://kontests.net/api/v1/all";
let card = document.getElementById("card");
console.log("hello");
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((v) => {
    console.log(v);
    let ihtml = "";
    for (item in v) {
      ihtml += `
    <div class="card" style="width: 18rem">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqoeMMTMJcmC9CDSdDTk1oWcnKIq-TfDFfw&usqp=CAU" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${v[item].name}</h5>
      <p>Status is ${v[item].status}</p>
      <p>In 24 Hours? ${v[item].in_24_hours}</p>
      <p>Starts at : ${v[item].start_time}</p>
      <p>Ends at: ${v[item].end_time}</p>
      <a href="${v[item].url}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    }
    card.innerHTML = ihtml;
  });
