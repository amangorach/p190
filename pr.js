AFRAME.registerComponent("plane-rotation", {
  init: function () {
    var plane = document.querySelector("#plane")
    asp = plane.getAttribute("position")
    rsp = plane.getAttribute("rotation")
    window.addEventListener("keydown", (e) => {
    
      // key "w"
      if (e.key === "w") {
        //rotation upwards
        if (rsp.z < 40) {
          rsp.z += 0.75
          plane.setAttribute("rotation", rsp)
        }
        if (asp.y < 3) {
          asp.y += 0.05
          plane.setAttribute("position", asp)
        }
      }
      // key "a"
      if (e.key === "a") {
        if (rsp.x > -10) {
          rsp.x -= 0.5
          plane.setAttribute("rotation", rsp)
        }
      }
      // key "s"
      if (e.key === "s") {
        //rotation
        if (rsp.z > -40) {
          rsp.z -= 0.75
          plane.setAttribute("rotation", rsp)
        }
        //position
        if (asp.y > -3) {
          asp.y -= 0.05
          plane.setAttribute("position", asp)
        }
      }
      //key "d"
      if (e.key === "d") {
        if (rsp.x < 10) {
          rsp.x += 0.5
          plane.setAttribute("rotation", rsp)
        }
      }
    })
  }
}),

AFRAME.registerComponent("terrain-rotation",{
  init: function () {
    var plane = document.querySelector("#terrain")
    asp = plane.getAttribute("position")
    rsp = plane.getAttribute("rotation")
  }
})