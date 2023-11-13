type Box<T> = {
  content: T;
};

let n: number = 1,
  box: Box<number> = { content: 1 };

box.content - 1;
let boxOfStrings: Box<string>;
boxOfStrings = { content: 'a' };
boxOfStrings.content;

let arr: Array<number>;

class BoxCls<T> {
  private code = '1234';

  constructor(public content: T) {}

  getContent(code: string): T | null {
    if (code != this.code) return this.content;

    console.log('Invalid code');
    return null;
  }
}

let bCls = new BoxCls(true);
// bCls.
