export class FileItem{

  public archivo:File;
  public nombreArchivo:string;
  public url:string;
  public estaSubiendo:boolean = false;
  public progreso:number = 0;

  constructor( archivo:File ){

    this.archivo= archivo;
    this.nombreArchivo = archivo.name;
    

  }

}
