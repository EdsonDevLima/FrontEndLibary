export interface DataContext{
    Id:number
    UserName:string,
    Email:string,
    IsAutheticated:boolean,
    Login:(emal:string,password:string)=>void
    Register:(UserName:string,Email:string,Password:string,ConfirmPassword:string)=>void
    requestTokenAutheticate:(route:string)=>Promise<void>
    
}

