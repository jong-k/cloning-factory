class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) { // static: 정적 메서드
    return human instanceof Human;
  }

  breathe() {
    alert('h-a-a-a-m');
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
console.log(Human.isHuman(newZero));

// static 키워드를 통해 정적 메서드를 사용할 수 있다
// 인스턴스 없이 바로 사용하는 메서드이다
// 클래스명.static 메서드 이렇게 사용한다