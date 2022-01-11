export class movied {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public productionDate :  string;
    public genre: string; 
    

constructor(id : number, name: string, desc: string, imagePath: string, productionDate: string, genre : string, ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.productionDate = productionDate;
    this.genre = genre;
    
}

}