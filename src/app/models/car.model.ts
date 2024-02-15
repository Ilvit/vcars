export interface Car{
    id:number;
    matriculation:string;
    chassisNumber:string;
    mark:string;
    category:string;
    owner: Owner;
    taxations:Taxation[];
    carTaxations:CarTaxation[]
}
export interface CarTaxation{
    taxationName:string;
    paid:boolean
}
export interface SelectedTaxations{
    taxationName:string;
    selected:boolean
}
export interface CarRequestDTO{
    matriculation:string;
    chassisNumber:string;
    mark:string;
    category:string;
    ownerId: number;    
}
export interface Owner{
    id:number;
    name:string;
    lastName:string;
    phoneNumber:string;
    cars:Car[];
}
export interface CarResponseDTOPage{
    cresdto:Car[];
    totalCarsOnPage:number;
    totalCars:number;
    totalPages:number; 
    currentPage:number;
    carsPagesArray:Array<number>;
    taxationsList:SelectedTaxations[]
}
export interface Taxation{
    id:number;
    taxation:string;
    date:Date;
    cars:Car[]
}