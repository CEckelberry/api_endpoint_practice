$(document).ready(function() {
    getCupcakes()
  });


  async function getCupcakes() {
    const res = await axios.get('http://127.0.0.1:5000/api/cupcakes');
    console.log(res.data.cupcakes);
    renderCupcakes(res.data.cupcakes);    
  }

  function renderCupcakes(cupcakes) {
    const ul = document.querySelector('#cupcakes');
    for (let cupcake of cupcakes){
      ul.append(makeCupcakeLI(cupcake));
    }
  }

  function makeCupcakeLI(cupcake){
    const newLI = document.createElement('LI');   
    newLI.className = 'list-group-item list-group-item-action';
    const cupcakeInstance = document.createElement('B');
    cupcakeInstance.innerHTML = `<div> 
    <img src="${cupcake.image}" class="img-thumbnail" style="width: 200px" alt="cupcake"> <br> <b>Flavor:</b>  ${cupcake.flavor} <br> <b>Rating:</b>  ${cupcake.rating} <br> <b>Size:</b> ${cupcake.size} 
    </div>`;
    newLI.append(cupcakeInstance);
    return newLI;
  }

  $("#cupcakeform").submit(async function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();

    let flavor = $("#flavor").val();
    let rating = $("#rating").val();
    alert(rating)
    let size = $("#size").val();
    let image = $("#image").val();

    let cupcakeResponse = await axios.post('http://127.0.0.1:5000/api/cupcakes', {
      flavor,
      size,
      rating,
      image
    })

    let newCupcake = $(makeCupcakeLI(cupcakeResponse.data.cupcake));
    $("#cupcakes").append(newCupcake);
    $("#cupcakeform").trigger("reset");
  });
