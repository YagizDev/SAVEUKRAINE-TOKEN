const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
var mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(document).ready(function () {
//   $(".video").each(function (el) {
//     var _this = $(this);
//     _this.on("mouseover", function (ev) {
//       _this[0].src += "&autoplay=1";
//       ev.preventDefault();
//     });
//   });
// });

var navclick = document.getElementsByClassName("nav");

for (var i = 0; i < navclick.length; i++) {
  navclick[i].onclick = function () {
    document.getElementById("navbar").classList.toggle("click");
  };
}

function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollvalue = window.scrollY;

  if (scrollvalue < 150) {
    navbar.classList.remove("bgchange");
  } else navbar.classList.add("bgchange");
}

window.addEventListener("scroll", changeBg);


/* YOUTUBE ONHOVER PLAY  */ 
/*
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '543',
    width: '966',
    videoId: 'RBQ-IoHfimQ',
    playerVars: {
      'playsinline': 1,
      'controls':0,
      'mute':1,
      'autoplay':0,
      'showinfo':0,
      'rel':0

    },

    
  });
}

$(document).on('mouseover', '#player', function() {
  player.playVideo();
});
$(document).on('mouseout', '#player', function() {
  player.stopVideo();
});
*/

/*click onload */



