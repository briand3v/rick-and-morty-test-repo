
export const FormStructure = {
    currentTyping: 'username',
    userName: [
        {
            key: 'usernamecharacters',
            label: '* Least 4 characters',
            validate: true,
            show: false
        }
    ],
    email: [
        {
            key: 'emailformat',
            label: 'Must have email format',
            validate: true,
            show: false
        }
    ],
    password: [
        {
            key: 'passwordcharactersminimum',
            label: '* Least 8 characters',
            validate: true,
            show: false,
        },
        {
            key: 'passwordonenumber',
            label: '* Least one number (0-9) or a symbol',
            validate: true,
            show: false
        },
        {
            key: 'passwordspecialcharacter',
            label: '* Lowercase (a-z) and uppercase (A-Z)',
            validate: true,
            show: false
        }
    ],
    confirmPassword: [
        {
            key: 'confirmmatchpassword',
            label: '* Must match with password',
            validate: true,
            show: false
        }
    ]
}