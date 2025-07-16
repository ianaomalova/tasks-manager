import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../../models/Task';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private firestore: Firestore) { }

  getAllTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'Tasks');
    return collectionData(tasksRef, { idField: 'id' }) as Observable<Task[]>;
  }

  getTask(id: string): Observable<Task> {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return docData(taskDoc, { idField: 'id' }) as Observable<Task>;
  }

  async addTask(task: Task) {
    const taskDoc = doc(this.firestore, `tasks/${task.id}`);
    await setDoc(taskDoc, task);
  }

  async updateTask(id: string, data: Partial<Task>) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    await updateDoc(taskDoc, data);
  }

  async deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    await deleteDoc(taskDoc);
  }
}
