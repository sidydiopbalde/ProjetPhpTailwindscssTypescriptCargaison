import { Alimentaire } from "./Alimentaire.js";
import { Produit } from "./Produit.js";

export abstract class Cargaison {
    private produits: Produit[];
    private distance:number;
  

    constructor( distance: number, produits:Produit[] ) {
            this.distance=distance;
            this.produits=produits
        }

    public ajouterProduit(produit: Produit) {
      /*   if (this.produits.length >= 10) {
            console.log('la cargaison est pleine')
            return
        } */

        this.produits.push(produit);
    }

  public getProduits():Produit[]{
    return this.produits;
  }
    public getDistance(){
        return this.distance;
    }
    
    abstract calculerFrais(produit:Produit): number 
    abstract nbProduit():number 
    abstract sommeTotale(): number ;
    abstract info():void;
}


/* 
type ToxicityType = 1|2|3|4|5|6|7|8|9|10
let x:(number | string)[];

export abstract class Cargo {
    static readonly max: number =10;
    protected abstract products:Product[] ;
    constructor(private _libelle: string, private _distance: string, private _type: string,private _poid:number,private _dat1:string,private _date2:string) { }

    get libelle(): string {
        return this._libelle;
    }
    set libelle(value: string) {
        this._libelle = value;
    }
    get distance(): string {
        return this._distance;
    }
    set distance(value: string) {
        this._distance = value;
    }
    get type(): string {
        return this._type;
    }
    set type(value:string) {
        this._type = value;
    }
    get poid():number{
        return this._poid;
    }
    set poid(value:number){
        this._poid = value;
    }
    get dat1():string{
        return this._dat1;
    }
    set dat1(value:string){
        this._dat1 = value;
    }
    get date2():string{
        return this._date2;
    }
    set date2(value:string){
        this._date2 = value;
    }
    abstract addProduct(product:Product):void;

    abstract calculAmount(product:Product):number;

    calculTotal():number{
        let total:number = 0;
        this.products.forEach(product => {
            total += this.calculAmount(product);
        });
        return total;
        // return this.products.reduce(
        //     (total,product)=>total + this.calculAmount(product),0
        //  );
        
    }

    info():HTMLTableRowElement{
        let tr:HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `
            <td>${this.libelle}</td>
            <td>${this.distance}</td>
            <td>${this.type}</td>
            <td>${this.poid}</td>
            <td>${this.dat1}</td>
            <td>${this.date2}</td>
        `;
        return tr;
    }
}

export class Air extends Cargo {
    products:(Food |Material)[];
    constructor( libelle: string, distance: string,  type: string, poid:number, dat1:string, date2:string) {
        super(libelle,distance, type,poid,dat1,date2);
        this.products = [];
    }
    addProduct(product: Food | Material): void {
        if (product instanceof Chimical) {
            console.log("impossible to add")
            return;
        }   
        if (this.products.length===Air.max) {
            console.log("impossible to add cargaison plein")
            return;
        }
        this.products.push(product);
    }
    calculAmount(product: Food | Material): number {
        if (product instanceof Chimical) {
            console.log("impossible to add");
            return 0;
        }
        let amount:number;
        if (product instanceof Food ) {
            amount=500*product._poid + 5000;
        } else {
            amount=1000*product._poid + 10000;
        }

        return amount;
        
    }
}
export class Maritime extends Cargo {
    products:(Food |Unbreakable | Chimical)[];
    constructor( libelle: string,  distance: string, type: string, poid:number, dat1:string, date2:string) {
        super(libelle, distance, type,poid,dat1,date2);
        this.products = [];
    }
    addProduct(product: Food | Unbreakable | Chimical): void {
        if (product instanceof Fragile) {
            console.log("impossible to add")
            return;
        }
        if (this.products.length===Maritime.max) {
            console.log("impossible to add cargaison plein")
            return;
        }
        this.products.push(product);
    }
    calculAmount(product: Food | Unbreakable | Chimical): number {
        if (product instanceof Fragile) {
            console.log("impossible to add");
            return 0;
        }
        let amount:number;
        if (product instanceof Chimical ) {
            amount=300*product._poid + 5000;
        } else if(product instanceof Material){
            amount=1500*product._poid + 10000;
        }
        else{
            amount=500*product._poid + 5000;
        }
        return amount;
        
    }
}
export class Road extends Cargo {
    products:(Food |Material)[];
    constructor( libelle: string,  distance: string,  type: string, poid:number, dat1:string, date2:string) {
        super(libelle, distance,type,poid,dat1,date2);
        this.products = [];
    }
    addProduct(product: Food | Material): void {
        if (product instanceof Chimical) {
            console.log("impossible to add")
            return;
        }
        if (this.products.length===Road.max) {
            console.log("impossible to add cargaison plein")
            return;
        }
        this.products.push(product);
    }
    calculAmount(product: Food | Material ): number {
        if (product instanceof Chimical) {
            console.log("impossible to add");
            return 0;
        }
        let amount:number;
        if (product instanceof Food ) {
            amount=300*product._poid + 5000;
        } 
        else{
            amount=200*product._poid + 5000;
        }
        return amount;
        
    }
} */
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
/* export abstract class Product{
    constructor(public _name: string, public _poid: number) { }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get poid(): number {
        return this._poid;
    }
    set poid(value: number) {
        this._poid = value;
    }
    info(): void {
        console.log(Name:${this.name} ,poid:${this.poid});
    }
}
export class Chimical extends Product {
    constructor(name: string, poid: number,private _toxicity: ToxicityType) {
        super(name, poid);
    }
    get toxicity(): ToxicityType {
        return this._toxicity;
    }
    set toxicity(value: ToxicityType) {
        this._toxicity = value;
    }
}
export class Food extends Product {
    constructor(name: string, poid: number) {
        super(name, poid);
    }
}
export abstract class Material extends Product{
    constructor(name: string, poid: number) {
        super(name, poid);
    }
}
export class Fragile extends Material {
    constructor(name: string, poid: number) {
        super(name, poid);
    }
}
export class Unbreakable extends Material{
    constructor(name: string, poid: number) {
        super(name, poid);
    }
} 


import { Form } from "./forms/form1.js";
import { Cargo,Air,Maritime,Material,Food,Fragile,Product,Chimical,Road,Unbreakable } from "./Model/Cargo.js"
let tab:any[]=[];
//a=get tabb by id 

function afficheData(){
     const contain=document.getElementById("tbody");
     if (contain) {
        contain.innerHTML="";
         tab.forEach(carg => {
            contain.appendChild(carg.info());
         });
     }
    //a.inner+=carg.infos()
    //}
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addCargoForm') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', funct);
    }
});
function funct(e: Event) {
    e.preventDefault();
    const form2 = new Form("addCargoForm");
    console.log(form2.getFormData())
    let data = form2.getFormData()
    console.log(data.type)
    ///if verification form{
    if(data.type== "aerien"){
        let newAir = new Air( data.libelle,  data.distance,  data.type, data.poids, data.dateDepart, data.dateArrive)
        console.log(newAir)
        tab.push(newAir)
        //fonction ecrit dans le json 

        console.log(newAir.info().innerHTML)
        console.log(tab)
    }
    else if(data.type== "maritime"){
        let newTerr= new Road(data.libelle,  data.distance,  data.type, data.poids, data.dateDepart, data.dateArrive)
        tab.push(newTerr)
    }else{
        let newMar= new Road(data.libelle,  data.distance,  data.type, data.poids, data.dateDepart, data.dateArrive)
        tab.push(newMar)
    }
    //}
    afficheData();
    form2.resetForm();
}



*/


