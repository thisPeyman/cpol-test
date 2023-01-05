import { delay, Observable, of } from 'rxjs';

export const fakeResponse = <T>(data: T): Observable<T> =>
  of(data).pipe(delay(3000));
