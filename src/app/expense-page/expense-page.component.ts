import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-page',
  templateUrl: './expense-page.component.html',
  styleUrls: ['./expense-page.component.css']
})
export class ExpensePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    task = {
      name: '',
      price:0,
      id:0
    };
    tasks = [];
    
    onClick(){
      if(this.task.id == 0){
        this.tasks.push({id: (new Date()).getMonth(),name: this.task.name, strike: false});
        console.log((new Date()).getMonth() ,this.task.name , this.task.price)
      }
      
      this.task = {
        name: '',
        price: 0,
        id:0
      };
    }
    
    onEdit(item){
      this.task = item;
    }

    onDelete(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
        }
      }
    }

    onStrike(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          if(this.tasks[i].strike){
            this.tasks[i].strike = false;
          }
          else{
            this.tasks[i].strike = true;
          }
          break;
        }
      }
    }
    selectedFile:File = null ;
  
  onFileSelected(event){
    console.log(event);
    this.selectedFile= <File> event.target.files[0];
  }
  onUpload(){
    const fd=new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    /*this.http.post('https://us-central1-imageuploadtest-cfa8e.cloudfunctions.net/helloWorld',fd)
    .subscribe(res =>{
      console.log()
    })*/
  }
  
}