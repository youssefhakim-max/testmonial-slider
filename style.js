const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?  q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=    M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "This is simply unbelievable! 1 would be lost   without Apple. The very best. Not        able to tell you how happy I am  with Apple",
  },

  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love itl Apple impressed me on multiple levels.",
  },

  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1598106755735-3ebfced1d38b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Thank you for making it painless pleasant and most of all hassle free! I wish would have thought of it first. The very best.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}


