const dobInp = document.getElementById("dob");
// Set the max attribute to today's date to prevent selecting future dates
dobInp.max = new Date().toISOString().split('T')[0];
const calcBtn = document.getElementById("calc");
const resultPara = document.getElementById("result");
const errorPara = document.getElementById("error");

// Function to calculate age based on selected date
function calculateAge() {
    resultPara.innerHTML = "";
    errorPara.innerHTML = "";
    const selValue = dobInp.value;
    if (!selValue) {
        errorPara.innerHTML = "Please select a date";
        return;
    }

    const selDate = new Date(selValue);
    const today = new Date();

    // let age = today.getFullYear() - selDate.getFullYear();
    // const monthDiff = today.getMonth() - selDate.getMonth();
    // const dayDiff = today.getDate() - selDate.getDate();

    // // If the birthday has not occurred this year, subtract one year from age
    // if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    //     age--;
    // }


    let years = today.getFullYear() - selDate.getFullYear();
    let monthDiff = today.getMonth() - selDate.getMonth();
    let dayDiff = today.getDate() - selDate.getDate();

    if (monthDiff < 0) {
        years--;
        monthDiff += 12;
    }

    if (dayDiff < 0) {
        monthDiff--;
        const prevMnth = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff += prevMnth.getDate();

        if (monthDiff < 0) {
            years--;
            monthDiff += 12;
        }
    }

    console.log(years, monthDiff, dayDiff)
    // resultPara.innerHTML = `Your age is <span>${age}</span> years.`;

    resultPara.innerHTML = `You are <span>${years}</span> years, <span>${monthDiff}</span> months, and <span>${dayDiff}</span> days old.`;
}

calcBtn.addEventListener("click", calculateAge);
