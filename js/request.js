// const { request } = require("http");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

// async

const getData = async (resource) => {
  overlay.classList.remove("hidden");
  const req = await fetch(resource);

  if (req.status != 200) {
    throw new Error("Qandaydur xatolik yuz berdi!");
  }

  const data = await req.json();
  overlay.classList.add("hidden");
  return data;
};

const reload = () => {
  getData(API)
    .then((data) => {
      updateUI(data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

document.addEventListener("DOMContentLoaded", reload);
