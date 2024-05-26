import { Produit } from "./Produit.js";

export abstract class Materiel extends Produit {
    public abstract info(): void;
}