import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users.service';
// ng g guard auth
export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth guard')
  console.log(route)
  console.log(state)
  const userService = inject(UsersService)
  const router = inject(Router);
  if(userService.isLoggedIn())
    return true;
  alert('please login')
  return router.navigate(['/login'])
};
