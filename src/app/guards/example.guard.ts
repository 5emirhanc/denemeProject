import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  ResolveFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return true;
};

export const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return true;
};

export const canDeActivate: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currrentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return true;
};

/*export const resolveGuard : ResolveFn<any> = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) =>{
  const httpClient = inject(HttpClient);
  return  httpClient.get("https://jsonplaceholder.typicode.com/photos");
};*/

export const isAdminGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) =>{
  return !!localStorage.getItem("admin");
}

export const isUserGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) =>{
  return !localStorage.getItem("admin");
}