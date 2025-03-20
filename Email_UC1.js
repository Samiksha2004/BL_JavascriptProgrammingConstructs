function validateEmailUC1(email) {
    const emailRegex = /^abc.*@bridgelabz\.co(\.\w+)?$/;  
    console.log(emailRegex.test(email) ? ` Valid: ${email}` : ` Invalid: ${email}`);
}

// Test Cases
validateEmailUC1("abc@bridgelabz.co");       
validateEmailUC1("abc.xyz@bridgelabz.co.in");
