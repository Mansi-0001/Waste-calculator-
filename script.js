function calculateWaste() {
  const quantity = parseFloat(document.getElementById('quantity').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const type = document.getElementById('type').value.toLowerCase();

  if(isNaN(quantity) || isNaN(weight)){
    alert("Please enter valid numbers");
    return;
  }

  const totalWaste = quantity * weight;
  let suggestion = "";

  if(totalWaste < 50){
    suggestion = "Current practices are efficient; continue monitoring.";
  } else if(totalWaste <= 100){
    suggestion = "Consider switching some packaging to recyclable materials.";
  } else {
    suggestion = "Reduce packaging, explore bulk shipping, or switch to sustainable alternatives.";
  }

  if(type.includes("plastic")){
    suggestion += " Consider reducing plastic usage or switching to biodegradable options.";
  } else if(type.includes("cardboard")){
    suggestion += " Explore suppliers offering recycled cardboard.";
  }

  document.getElementById('result').innerText = `Estimated Waste per Month: ${totalWaste.toFixed(2)} kg`;
  document.getElementById('suggestions').innerText = suggestion;
}
