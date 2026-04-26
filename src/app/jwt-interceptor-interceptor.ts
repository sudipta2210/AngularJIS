import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes('admin/signup')) {
    //Retrive token from localstorage
    const token = localStorage.getItem('Mytoken');
    //if token exists,clone the request and add the token to the header
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
      return next(authReq);
    }
  }
  //if token does not exist
  return next(req);
};

