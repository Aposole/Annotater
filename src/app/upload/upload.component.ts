import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

interface Image{
  url:string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
annotateImages() {

}
  public uploader:FileUploader = new FileUploader({url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Ffr%2Fs%2Fphotos%2Fimage&psig=AOvVaw1NEJKs3Kx2u0l7-_RGKbL3&ust=1701424067460000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID0ytq464IDFQAAAAAdAAAAABAE'});
  public uploadedImages: {src:string}[] = []
  constructor(){
    this.uploader.onAfterAddingFile = (file) => {
    file.withCredentials = false;}
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('File uploaded:', item, status, response)
    }
  }
  fileSelected(event:any){
    this.uploadedImages=[]

    const files = event.target.files;
    if(files){
      for(let i=0;i<files.length;i++){
        this.showImage(files[i])
      }
        
      }
    }
  showImage(file:File){
    const reader = new FileReader()
    reader.onload = (e:any)=>{
      this.uploadedImages.push({src:e.target.result})
    }
    reader.readAsDataURL(file)
  }
}
