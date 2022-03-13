const joke = document.getElementById("Joke");
const btn = document.getElementById("btn");

const jokeGenerator = async () => {
  await axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
    .then((res) => (joke.innerHTML = `${res.data.joke}`));
};

btn.addEventListener("click", jokeGenerator);

jokeGenerator();
