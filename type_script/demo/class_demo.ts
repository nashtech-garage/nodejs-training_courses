class demo {
  private full_name:string;

  constructor() {
    console.log('Vao day')
  }

  get fullName(): string {
    return this.full_name;
  }

  set fullName(full_name: string) {
    this.full_name = full_name;
  }
}

const clsDemo = new demo();
clsDemo.fullName = 'Tran Minh';

const hoTen = clsDemo.fullName;
console.log(hoTen);

