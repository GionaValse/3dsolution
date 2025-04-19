import emailjs from "@emailjs/browser";

const emailOption = {
    publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
};

emailjs.init(emailOption);

export const sendEmail = async (templateId, form) => {
    try {
        const response = await emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            templateId,
            form
        );
        
        console.log('SUCCESS!', response.text);
        return { success: true, message: 'Email inviata con successo!' };
    } catch (error) {
        console.error('FAILED...', error);
        return { success: false, message: 'Errore durante l\'invio dell\'email.', error };
    }
};