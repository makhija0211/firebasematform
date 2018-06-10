import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataSource} from '@angular/cdk/collections';
import { ExpenseService } from '../expense.service';
@Component({
  selector: 'app-fbasedata',
  templateUrl: './fbasedata.component.html',
  styleUrls: ['./fbasedata.component.css']
})
export class FbasedataComponent implements OnInit {
 ngOnInit(){}
  expenses = {
    Name: '',
    Price: '',
   
  }

  displayedColumns = ['Name', 'Price'];
  dataSource = new ExpenseDataSource(this.Expenses);

  constructor(private Expenses: ExpenseService, private afs: AngularFirestore) {

  }

  addExpense(Name,Price) {
  
    this.Expenses.addExpense(this.Expenses);
  }
}

export class ExpenseDataSource extends DataSource<any> {

  constructor(private Expenses: ExpenseService) {
  super()
  }

  connect() {
    return this.Expenses.getExpense();
  }

  disconnect() {

  }
}