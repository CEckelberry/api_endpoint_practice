$(document).ready(function() {
    getCupcakes()
    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
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
    <img src="${cupcake.image}" class="img-thumbnail" style="width: 200px" alt="cupcake"> <br> <b>Flavor:</b>  ${cupcake.flavor} <br> <b>Rating:</b>  ${cupcake.rating}
    </div>`;
    newLI.append(cupcakeInstance);
    return newLI;
  }

