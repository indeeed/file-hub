import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-hub';
  constructor(private http: HttpClient) {}

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // שליחת הקובץ לשרת באמצעות HttpClient
      this.http.post('http://localhost:3000/api/upload', formData).subscribe(
        (response) => {
          console.log('תשובה מהשרת:', response);
        },
        (error) => {
          console.error('שגיאה בהעלאת הקובץ:', error);
        }
      );
    }
  }
}
