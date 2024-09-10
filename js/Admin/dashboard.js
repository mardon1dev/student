// Start

const studentList = document.querySelector(".student-list");
const noInformation = document.querySelector(".no-information");
const loading = document.querySelector(".loading")


axios('http://localhost:3000/students').
then(response => {
    showStudents(response.data)
})
.catch(error => {
    console.log(error);
})

function showStudents (arr = []) {
    console.log(arr);
    studentList.innerHTML = "";
    if (arr.length == 0) {
        noInformation.textContent = "No student information."
    }
    else{
        noInformation.textContent = ""
        arr.forEach(student => {
            const studentElement = document.createElement('tr');
            studentElement.classList.add("bg-[#ffffff]")
            studentElement.innerHTML = `
            <td class="py-4 px-3 rounded-l-lg">
            <img class="rounded-lg object-cover" src=${student.imageURL || "./images/avarat.avif"} alt="Image" width="65" height="55">
            </td>
            <td class="py-4 px-3 text-sm font-normal leading-4 text-left">${student.username}</td>
            <td class="py-4 px-3 text-sm font-normal leading-4 text-left">${student.email}</td>
            <td class="py-4 px-3 text-sm font-normal leading-4 text-left">${student.phone}</td>
            <td class="py-4 px-3 text-sm font-normal leading-4 text-left">${student.enrollNumber}</td>
            <td class="py-4 px-3 text-sm font-normal leading-4 text-left">${student.dateAdmission}</td>
            <td class="py-4 px-3 rounded-r-lg">
            <div class="flex items-center justify-center gap-3">
            <button class="" onclick = showStudentInfo("${student.id}")>
            <svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2438_2)">
            <path d="M6.25 4.5C5.65326 4.5 5.08097 4.26295 4.65901 3.84099C4.23705 3.41903 4 2.84674 4 2.25C4 1.65326 4.23705 1.08097 4.65901 0.659009C5.08097 0.237053 5.65326 0 6.25 0C6.84674 0 7.41903 0.237053 7.84099 0.659009C8.26295 1.08097 8.5 1.65326 8.5 2.25C8.5 2.84674 8.26295 3.41903 7.84099 3.84099C7.41903 4.26295 6.84674 4.5 6.25 4.5ZM13.75 4.5C13.1533 4.5 12.581 4.26295 12.159 3.84099C11.7371 3.41903 11.5 2.84674 11.5 2.25C11.5 1.65326 11.7371 1.08097 12.159 0.659009C12.581 0.237053 13.1533 0 13.75 0C14.3467 0 14.919 0.237053 15.341 0.659009C15.7629 1.08097 16 1.65326 16 2.25C16 2.84674 15.7629 3.41903 15.341 3.84099C14.919 4.26295 14.3467 4.5 13.75 4.5ZM21.25 4.5C20.6533 4.5 20.081 4.26295 19.659 3.84099C19.2371 3.41903 19 2.84674 19 2.25C19 1.65326 19.2371 1.08097 19.659 0.659009C20.081 0.237053 20.6533 0 21.25 0C21.8467 0 22.419 0.237053 22.841 0.659009C23.2629 1.08097 23.5 1.65326 23.5 2.25C23.5 2.84674 23.2629 3.41903 22.841 3.84099C22.419 4.26295 21.8467 4.5 21.25 4.5Z" fill="black" fill-opacity="0.54" shape-rendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_d_2438_2" x="0" y="0" width="27.5" height="12.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2438_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2438_2" result="shape"/>
            </filter>
            </defs>
            </svg>                                    
            </button>
            <button onclick = updateInfo("${student.id}")>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3042 2.08777L16.9123 0.695801C16.4488 0.231934 15.8409 0 15.2331 0C14.6252 0 14.0174 0.231934 13.5535 0.69543L0.476893 13.772L0.00560345 18.0107C-0.0537716 18.5443 0.366678 19 0.888807 19C0.921834 19 0.954861 18.9981 0.988631 18.9944L5.2243 18.5265L18.3046 5.44617C19.232 4.51881 19.232 3.01514 18.3042 2.08777ZM4.67916 17.3924L1.22687 17.775L1.61133 14.3175L11.4041 4.52475L14.4757 7.59629L4.67916 17.3924ZM17.4648 4.60676L15.3151 6.7565L12.2435 3.68496L14.3933 1.53521C14.6174 1.31107 14.9158 1.1875 15.2331 1.1875C15.5504 1.1875 15.8483 1.31107 16.0729 1.53521L17.4648 2.92719C17.9276 3.39031 17.9276 4.14363 17.4648 4.60676Z" fill="#FEAF00"/>
            </svg>                                    
            </button>
            <button onclick = deleteStudent("${student.id}")>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137265 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137265 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z" fill="#FEAF00"/>
            </svg>                                    
            </button>
            </div>
            </td>
            `
            studentList.prepend(studentElement);
        })
    }
}

