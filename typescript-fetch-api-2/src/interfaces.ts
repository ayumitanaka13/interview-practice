export interface IUser {
  picture: IPicture;
  name: IName;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}
