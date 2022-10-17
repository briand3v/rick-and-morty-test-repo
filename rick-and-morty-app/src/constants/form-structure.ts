import { object, string, TypeOf } from "zod";

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
            label: '* At least one special character, @...',
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

export const RegisterInputSchema = object({
    username: string().min(1, 'Full name is required').max(100),
    email: string()
        .min(1, 'Email address is required')
        .email('Email Address is invalid'),
    password: string()
        .min(1, 'Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
});

export const loginSchema = object({
    email: string()
        .min(1, 'Email address is required')
        .email('Email Address is invalid'),
    password: string()
        .min(1, 'Password is required')
        .min(4, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
});

export type RegisterInput = TypeOf<typeof RegisterInputSchema>

export type LoginInput = TypeOf<typeof loginSchema>
