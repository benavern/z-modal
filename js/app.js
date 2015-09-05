(function() {
  createSocialLinks();
  demo1();
  demo2();
})();

// social links made easy
function createSocialLinks() {
  var here = window.location.href;
  var URL = {
    facebook: "http://www.facebook.com/sharer.php?u=" + here,
    twitter: "https://twitter.com/share?url="+ here +"&text=Just%20found%20something%20awesome!&via=benavern",
    googlePlus: "https://plus.google.com/share?url=" + here,
    mail: "mailto:?subject=Just%20found%20something%20awesome!&body=Hey!%20What%20do%20you%20think%20about%20" + here + " ?"
  }
  var socialPlaces = document.getElementsByClassName('social-wrapper');
  for(var n=0; n<socialPlaces.length; n++){
    var sp = socialPlaces[n];
    for(var x in URL){
      var el = document.createElement("a");
      el.title = "Share via " + x;
      el.className = "social-btn " + x;
      el.href = URL[x];
      sp.appendChild(el);
    }
  }

}



// demos for z-modal plugin

function demo1() {
  var btnTest = document.getElementById('demo1');
  var demo;
  btnTest.addEventListener('click', function(){
    demo = new ZMODAL();
  })
}

function demo2() {
  var btndemo2 = document.getElementById('demo2');
  var demo2;
  var options2 = {
    title : "Demo 2",
    content : 'You can close the modal by clicking the overlay...',
    closeBtn : false,
    buttons : []
  };
  btndemo2.addEventListener('click', function(){
    demo = new ZMODAL(options2);
  });
}
