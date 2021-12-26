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