export interface AppUser{
    id:number;
    username:string;
    password:string;
    mail:string;
    roles:AppRole[];
    userRoles:UserRoles[]
}
export interface UserRoles{
    roleName:string;
    hasRole:boolean;
}
export interface AppUsersDTOList{
    appUsers:AppUser[];
    allRoles:AppRole[];
}
export interface AppRole{
    id:number;
    roleName:string;
}
export interface AppUserRequestDTO{
    username:string;
    password:string;
    mail:string;
    userRoles:UserRoles[]
}
export interface ConnectedUser{
    id:number;
    username:string;
    jwt:string;
    disconnected:boolean;
}
