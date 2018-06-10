import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ExpenseService {

  constructor(private afs: AngularFirestore) { }

  addExpense(ExpenseData) {
    this.afs.collection('Expenses').add(ExpenseData).then(() => {
      console.log('Done');
    })
  }

  getExpense() {
    return this.afs.collection('Expenses', ref => ref.orderBy('Price')).valueChanges();
  }
}
