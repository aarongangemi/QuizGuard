export class QuizUserModel {
  userId: number;

  constructor(props: Partial<QuizUserModel>) {
    this.userId = props.userId ?? -1;
  }
}
