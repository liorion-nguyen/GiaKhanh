export type StackParams = {
    Login: undefined;
    SignUp: undefined;
    Home: { 
        user: { 
            email: string, 
            fullName: string, 
            password: string 
        }
    };
};
