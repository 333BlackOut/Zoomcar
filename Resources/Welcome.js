/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function OpenNav() 
{
    document.getElementById("SideNav").style.width = "500px";
    document.getElementById("SideNav").style.borderRight = "1px dashed black";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function CloseNav() 
{
  document.getElementById("SideNav").style.width = "0";
  document.getElementById("SideNav").style.borderRight = "0px";
}
function city(){
  window.location="https://www.zoomcar.com/in/delhi?q=address&loc=normal";
}
function display(){
    var dsp = document.getElementById("togle");
    var btm = document.getElementById("foot");
    if (dsp.style.display === "none") {
        dsp.style.display = "block";
        btm.style.marginTop = "95px";
      } else {
        dsp.style.display = "none";
        btm.style.marginTop = "0";
      }
}