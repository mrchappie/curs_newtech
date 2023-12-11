import { CanActivateFn } from '@angular/router';

export const isNotLoggedInGuard: CanActivateFn = (route, state) => {
  return true;
};
