const text = `Hey.

I don’t really know how to start this,
but I just wanted you to know something.

You don’t have to be perfect.
You don’t have to have everything figured out.
You don’t even have to be okay all the time.

I just hope you remember —
you matter more than you think.

And somehow,
you became one of my favorite parts of the day.

That’s all 🤍`;

let index = 0;
const speed = 45;
const container = document.querySelector(".textCont");

function typeWriter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
