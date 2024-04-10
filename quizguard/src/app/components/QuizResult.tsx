export class QuizResult {
  score: number;
  ranking: number;
  highestScore: number;

  constructor(props?: QuizResult) {
    this.score = props?.score || -1;
    this.ranking = props?.ranking || -1;
    this.highestScore = props?.highestScore || -1;
  }
}
