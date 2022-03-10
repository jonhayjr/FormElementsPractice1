const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    //Prevent Default Behavior 
    e.preventDefault();

    const formData = new FormData(e.target);

    const userName = formData.get("name");
    const userEmail = formData.get("email");

    const newParagraph = document.createElement("p");

    newParagraph.textContent = `Congratulations ${userName}!!!  You have signed up with your email, ${userEmail}!`;

    signupForm.append(newParagraph);

})