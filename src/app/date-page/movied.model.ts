export class movied {
    public name: string;
    public description: string;
    public imagePath: string;
    public productionDate :  string;
    public genre: string; 
    public id: number;
constructor(name: string, desc: string, imagePath: string, productionDate: string, genre : string, id : number,) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.productionDate = productionDate;
    this.genre = genre;
    this.id = id;
}

}