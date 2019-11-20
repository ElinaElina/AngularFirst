export interface User {
    // when use something wich not mandatory use ? mark
    firstName: string,
    lastName: string,
    // age?: number,

    // // adress is other Object
    // address?: {
    //     street?: string,
    //     city?: string,
    //     state?: string
    // },
    email: string
    image?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
    hide?: boolean

}
