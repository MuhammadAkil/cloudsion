  AOS.init();

  document.addEventListener("DOMContentLoaded", function() {
  var textArray = ["Efficiency", "Scalability", "Innovation"];
  var index = 0;

  function changeText() {
    var changingText = document.getElementById("changingText");
    changingText.innerHTML = textArray[index];
    index = (index + 1) % textArray.length;
    changingText.classList.toggle("fade-up");
  }

  setInterval(changeText, 700);
});

  const target1 = 60;
  const target2 = 70;
  const target3 = 90;

  // Set duration for the count-up animation (in milliseconds)
  const duration = 2000;

  // Calculate the step value based on the duration
  const step1 = (target1 / duration) * 16; // 16ms is roughly equivalent to 1 frame in 60fps
  const step2 = (target2 / duration) * 16;
  const step3 = (target3 / duration) * 16;

  function updateCounters() {
    const count1 = document.getElementById("count1");
    const count2 = document.getElementById("count2");
    const count3 = document.getElementById("count3");

    count1.innerHTML = Math.min(Math.round(parseFloat(count1.innerHTML) + step1), target1) + "%";
    count2.innerHTML = Math.min(Math.round(parseFloat(count2.innerHTML) + step2), target2) + "%";
    count3.innerHTML = Math.min(Math.round(parseFloat(count3.innerHTML) + step3), target3) + "%";

    if (parseInt(count1.innerHTML) < target1 || parseInt(count2.innerHTML) < target2 || parseInt(count3.innerHTML) < target3) {
      requestAnimationFrame(updateCounters);
    }
  }

  // Start the count-up animation
  updateCounters();

    let items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
      const minPerSlide = 5
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
    let items2 = document.querySelectorAll('.carousel-2 .item-2')
    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items2[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })