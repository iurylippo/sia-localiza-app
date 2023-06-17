export interface UserDataType {
  name: string;
  email: string;
  userId: string;
}

export interface UserSignInResponseType {
  access_token: string;
  refresh_token: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
}

export interface UserLoginData {
  email: string;
  password: string;
}
