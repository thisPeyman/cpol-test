import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fakeResponse } from 'src/app/shared/data-access/utils/fake-request';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return fakeResponse<{ token: string; user: User }>({
      token: 'MY_VERY_LONG_LOGIN_TOKEN',
      user: {
        avatar: '',
        firstName: 'Peyman',
        id: 10,
        lastName: 'Khosravi',
        mobile: '+989354789',
        username: 'thepymn',
      },
    });
  }

  verifyToken(token: string): Observable<{ user: User | null }> {
    return token
      ? fakeResponse<{ user: User }>({
          user: {
            avatar: '',
            firstName: 'Peyman',
            id: 10,
            lastName: 'Khosravi',
            mobile: '+989354789',
            username: 'thepymn',
          },
        })
      : fakeResponse({ user: null });
  }
}
