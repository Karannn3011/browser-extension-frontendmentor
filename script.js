const container = document.querySelector(".container")
const active = document.getElementById("active")
const all = document.getElementById("all")
const inactive = document.getElementById("inactive")
const toggleMode = document.getElementById("toggleMode")



document.addEventListener("DOMContentLoaded", () => {
    sessionStorage.clear();
    let toggleBtns;
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elem) => {
                sessionStorage.setItem(elem.name.toLowerCase().replace(" ",""), JSON.stringify(elem));
            })

            console.log("DOM LOADED")
            all.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(sessionStorage).forEach((key) => {
                    let toAdd = JSON.parse(sessionStorage.getItem(key));
                    container.innerHTML +=
                        `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md dark:bg-[rgba(138,143,221,0.55)] flex flex-col justify-between lg:gap-y-[50px]">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2 dark:text-neutral-100">${toAdd.name}</h1>
                    <p class="text-neutral-600 font-light dark:text-neutral-200">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4 lg:relative lg:bottom-0">
                    <button id="${toAdd.name.toLowerCase().replace(" ", "")}remove" class="removebtn border-neutral-600 border-[1px] py-1 focus:border-red-400 dark:hover:bg-red-400 dark:hover:text-neutral-950 hover:bg-red-500 hover:text-white cursor-pointer  px-4 rounded-full dark:text-neutral-100 dark:border-neutral-100" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 dark:bg-[rgba(138,143,221,0.45)] hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:peer-checked:bg-red-400 peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                })

                toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);

                const removebtns = document.querySelectorAll(".removebtn")
                addRemove(removebtns)

            })
            const tempev = new Event("change")
            all.dispatchEvent(tempev);





            active.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(sessionStorage).forEach((key) => {
                    let toAdd = JSON.parse(sessionStorage.getItem(key));
                    if (toAdd.isActive) {
                        container.innerHTML +=
                            `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md dark:bg-[rgba(138,143,221,0.55)] flex flex-col justify-between lg:gap-y-[50px]">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2 dark:text-neutral-100">${toAdd.name}</h1>
                    <p class="text-neutral-600 font-light dark:text-neutral-200">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4 lg:relative lg:bottom-0">
                    <button id="${toAdd.name.toLowerCase().replace(" ", "")}remove" class="removebtn border-neutral-600 border-[1px] py-1 dark:focus:border-red-400 dark:hover:bg-red-400 dark:hover:text-neutral-100 cursor-pointer  px-4 rounded-full dark:text-neutral-100 dark:border-neutral-100" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 dark:bg-[rgba(138,143,221,0.45)] hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:peer-checked:bg-red-400 peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                    }

                })
                toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);

                const removebtns = document.querySelectorAll(".removebtn")
                addRemove(removebtns)
            })

            inactive.addEventListener("change", () => {
                container.innerHTML = ""
                Object.keys(sessionStorage).forEach((key) => {
                    let toAdd = JSON.parse(sessionStorage.getItem(key));
                    if (!toAdd.isActive) {
                        container.innerHTML +=
                            `<div id="${toAdd.name.toLowerCase().replace(" ", "")}extension" class="w-[90%] bg-white mx-auto text-center p-4 rounded-xl my-5 shadow-md dark:bg-[rgba(138,143,221,0.45)] flex flex-col justify-between lg:gap-y-[50px]">
                    <div class="flex items-start gap-x-4">
                    <img class="" src="${toAdd.logo}" alt="${key} logo">
                    <div class="text-left">
                    <h1 class="text-xl font-bold mb-2 dark:text-neutral-100">${toAdd.name}</h1>
                    <p class="text-neutral-600 font-light dark:text-neutral-200">${toAdd.description}</p>
                    </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                    <button id="${toAdd.name.toLowerCase().replace(" ", "")}remove" class="removebtn border-neutral-600 border-[1px] py-1 dark:focus:border-red-400 dark:hover:bg-red-400 dark:hover:text-neutral-100 cursor-pointer px-4 rounded-full dark:text-neutral-100 dark:border-neutral-100" type="button">Remove</button>
                    <label class="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="${toAdd.name.toLowerCase().replace(" ", "")}tog" class="toggleExt sr-only peer" ${toAdd.isActive ? "checked" : ""}>
                        <div class="w-9 h-5 bg-neutral-300 hover:bg-gray-300 dark:bg-[rgba(138,143,221,0.5)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:peer-checked:bg-red-400 peer-checked:bg-red-700 hover:peer-checked:bg-red-500"></div>
                    </label>
                    </div>
                </div>`
                    }
                })

                const toggleBtns = document.querySelectorAll(".toggleExt")
                addTogging(toggleBtns);

                const removebtns = document.querySelectorAll(".removebtn")
                addRemove(removebtns)
            })

            toggleMode.addEventListener("click", () => {
                document.documentElement.classList.toggle("dark")
                if (toggleMode.src.includes("assets/images/icon-moon.svg")) {
                    toggleMode.src = "assets/images/icon-sun.svg"
                } else {
                    toggleMode.src = "assets/images/icon-moon.svg"
                }
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
                let tempitem = JSON.parse(sessionStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                sessionStorage.setItem(btnid, JSON.stringify(tempitem))
            } else if (inactive.checked) {
                setTimeout(() => {
                    divToRemove.remove()
                }, 500)
                let tempitem = JSON.parse(sessionStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                sessionStorage.setItem(btnid, JSON.stringify(tempitem))
            } else if (all.checked) {
                let tempitem = JSON.parse(sessionStorage.getItem(btnid))
                tempitem.isActive = !tempitem.isActive;
                sessionStorage.setItem(btnid, JSON.stringify(tempitem))
            }

        })
    })
}

function addRemove(removeBtns) {
    removeBtns.forEach((btn) => {
        
        btn.addEventListener("click", () => {
            const tempid = btn.id.replace("remove", "")
            console.log(tempid)
            const divToRemove = document.querySelector(`#${tempid}extension`)
            divToRemove.remove()
            sessionStorage.removeItem(tempid)
        })
    })
}