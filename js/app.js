(function() {
  createSocialLinks();
})();

function createSocialLinks() {
  var here = window.location.href;
  var URL = {
    f: "http://www.facebook.com/sharer.php?u=" + here,
    t: "https://twitter.com/share?url="+ here +"&text=Just%20found%20something%20awesome!&via=benavern",
    g: "https://plus.google.com/share?url=" + here,
    m: "mailto:?subject=Just%20found%20something%20awesome!&body=Hey!%20What%20do%20you%20think%20about%20" + here + " ?"
  }
  var socialPlace = document.getElementById('social-wrapper');
  for(var x in URL){
    var el = document.createElement("a");
    el.className = "social-btn " + x;
    el.href = URL[x];
    // el.innerHTML = x;
    socialPlace.appendChild(el);
  }
}




var demo;
var modalArgs = {};
var btnTest = document.getElementById('demo1');

btnTest.addEventListener('click', function(e){
  demo = new ZMODAL(modalArgs);
})
