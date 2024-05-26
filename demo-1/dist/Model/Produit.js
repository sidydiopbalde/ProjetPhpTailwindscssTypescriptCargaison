export class Produit {
    libelle;
    poids;
    constructor(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    getLibelle() {
        return this.libelle;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    getPoids() {
        return this.poids;
    }
    setPoids(poids) {
        this.poids = poids;
    }
}
