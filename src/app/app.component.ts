import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {DataSource} from '@angular/cdk/collections';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  expenses = {
    Name: '',
    Price: '',
   
  }

  displayedColumns = ['Name', 'Price'];
  dataSource = new ExpenseDataSource(this.Expenses);

  constructor(private Expenses: ExpenseService, private afs: AngularFirestore) {

  }

  addExpense() {
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
