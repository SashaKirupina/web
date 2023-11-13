// document.getElementById("uuu").onclick = function() {
//     this.className ="knopka"
//     window.open ('https://github.com/SashaKirupina/calculator/blob/main/main.py','_blank')
// }

function myImg() {
    let elem = document.getElementById('swagger'); // получаем элемент по ID
    let style = getComputedStyle(elem); // получаем его стили
    if (style.display === 'none') {
      document.getElementById('swagger').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('swagger').style.display='none';
    }
  }