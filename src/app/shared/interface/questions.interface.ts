export interface questionsDto {
    id: number;
    title: string;
    correctOptionId: number;
    selectedOptionId: number;
    options: [
      {
        id: number;
        questionId: number;
        name: string;
      },
     
    ]
  }