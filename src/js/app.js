export class Char {
  constructor(attack) {
    this._attack = attack;
    this._stoned = false;
    this.distance = 1;
  };

  get attack() {
    let calculatedAttack = this._attack * (1 - (this.distance - 1) * 0.1);

    if (this.stoned) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }

    return Math.round(calculatedAttack)
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

export class Magician extends Char {
  constructor(attack) {
    super(attack);
  }
}

export class Daemon extends Char {
  constructor(attack) {
    super(attack);
  }
}