import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'rooms/create', component: CreateRoomComponent },
  { path: 'rooms/:id/enter', component: EnterRoomComponent },
  { path: 'rooms/:id', component: ChatroomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'rooms', component: RoomListComponent },
  // more routes are added here
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
