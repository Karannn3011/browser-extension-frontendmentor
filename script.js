const container = document.querySelector(".container")
const active = document.getElementById("active")
const all = document.getElementById("all")
const inactive = document.getElementById("inactive")


document.addEventListener("DOMContentLoaded", () => {
    localStorage.clear();
    let toggleBtns;
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elem) => {
                localStorage.setItem(elem.name.toLowerCase().replace(" ",""), JSON.stringify(elem));
            })

            console.log("DOM LOADED")
            all.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(localStorage).forEach((key) => {
                    let toAdd = JSON.parse(localStorage.getItem(key));
                    container.innerHTML +=
                        `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${toAdd.name}</h1>
                    <p class="text-neutral-600">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                })

                toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);

            })
            const tempev = new Event("change")
            all.dispatchEvent(tempev);





            active.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(localStorage).forEach((key) => {
                    let toAdd = JSON.parse(localStorage.getItem(key));
                    if (toAdd.isActive) {
                        container.innerHTML +=
                            `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${toAdd.name}</h1>
                    <p class="text-neutral-600">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                    }

                })
                toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);
            })

            inactive.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(localStorage).forEach((key) => {
                    let toAdd = JSON.parse(localStorage.getItem(key));
                    if (!toAdd.isActive) {
                        container.innerHTML +=
                            `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2">${toAdd.name}</h1>
                    <p class="text-neutral-600">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button class="border-neutral-600 border-[1px] py-1 px-4 rounded-full" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                    }
                })

                const toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);
            })

        })

})

function addTogging(toggleBtns) {
    toggleBtns.forEach((btn) => {
        btn.addEventListener("change", () => {
            const btnid = btn.id.replace("tog", "")
            const divToRemove = document.querySelector(`#${btnid}extension`)
            if (active.checked) {
                setTimeout(() => {
                    divToRemove.remove()
                }, 500)
                let tempitem = JSON.parse(localStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                localStorage.setItem(btnid, JSON.stringify(tempitem))
            } else if (inactive.checked) {
                setTimeout(() => {
                    divToRemove.remove()
                }, 500)
                let tempitem = JSON.parse(localStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                localStorage.setItem(btnid, JSON.stringify(tempitem))
            } else if (all.checked) {
                let tempitem = JSON.parse(localStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                localStorage.setItem(btnid, JSON.stringify(tempitem))
            }

        })
    })
}