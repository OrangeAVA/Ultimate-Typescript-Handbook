/* +--------------------TypeScript Design Patterns--------------------+ */

abstract class Observable<T> {
  constructor(public value: T) {}
  private observers: ((update: T) => void)[] = [];
  observe(observer: (update: T) => void) {
    this.observers.push(observer);
  }
  notify() {
    this.observers.forEach((observer) => observer(this.value));
  }
}

class ObservableString extends Observable<string> {
  updateValue(value: string) {
    this.value = value;
    this.notify();
  }
}

const myObservableString = new ObservableString('test');
myObservableString.observe((update: string) => {
  console.log(`The value was updated to ${update}`);
});

myObservableString.updateValue('new value!'); // The value was updated to new value!
