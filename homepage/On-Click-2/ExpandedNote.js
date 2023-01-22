function subscribe() {
            let name = prompt("What is your name?");
            prompt("What is your email address?");

            alert(
              "Thanks! We'll be in touch! Meanwhile, don't forget to take care of yourself :)");
          }

          let button = document.querySelector("button");
          button.addEventListener("click", subscribe);