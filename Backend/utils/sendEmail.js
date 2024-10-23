const mailgun = require("mailgun-js");

const sendEmail = async (email, template, subject) => {
    const mg = mailgun({
        apiKey: "273f0d3959c4324720e848ceb1f37a04-784975b6-b8a40bf5",
        domain: "sandbox87af438c34b14af498641db484c664b1.mailgun.org",
    });

    const data = {
        from: "<arxlan62@gmail.com>", // Update this to a verified sender
        to: email,
        subject: subject,
        html: template,
    };

    try {
        const body = await mg.messages().send(data);
        console.log("Email sent:", body);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
module.exports=sendEmail