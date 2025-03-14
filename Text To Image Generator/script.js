const InputText = document.getElementById("input");
const image = document.getElementById("image");
const GenerateButton = document.getElementById("btn");
const svg = document.getElementById("svg");
const load = document.getElementById("loading");
const ResetBtn = document.getElementById("reset");
const downloadBtn = document.getElementById("download");

// Function to call the secure API route
async function generate() {
    load.style.display = "block";

    const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: InputText.value }),
    });

    const objectUrl = URL.createObjectURL(await response.blob());
    image.src = objectUrl;
    image.style.display = "block";
    load.style.display = "none";

    downloadBtn.addEventListener("click", () => {
        download(objectUrl);
    });
}

// Event listeners
GenerateButton.addEventListener("click", () => {
    generate();
    svg.style.display = "none";
});

InputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generate();
        svg.style.display = "none";
    }
});

ResetBtn.addEventListener("click", () => {
    InputText.value = "";
    window.location.reload();
});

function download(objectUrl) {
    fetch(objectUrl)
        .then((res) => res.blob())
        .then((file) => {
            let a = document.createElement("a");
            a.href = URL.createObjectURL(file);
            a.download = new Date().getTime();
            a.click();
        })
        .catch(() => alert("Failed to download"));
}
