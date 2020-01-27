export interface StudentDetail {
  firstName: string;
  lastName: string;
  avgGpa: number;
  email: string;
  studentClasses: {
    id: Int16Array;
    grade: number;
  };
}
