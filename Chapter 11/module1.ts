/* +--------------------Modules--------------------+ */

/* 1 */
export type Answer = {
  score: number;
  correct: boolean;
};

/* 2 */

export interface Exam {
  questions: string[];
  answers: Answer[];
}

/* 3 */

export class MathExam implements Exam {
  questions: string[] = [];
  answers: Answer[] = [];
}

export function getScore(exam: MathExam): number {
  return exam.answers.reduce((prev, curr) => {
    return (curr.correct) ? prev + curr.score : 0;
  }, 0);
}

export const stduent1Score = getScore({
  questions: [],
  answers: [],
});

/* +--------------------Resolve JSON Module--------------------+ */

// import config from './config.json';
// const enable = config.enableFeature; // fine
