const withdrawBtn = document.getElementById("withdrawBtn");
const pinModal = document.getElementById("pinModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const pinInput = document.getElementById("pinInput");

withdrawBtn.addEventListener("click", () => {
    pinModal.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
    pinModal.style.display = "none";
    pinInput.value = "";
});

confirmBtn.addEventListener("click", () => {
    const pin = pinInput.value;

    if (pin === "1234") {
        alert("withdrawal approved.");
    } else {
        alert("Invalid PIN.");
    }

    pinModal.style.display = "none";
    pinInput.value = "";
});
