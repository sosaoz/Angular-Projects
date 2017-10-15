import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FileItem } from '../models/file-item';

import * as firebase from 'firebase';


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES:string ='img';

  constructor( public af:AngularFireDatabase ) { }

  listaUltimasImagenes( numeImagenes:number ):Observable<any[]>{
      return this.af
                 .list(`/${ this.CARPETA_IMAGENES }`,
                        ref=> ref.limitToLast(numeImagenes)).valueChanges();
  }

  cargar_imagenes_firebase( archivos:FileItem[] ){
    console.log(archivos);

    let storageRef = firebase.storage().ref();
    for( let item of archivos ){
      item.estaSubiendo = true;
      let uploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);
        uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => item.progreso =  ((snapshot as firebase.storage.UploadTaskSnapshot).bytesTransferred/ (snapshot as firebase.storage.UploadTaskSnapshot).totalBytes)*100,
          (error) => console.error("Error al subir", error),
          () => { item.url = uploadTask.snapshot.downloadURL;
                item.estaSubiendo = false;
                this.guardarImagen({ nombre:item.nombreArchivo, url:item.url });
              }
            )
    }
  }

  private guardarImagen( imagen:any ){
    this.af.list(`${ this.CARPETA_IMAGENES }`)
           .push(imagen);
  }

}
