import { Component, OnInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { HttpClient , HttpParams, HttpRequest, HttpEvent , HttpResponse ,HttpEventType} from '@angular/common/http';


@Component({
  selector: 'app-sending-request',
  templateUrl: './sending-request.component.html',
  styleUrls: ['./sending-request.component.css']
})
export class SendingRequestComponent implements OnInit {
  url='https://www.virustotal.com/vtapi/v2/file/scan?apikey=c31fcc7e65bb42f504fbb4be02d068d9e4c132c5de1972373cf39e241811d007';
  file : File;
  
  constructor(private ConnectionService : ConnectionService){}
  
  
  @ViewChild("form",{static:false}) file_form:NgForm
  
  onSubmit(){
    this.file=this.file_form.value.file;
    console.log(this.file);
    this.uploadFile(this.file)
  }
  ngOnInit(): void {}
  uploadFile(file: File){
        console.log(file)
        this.ConnectionService.uploadFile(this.url,file).subscribe(
          event => {
            if (event.type == HttpEventType.UploadProgress) {
              const percentDone = Math.round(100 * event.loaded / event.total);
              console.log(`File is ${percentDone}% loaded.`);
            } else if (event instanceof HttpResponse) {
              console.log('File is completely loaded!');
            }
          },
          (err) => {
            console.log("Upload Error:", err);
          }, () => {
            console.log("Upload done");
          }
        )
  }
  
}

