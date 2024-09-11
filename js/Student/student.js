// Display user data

const studentData = JSON.parse(localStorage.getItem("studentInfo"));
console.log(studentData);

const studentName = document.querySelector(".student-name");
studentName.textContent = studentData.username;

const loading = document.querySelector(".loading");
loading.classList.remove("hidden");

const studentInfo = document.querySelector(".student-info");
setTimeout(() => {
    studentInfo.innerHTML = `
    <div>
        <img class="rounded-lg" src=${studentData.imageURL} alt="" width="206" height="216">
    </div>
    <div class="flex flex-col gap-4">
        <div>
            <span class="text-xs font-semibold leading-3 text-[#ACACAC]">Name</span>
            <p class="text-base font-normal leading-5 text-left">${studentData.username}</p>
        </div>
        <div>
            <span class="text-xs font-semibold leading-3 text-[#ACACAC]">Email</span>
            <p class="text-base font-normal leading-5 text-left">${studentData.email}</p>
        </div>
        <div>
            <span class="text-xs font-semibold leading-3 text-[#ACACAC]">Number</span>
            <p class="text-base font-normal leading-5 text-left">${studentData.phone}</p>
        </div>
        <div>
            <span class="text-xs font-semibold leading-3 text-[#ACACAC]">Date admission</span>
            <p class="text-base font-normal leading-5 text-left">${studentData.dateAdmission}</p>
        </div>
    </div>
`
}, 1000)




// Change admin information;

const adminImage = document.querySelector("#admin-image");
const adminMainImage = document.querySelector("#admin-main-image");
const adminName = document.querySelector("#admin-name");

let admin = JSON.parse(localStorage.getItem("loggedInUser"));
adminMainImage.src = admin.image || "./images/avarat.avif";
adminName.textContent = admin.username;
adminImage.addEventListener("change", (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(){
        adminMainImage.src = reader.result;
        console.log(adminMainImage.src);
        admin = {
            ...admin,
            image: reader.result
        }
        localStorage.setItem("loggedInUser", JSON.stringify(admin))
    }
    reader.readAsDataURL(file);
})

// Logout
const logout = document.querySelector(".logout-btn");
const logoutNotification = document.querySelector(".logout-notification");

logout.addEventListener("click", () => {
    logoutNotification.classList.remove("-left-[100%]")
    logoutNotification.classList.add("left-0");

    const logoutNo = logoutNotification.querySelector("#logout-no");
    logoutNo.addEventListener("click", () => {
        logoutNotification.classList.remove("left-0");
        logoutNotification.classList.add("-left-[100%]");
    })
    const logoutYes = logoutNotification.querySelector("#logout-yes");
    logoutYes.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        loading.classList.remove("hidden")
        setTimeout(() => {
            window.location.pathname = "./index.html"
        }, 1000);
    })
})