import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      password: [''],
      avatar: [null]
    })
  }

  ngOnInit() { }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    var obj = {
      name: "",
      password: "",
      level: 1 
    }
    obj.name = this.form.get('name').value
    obj.password = this.form.get('password').value
    // formData.append("name", this.form.get('name').value);
    // formData.append("password", this.form.get('password').value);
    // formData.append("avatar", this.form.get('avatar').value);
    console.log(obj);

    this.http.post('https://education4all.herokuapp.com/login', obj).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}