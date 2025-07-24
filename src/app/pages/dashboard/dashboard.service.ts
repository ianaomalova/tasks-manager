import { Injectable } from '@angular/core';
import {from, map, Observable, switchMap} from 'rxjs';
import {Task} from '../../models/Task';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
  query, where, addDoc
} from '@angular/fire/firestore';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  getAllTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const q = query(
      tasksRef,
      where('ownerId', '==', this.authService.getCurrentUser()?.uid)
    );
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }

  getTaskById(taskId: string): Observable<Task | null> {
    const taskDoc = doc(this.firestore, `tasks`, taskId);
    return docData(taskDoc, { idField: 'id' }) as Observable<Task | null>;
  }

  createTask(task: Omit<Task, 'id' | 'ownerId'>) {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.uid) {
      throw new Error('User not authenticated');
    }

    const tasksRef = collection(this.firestore, 'tasks');

    const newTask = {
      ...task,
      ownerId: currentUser.uid,
      users: task.users || [currentUser.uid],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return from(addDoc(tasksRef, newTask)).pipe(
      switchMap((docRef) => {
        return from(updateDoc(docRef, { id: docRef.id })).pipe(
          map(() => ({
            ...newTask,
            id: docRef.id
          }))
        );
      })
    );
  }

  updateTask(id: string, data: Partial<Task>) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return from(updateDoc(taskDoc, data)).pipe(
      map(() => ({ id, ...data }))
    )
  }

  deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return from(deleteDoc(taskDoc)).pipe(
      map(() => id)
    );
  }
}
