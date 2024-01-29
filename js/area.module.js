import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Area {
  constructor() {
    this.ui = new Ui();
    this.deatals = new Details();
  }

  async getArea() {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    let abi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    let respone = await abi.json();
    let endrespones = await respone.meals;
    console.log(endrespones);
    this.ui.displayArea(endrespones);

    this.Area();
  }

  Area() {
    document.querySelectorAll(".AHMED").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;

    
        console.log(id);
        this.getAreaMeals(id);
      });
    });
  }

  async getAreaMeals(ahmed) {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    let abi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${ahmed}`
    );
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    let response = await abi.json();
    let endrres = await response;
    console.log(endrres);

    this.ui.displayDataMeals(response.meals.slice(0, 20));
   this.Event()
  }
  Event() {
    document.querySelectorAll(".meal").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
      
        this.de = new Details(id);
        console.log(id);
      });
    });
  }
}
