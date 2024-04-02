class QuizOption {
  text: string;
  isCorrect?: boolean;

  constructor(props: Partial<QuizOption>) {
    this.text = props.text || "";
    this.isCorrect = props.isCorrect || false;
  }
}

export class QuizQuestion {
  text: string;
  order: number;
  options: QuizOption[];

  constructor(props?: Partial<QuizQuestion>) {
    this.text = props?.text || "";
    this.order = (props?.order as number) || 0;
    this.options = (props?.options || []).map((x) => new QuizOption(x));
  }
}
