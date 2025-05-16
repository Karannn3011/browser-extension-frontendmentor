const container = document.querySelector(".container")
const active = document.getElementById("active")
const all = document.getElementById("all")
const inactive = document.getElementById("inactive")
let toggleBtns;

console.log(document.querySelectorAll("input[name='sort'"))

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elem) => {
                localStorage.setItem(`${elem.name}ext`, `${elem.isActive}`)
            })
            const allarr = data;
            const activearr = data.filter((elem) => elem.isActive === true)
            const inactivearr = data.filter((elem) => elem.isActive === false)
            console.log(activearr)
            console.log(inactivearr)
            console.log("DOM LOADED")
            all.addEventListener("change", () => {
                container.innerHTML = ""
                allarr.forEach(element => {
                
                container.innerHTML +=
                    `<div id="${element.name.toLowerCase()}" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${element.logo}" alt="${element.name} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${element.name}</h1>
                    <p class="text-neutral-600">${element.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${element.name.toLowerCase()}tog" class="toggleExt sr-only peer" ${element.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                toggleBtns = document.querySelectorAll(".toggleExt")
            });
            })
            all.dispatchEvent(new Event("change"));

            active.addEventListener("change", () => {
                container.innerHTML = ""
                activearr.forEach((element) => {
                        container.innerHTML +=
                        `<div id="${element.name.toLowerCase()}" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${element.logo}" alt="${element.name} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${element.name}</h1>
                    <p class="text-neutral-600">${element.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${element.name.toLowerCase()}tog" class="toggleExt sr-only peer" ${element.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                toggleBtns = document.querySelectorAll(".toggleExt")   
                })
            })

            inactive.addEventListener("change", () => {
                container.innerHTML = ""
                inactivearr.forEach((element) => {
                        container.innerHTML +=
                        `<div id="${element.name.toLowerCase()}" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${element.logo}" alt="${element.name} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${element.name}</h1>
                    <p class="text-neutral-600">${element.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${element.name.toLowerCase()}tog" class="toggleExt sr-only peer" ${element.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                })
                toggleBtns = document.querySelectorAll(".toggleExt")
            })

        

        })
})