function breakTheText() {
  let heroText = document.querySelector(".mainTxt");

  let heroTextContent = heroText.textContent;

  const splitedHeroText = heroTextContent.split("");

  let text = "";

  splitedHeroText.forEach(function (e, index) {
    if (index <= 2) {
      text += `<span class = "first">${e}</span>`;
    } else {
      text += `<span class = "second">${e}</span>`;
    }
  });

  heroText.innerHTML = text;
}

breakTheText();

//gsap for the hero text
gsap.from(".mainTxt .first", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  stagger: 0.3,
});

gsap.from(".mainTxt .second", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  stagger: -0.3,
});

let floatingTab = document.querySelector(".tab1");
let floatingTab2 = document.querySelector(".tab2");
let floatingTab3 = document.querySelector(".tab3");
let floatingProductTab = document.querySelector(".productsTab");

floatingTab.addEventListener("mouseenter", function (d) {
  gsap.to(".tab1", {
    scale: 1.2,
    boxShadow: "0 5px 50px 0 rgba(0, 0, 0, 0.5)",
  });
});
floatingTab.addEventListener("mouseleave", function (d) {
  gsap.to(".tab1", {
    scale: 1,
    boxShadow: "none",
  });
});
floatingTab2.addEventListener("mouseenter", function (d) {
  gsap.to(".tab2", {
    scale: 1.2,
    boxShadow: "0 5px 50px 0 rgba(0, 0, 0, 0.5)",
  });
});
floatingTab2.addEventListener("mouseleave", function (d) {
  gsap.to(".tab2", {
    scale: 1,
    boxShadow: "none",
  });
});
floatingTab3.addEventListener("mouseenter", function (d) {
  gsap.to(".tab3", {
    scale: 1.2,
    boxShadow: "0 5px 50px 0 rgba(0, 0, 0, 0.5)",
  });
});
floatingTab3.addEventListener("mouseleave", function (d) {
  gsap.to(".tab3", {
    scale: 1,
    boxShadow: "none",
  });
});

//bottom 2 bar animation

window.addEventListener("wheel", function (details) {
  if (details.deltaY > 0) {
    gsap.to(".quote", {
      transform: "translateX(-200%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".quote img", {
      attr: { src: "leaves.png" },
      duration: 1,
    });

    gsap.to(".movingText", {
      background: "linear-gradient(#9ef01a, #70e000)",
      duration: 0.7,
    });
  } else {
    gsap.to(".quote", {
      transform: "translateX(0%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".quote img", {
      attr: { src: "fish.png" },
    });

    gsap.to(".movingText", {
      background: "linear-gradient(#ade8f4, #48cae4 )",
      duration: 0.7,
    });
  }
});

//product animation starts here

const tomato = document.querySelector(".tomato");
const pumpkin = document.querySelector(".pumpkin");

pumpkin.addEventListener("click", function () {
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #F68B3C, #E36203)",
    duration: 2,
  });
  gsap.to(
    ".productDetails img",
    {
      attr: { src: "./products/pumpkin.jpg" },
      duration: 2,
    },
    "<"
  );
  gsap.to(".selectionTab", {
    backgroundColor: "white",
  });
  gsap.to(".selectionTab:nth-of-type(2)", {
    backgroundColor: "#70e000",
  });
});

tomato.addEventListener("click", function () {
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #fb2d00, #b00200)",
    duration: 2,
  });
  gsap.to(
    ".productDetails img",
    {
      attr: { src: "./products/tomato.jpg" },
      duration: 2,
    },
    "<"
  );
  gsap.to(".selectionTab", {
    backgroundColor: "white",
  });
  gsap.to(".selectionTab:nth-of-type(1)", {
    backgroundColor: "#70e000",
  });
});