const addStudent = document.querySelector(".add-student");
const outerPage = document.querySelector(".outer-page");
const addForm = document.querySelector(".update-form");

addStudent.addEventListener("click", () => {
    outerPage.classList.add("scale-100");
    outerPage.classList.remove("scale-0");
});

outerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("outer-page")) {
        outerPage.classList.remove("scale-100");
        outerPage.classList.add("scale-0");
        addForm.reset();
    }
});

// Image
const image = document.querySelector("#image");
const showImage = document.querySelector("#showImage");
image.addEventListener("change", (e)=>{
    const file = e.target.files[0];
    // const file = URL.createObjectURL(e.target.files[0]);
    // showImage.src = file

    const reader = new FileReader();
    reader.onload = function(event) {

        showImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
})


// Add new student
async function addNewStudent(e) {
    e.preventDefault();
    const imageURL = addForm.querySelector("#showImage").src;
    const username = addForm.querySelector("#username").value;
    const email = addForm.querySelector("#email").value;
    const phone = addForm.querySelector("#phone").value;
    const enrollNumber = addForm.querySelector("#enroll-number").value;
    const date = addForm.querySelector("#admission").value;
    const dateAdmission = formatDate(date);
    
    await axios.post(`http://localhost:3000/students`, {
    username: username,
    email: email,
    phone: phone,
    enrollNumber: enrollNumber,
    dateAdmission: dateAdmission,
    imageURL: imageURL
});

outerPage.classList.remove("scale-100");
outerPage.classList.add("scale-0");
addForm.reset();
// showStudents();
}

addForm.addEventListener("submit", addNewStudent);

const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", () => {
    outerPage.classList.remove("scale-100");
    outerPage.classList.add("scale-0");
    addForm.reset();
});

// Update 

const submitBtn = document.querySelector("#submit");

async function updateInfo(id) {
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    const student = response.data;
    
    outerPage.classList.add("scale-100");
    outerPage.classList.remove("scale-0");
    
    addForm.querySelector("#username").value = student.username;
    addForm.querySelector("#email").value = student.email;
    addForm.querySelector("#phone").value = student.phone;
    addForm.querySelector("#enroll-number").value = student.enrollNumber;
    const formattedDate = parseFormattedDate(student.dateAdmission);
    if (formattedDate) {
        addForm.querySelector("#admission").value = formattedDate;
    }
    addForm.querySelector("#showImage").src = student.imageURL
    submitBtn.textContent = "Update"
    
    addForm.removeEventListener("submit", addNewStudent);
    addForm.addEventListener("submit", handleUpdate);
    
    async function handleUpdate(e) {
        e.preventDefault();
        const username = addForm.querySelector("#username").value;
        const email = addForm.querySelector("#email").value;
        const phone = addForm.querySelector("#phone").value;
        const enrollNumber = addForm.querySelector("#enroll-number").value;
        const date = addForm.querySelector("#admission").value;
        const dateAdmission = formatDate(date);
        const imageURL = addForm.querySelector("#showImage").src;
        
        await axios.put(`http://localhost:3000/students/${id}`, {
        username: username,
        email: email,
        phone: phone,
        enrollNumber: enrollNumber,
        dateAdmission: dateAdmission,
        imageURL: imageURL
    });
    
    outerPage.classList.remove("scale-100");
    outerPage.classList.add("scale-0");
    addForm.reset();
    // showStudents();
}
}

// Delete student;
async function deleteStudent(id){
    await axios.delete(`http://localhost:3000/students/${id}`);
    // showStudents();
}

// Sort Students
async function sortStudents() {
    const response = await axios.get('http://localhost:3000/students');
    let students = response.data;
    students = students.sort((a,b)=>{
        return a.username.localeCompare(b.username);
    })
    showStudents(students)
}

async function showStudentInfo(id){
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    const student = response.data;
    localStorage.setItem("studentInfo", JSON.stringify(student));
    loading.classList.remove("hidden")
    setTimeout(() => {
        window.location.pathname = "./student.html"
    }, 1000);
}

// Search
const search = document.querySelector("#search");
search.addEventListener("keyup", searchStudents);
async function searchStudents(e) {
    const query = e.target.value.trim().toLowerCase();
    const response = await axios.get('http://localhost:3000/students');
    const students = response.data;
    if (query.length > 0 || !query) {
        const filteredStudents = students.filter(student => student.username.toLowerCase().includes(query));
        showStudents(filteredStudents)
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function parseFormattedDate(dateString) {
    const [day, month, year] = dateString.split(' ');
    const monthNumber = ('JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(month) / 3 + 1).toString().padStart(2, '0');
    return `${year}-${monthNumber}-${day.padStart(2, '0')}`;
}



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