export const Validate = (email, password) => {
    // regex expression for password and email validation
    const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Corrected password regex
    const passwordRejex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    
    const emailCheck = emailRejex.test(email);
    const passwordCheck = passwordRejex.test(password);

    if (!emailCheck) return "Email ID is not valid";
    if (!passwordCheck) return "Invalid password pattern.";

    return null;
}