$(document).ready(function() {
  var s = skrollr.init({          
    mobileCheck: function() {
        //hack - forces mobile version to be off
        return false;
    }
  });
})






var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);

// set constant width and height for mobile devices
if (window.innerWidth < 768) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  renderer.domElement.style.top = ((window.innerHeight - height) / 2) + 'px';
} else {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var container = document.getElementById("canvas-container");
container.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff, 0);


//===================================================== scene
var scene = new THREE.Scene();

//===================================================== camera
var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(0, 0, 2);





//===================================================== lights
var light = new THREE.DirectionalLight(0xefefff, 3);
light.position.set(1, 1, 1).normalize();
scene.add(light);
var light = new THREE.DirectionalLight(0xffefef, 3);
light.position.set(-1, -1, -1).normalize();
scene.add(light);



//===================================================== resize
// window.addEventListener("resize", function () {
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   renderer.setSize(width, height);



//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });


//===================================================== model
var loader = new THREE.GLTFLoader();
var mixer;
var model;
loader.load(
  "./ie&a.glb",
  // "./book.glb",
  function (gltf) {
    gltf.scene.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.side = THREE.DoubleSide;
        
      }
    });

    model = gltf.scene;
    model.scale.set(1,1,1);
    scene.add(model);

    mixer = new THREE.AnimationMixer(model);
    var action = mixer.clipAction(gltf.animations[0]);
    action.play();

    createAnimation(mixer, action, gltf.animations[0]);
  }
);

var clock = new THREE.Clock();
function render() {
  requestAnimationFrame(render);
  var delta = clock.getDelta();

  if (mixer != null) mixer.update(delta);
  renderer.render(scene, camera);
}

render();
gsap.registerPlugin(ScrollTrigger);

function createAnimation(mixer, action, clip) {

  let proxy = {
    get time() {
      return mixer.time;
    },
    set time(value) {
      action.paused = false;
      mixer.setTime(value);
      action.paused = true;
    }
  };

  let scrollingTL = gsap.timeline({
    scrollTrigger: {
      trigger: renderer.domElement,
      start: "top top",
      end: "+=3000px",
      pin: true,
      scrub: true,
      
      onUpdate: function () {
        camera.position.x = 0;
        camera.position.y = 0;  // set camera position to 0 on x-axis
        camera.updateProjectionMatrix();
      }
    }
  });

  scrollingTL.to(proxy, {
    time: clip.duration,
    repeat: 0,
  });
}



if (window.matchMedia("(max-width: 768px)").matches) {
  camera.position.set(0, 0, 4);
  // onWindowResize();
} else if (window.matchMedia("(max-width: 1024px)").matches) {
  camera.position.set(0, 0, 2);
  // onWindowResize();
}

// function onWindowResize() {
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// }


var loaded = false; // initialize flag to false


function domContentLoaded() {
return new Promise(function(resolve) {
  document.addEventListener("DOMContentLoaded", function() {
    resolve(true);
  });
});
}

Promise.all([domContentLoaded()]).then(function() {
loaded = true; // set flag to true
hideLoader(); // check if both events have fired
});





// function to hide loader
function hideLoader() {
  if (loaded) { // check if both events have fired
    setTimeout(function(){ // allow 3 seconds to fade out loader
      $('.page-loader').fadeOut('slow');
    }, 3000);
  }
}