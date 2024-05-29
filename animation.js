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
const cauilflower = document.querySelector(".cauliflower");
const bellPepper = document.querySelector(".BellPepper");
const lettuce = document.querySelector(".Lettuce");
const fish = document.querySelector(".fish");

const productNAME = document.querySelector(
  ".productdescrpiton > p:nth-child(1)"
);
const productPrice = document.querySelector(
  ".productdescrpiton > p:nth-child(2)"
);

const productdescrpiton = document.querySelector(
  ".productdescrpiton > p:nth-child(3)"
);

tomato.addEventListener("click", function () {
  productNAME.innerHTML = "Tomato";
  productPrice.innerHTML = "Price : 2$";
  productdescrpiton.innerHTML =
    "Ripe and juicy tomato, bursting with fresh flavor. Perfect for salads, sandwiches, or just enjoying on its own!";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #fb2d00, #b00200)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/tomato.jpg" },
      opacity: 1,
      x: 0,
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient(  #fb2d00, #b00200)",
    border: "none ",
  });

  gsap.to(".selectionTab", {
    background: "linear-gradient(  #fb2d00, #b00200)",
  });

  gsap.fromTo(
    ".menuRow1 .selectionTab:nth-of-type(1)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});
pumpkin.addEventListener("click", function () {
  productNAME.innerHTML = "Pumpkin";
  productPrice.innerHTML = "Price : 1$";
  productdescrpiton.innerHTML =
    "Freshly harvested pumpkin! Its vibrant orange flesh is perfect for roasting, pureeing into soups, or baking into delicious pies";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #F68B3C, #E36203)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/pumpkin.jpg" },
      opacity: 1,
      x: 0,
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient( #F68B3C, #E36203)",
    border: "none ",
  });
  gsap.to(".selectionTab", {
    background: "linear-gradient( #F68B3C, #E36203)",
  });

  gsap.fromTo(
    ".menuRow1 .selectionTab:nth-of-type(2)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});

cauilflower.addEventListener("click", function () {
  productNAME.innerHTML = "Cauilflower";
  productPrice.innerHTML = "Price : 2.99$";
  productdescrpiton.innerHTML =
    "A beautiful head of cauliflower with tightly packed, snow-white florets. Perfect for roasting, ricing, or enjoying raw";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #73A942, #245501)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/cauliflower.jpg" },
      objectFit: "cover",
      objectPosition: "50% 50%",
      opacity: 1,
      x: 0,
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient( #73A942, #245501)",
    border: "none ",
  });
  gsap.to(".selectionTab", {
    background: "linear-gradient( #73A942, #245501)",
  });

  gsap.fromTo(
    ".menuRow1 .selectionTab:nth-of-type(3)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});

bellPepper.addEventListener("click", function () {
  productNAME.innerHTML = "Bell Pepper";
  productPrice.innerHTML = "Price : 1.99$";
  productdescrpiton.innerHTML =
    "A deep red bell pepper, blistered and fragrant from roasting. Hints of charring peek through the vibrant color.";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #B00200, #6A040F)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/bellPepper.jpg" },
      opacity: 1,
      x: 0,
      objectFit: "cover",
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient(  #B00200, #6A040F)",
    border: "none ",
  });

  gsap.to(".selectionTab", {
    background: "linear-gradient(  #B00200, #6A040F)",
  });

  gsap.fromTo(
    ".menuRow2 .selectionTab:nth-of-type(1)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});

lettuce.addEventListener("click", function () {
  productNAME.innerHTML = "Lettuce";
  productPrice.innerHTML = "Price : 1$";
  productdescrpiton.innerHTML =
    "Crisp and refreshing lettuce, perfect for adding a light, leafy base to your salads. Enjoy its subtle sweetness and cool crunch";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #9ef01a, #38b000)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/lettuce.jpg" },
      opacity: 1,
      x: 0,
      objectFit: "cover",
      objectPosition: "bottom",
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient(  #9ef01a, #38b000)",
    border: "none ",
  });

  gsap.to(".selectionTab", {
    background: "linear-gradient(  #9ef01a, #38b000)",
  });

  gsap.fromTo(
    ".menuRow2 .selectionTab:nth-of-type(2)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});

fish.addEventListener("click", function () {
  productNAME.innerHTML = "Fish";
  productPrice.innerHTML = "Price : 4$";
  productdescrpiton.innerHTML =
    "Fresh, flaky fish with a delicate sweetness and a hint of the sea. Perfect for simple preparations that allow its natural flavor to shine.";

  // animation part
  gsap.to(".productsOverview", {
    background: "linear-gradient(to top right, #ade8f4, #48cae4)",
    duration: 2,
  });

  gsap.fromTo(
    ".productDetails img",
    2,
    { opacity: 0, x: 50 },
    {
      attr: { src: "./products/fish.jpg" },
      opacity: 1,
      x: 0,
    }
  );

  gsap.fromTo(
    ".productdescrpiton p",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  //for menu tab

  gsap.to(".prodcutMenu", {
    background: "linear-gradient(#ade8f4, #48cae4)",
    border: "none ",
  });

  gsap.to(".selectionTab", {
    background: "linear-gradient(  #ade8f4, #48cae4)",
  });

  gsap.fromTo(
    ".menuRow2 .selectionTab:nth-of-type(3)",
    { rotate: 30 },
    {
      background: "white",
      rotate: 0,
    }
  );
});

let mm = gsap.matchMedia();

mm.add("(max-width: 697px)", () => {
  tomato.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow1 .selectionTab:nth-of-type(1)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9), #b00200)",
        rotate: 0,
      }
    );
  });
  lettuce.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow2 .selectionTab:nth-of-type(2)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9),#38b000)",
        rotate: 0,
      }
    );
  });
  pumpkin.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow1 .selectionTab:nth-of-type(2)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9),  #E36203)",
        rotate: 0,
      }
    );
  });
  bellPepper.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow2 .selectionTab:nth-of-type(1)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9), #6A040F)",
        rotate: 0,
      }
    );
  });
  cauilflower.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow1 .selectionTab:nth-of-type(3)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9), #245501)",
        rotate: 0,
      }
    );
  });
  fish.addEventListener("click", function () {
    gsap.fromTo(
      ".menuRow2 .selectionTab:nth-of-type(3)",
      { rotate: 30 },
      {
        background: "linear-gradient(to top right, rgba(0,0,0,0.9), #48cae4)",
        rotate: 0,
      }
    );
  });
});
