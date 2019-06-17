const re = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (recipients) => {
    const invalidEmails = recipients
    .split(',')
    .map(recipients => recipients.trim())
    .filter(recipients => re.test(recipients) === false)

    if (invalidEmails.length) {
        return 'These emails are invalid:' + invalidEmails;
    }

    return;
};