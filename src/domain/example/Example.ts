import { Response } from './ExampleApiClient';

export interface IExample {
  greeting: string;
}

// Domain object Example.
export class Example implements IExample {
  greeting: string;

  constructor(data: Response | null) {
    this.greeting = data !== null ? data.hello : '';
  }
}

// Another Domain object Example.
export const FooBar: IExample = {
  greeting: '',
};
