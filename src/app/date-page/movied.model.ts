export class movied {
    public name: string;
    public description: string;
    public imagePath: string;
    public productionDate :  string;
    public ganre: string; 

constructor(name: string, desc: string, imagePath: string, productionDate: string, ganre : string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.productionDate = productionDate;
    this.ganre = ganre;
}

}