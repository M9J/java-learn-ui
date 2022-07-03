import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  response: any = '';
  api: string = 'https://m9j-java-learn-7wj5465p2rpx7-8081.githubpreview.dev/';
  fileList: any[] = [];
  fileContent: string = '';
  currentFile: any = {};

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllFiles();
  }
  getGreeting() {
    this.http.get<any>(this.api + 'greeting').subscribe((response) => {
      console.log(response);
      this.response = response;
    });
  }

  getAllFiles() {
    this.http.get<any>(this.api + 'file').subscribe((response) => {
      console.log(response);
      if (response) {
        this.fileList = response;
      }
    });
  }

  newFile() {
    const nextFileNumber = this.fileList.length + 1;
    const nextFile = {
      fileName: 'Untitled-' + nextFileNumber,
      fileContent: '',
      isSaving: false,
    };
    this.fileList.unshift(nextFile);
    nextFile.isSaving = true;
    this.http.post(this.api + `file`, nextFile).subscribe((response) => {
      if (response) nextFile.isSaving = false;
    });
  }

  getFile(fileId: number) {
    const thatFile = this.fileList.find((f) => f.fileId === fileId);
    this.currentFile = thatFile;
  }
}
