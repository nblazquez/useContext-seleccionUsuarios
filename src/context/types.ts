export type Estado =  {
    users: Usuario[],
    selectedUser: Usuario
};

export type Usuario = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};