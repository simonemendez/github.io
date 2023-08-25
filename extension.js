document.addEventListener("DOMContentLoaded", function() {
    const hideAllButton = document.getElementById("hideAllButton");
    const boxes = document.querySelectorAll(".box");
  
    hideAllButton.addEventListener("click", function() {
      boxes.forEach(function(box) {
        box.classList.add("hidden");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const shoqAllButton = document.getElementById("hideAllButton");
    const boxes = document.querySelectorAll(".box");
  
    showAllButton.addEventListener("click", function() {
        boxes.forEach(function(box) {
          box.classList.remove("hidden");
        });
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const hideBox3Button = document.getElementById("hideBox3Button");
        const box3 = document.querySelector(".box3");
      
        hideBox3Button.addEventListener("click", function() {
          box3.classList.add("hidden");
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const hideBox2Button = document.getElementById("hideBox2Button");
        const box2 = document.querySelector(".box2");
      
        hideBox2Button.addEventListener("click", function() {
          box2.classList.add("hidden");
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const hideBox1Button = document.getElementById("hideBox1Button");
        const box1 = document.querySelector(".box1");
      
        hideBox1Button.addEventListener("click", function() {
          box1.classList.add("hidden");
        });
      });
      
      document.addEventListener("DOMContentLoaded", function() {
        const box1 = document.querySelector(".box1");
        const changeBox1Button = document.getElementById("changeBox1Button");
      
        changeBox1Button.addEventListener("click", function() {
          // Change color and border of box 1
          box1.style.backgroundColor = "green";
          box1.style.borderColor = "blue";
        });
      });

      document.addEventListener("DOMContentLoaded", function() {
        const box2 = document.querySelector(".box2");
        const changeBox2Button = document.getElementById("changeBox2Button");
      
        changeBox2Button.addEventListener("click", function() {
          // Change color and border of box 2
          box2.style.backgroundColor = "orange";
          box2.style.borderColor = "purple";
        });
      });
      
      document.addEventListener("DOMContentLoaded", function() {
        const box3 = document.querySelector(".box3");
        const changeBox3Button = document.getElementById("changeBox3Button");
      
        changeBox3Button.addEventListener("click", function() {
          // Change color and border of box 3
          box3.style.backgroundColor = "pink";
          box3.style.borderColor = "red";
        });
      });
      
      document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
        const changeAllButton = document.getElementById("changeAllButton");
      
        changeAllButton.addEventListener("click", function() {
          // Change color and border of all boxes
          boxes.forEach(function(box) {
            box.style.backgroundColor = "purple";
            box.style.borderColor = "green";
          });
        });
      });
      
      document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
        const resetColorsButton = document.getElementById("resetColorsButton");
      
        // Store original colors in data attributes
        boxes.forEach(function(box) {
          box.dataset.originalBackgroundColor = box.style.backgroundColor;
          box.dataset.originalBorderColor = box.style.borderColor;
        });
      
        // Reset colors function
        function resetColors() {
          boxes.forEach(function(box) {
            box.style.backgroundColor = box.dataset.originalBackgroundColor;
            box.style.borderColor = box.dataset.originalBorderColor;
          });
        }
      
        resetColorsButton.addEventListener("click", resetColors);
      });
      