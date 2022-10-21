const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
  const output = document.getElementById("resultContainer");

  if (valueTemp === "cel") {
    let feh = Math.round((numberTemp * 9) / 5 + 32);
    output.innerHTML = `${numberTemp} °Celcius = ${feh} °Fahrenehit`;
  } else {
    let cel = Math.round(((numberTemp - 32) * 5) / 9);
    output.innerHTML = `${numberTemp} °Fahrenehit = ${cel} °Celcius`;
  }
};
