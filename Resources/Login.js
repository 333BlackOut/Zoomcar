function Selector(){
    var btn = document.getElementById("selector");
    var std = document.getElementById("placecode");
    if (std.style.display === "none") {
        std.style.display = "block";
        std.style.marginTop = "-150px";
      } else {
        std.style.display = "none";
        std.style.marginTop = "0";
      }
}