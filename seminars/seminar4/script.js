const url = "https://www.boredapi.com/api/activity/";

const btnEl = document.querySelector(".button");

btnEl.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json;
      console.log(data);

      getActivity(data);
      return data;
    });
});

function getActivity(data) {
  const divEl = document.createElement("div");
  divEl.textContent = data.activity;
  document.body.appendChild(divEl);
}
