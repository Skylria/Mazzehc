window.onscroll = function() {scrollFunction()};

function scrollFunction() {

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "50px 50px";
            document.getElementById("navbar").style.backgroundColor = "black";
            // document.getElementsByClassName("nav-item").style.fontSize = "25px";
            document.getElementById("logo").style.display = "inline";
      } else {
            document.getElementById("navbar").style.padding = "120px 10px";
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("logo").style.display = "none";
      }


}

