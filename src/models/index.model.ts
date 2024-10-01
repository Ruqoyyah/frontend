export type LoginDto = {
  email: string;
  password: string;
};
export type SignUpDto = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  registnumber: string;
};
export type EditDto = {
  firstname: string;
  lastname: string;
  username: string;

  email: string;
  registnumber: string;
};
export type CreateSport = {
  sportName: string;
  sportType: string;
};

export type IUser = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  registnumber: string;
  username: string;
  userType: string;
  sport: ISport[];
};
export type ISport = {
  id: number;
  sportName: string;
  creationDate: string;
  sportType: string;
};
