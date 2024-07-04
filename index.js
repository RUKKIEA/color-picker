document.addEventListener('DOMContentLoaded', () => {
 const colorPicker = document.getElementById('colorPicker');
 console.log(colorPicker);
 const colorDisplay = document.getElementById('colorDisplay');
 console.log(colorDisplay);
 const colorValue = document.getElementById('colorValue');
 console.log(colorValue);

 colorPicker.addEventListener('input', () => {
     const selectedColor = colorPicker.value;
     colorDisplay.style.backgroundColor = selectedColor;
     colorValue.textContent = selectedColor;
 });
});