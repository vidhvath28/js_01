function changeImage() {
    const outputImage = document.getElementById('imgShow');
    const outputText = document.getElementById('output-image')
    const button = document.getElementById('changeButton');
    button.textContent = "I'm done!";
    button.style.backgroundColor = 'black';
    outputText.textContent = 'Hehe not the button! ';
    outputImage.style.display = 'block';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', changeImage);
  });