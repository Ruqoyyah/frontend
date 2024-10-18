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
  enrollmentDeadline?: string;
  year?: number;
  season?: string;
};
export type CreateEvent = {
  sportId: number;
  eventName: string;
  eventDate: string;
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
  enrollmentDeadline: string;
  year: number;
  season: string;
};
export type IEvent = {
  id: number;
  eventName: string;
  eventDate: string;
  sport: ISport;
};
