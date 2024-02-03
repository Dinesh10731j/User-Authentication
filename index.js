const Username = document.querySelector(".username");
const Password = document.querySelector(".password");
const Submitbtn = document.querySelector("#submit-btn");
const Message = document.querySelector("#message");

const getMessage = async () => {
    const Url = `http://localhost:8080/`;

    const addInfo = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: Username.value,
            password: Password.value
        })
    }

    try {
        const fetchMsg = await fetch(Url, addInfo);
        const response = await fetchMsg.json();

        if (fetchMsg.ok) {
            console.log(response);
            // Handle success, e.g., redirect or show a success message
        } else {
            console.error(response.message);
            // Display error message in the frontend
            console.log(response.message);

            Message.innerHTML = response.message
        }
    } catch (error) {
        console.error('Error:', error.message);
     
    }
}

Submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    getMessage();
});
