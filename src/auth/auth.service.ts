import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  sign() {
    return {
      status: 200,
      message: 'Success Sign',
    };
  }
  signup() {
    return {
      status: 200,
      message: 'Success Signup',
    };
  }
}
