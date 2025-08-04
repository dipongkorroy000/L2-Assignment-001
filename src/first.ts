{
  function formatString(input: string, toUpper?: boolean): string {
    // if (input && toUpper === true) {
    //   return input.toUpperCase();
    // } else if (input && toUpper === false) {
    //   return input.toLowerCase();
    // }
    // return input.toUpperCase();

    return input && toUpper === true
      ? input.toUpperCase()
      : toUpper === false
      ? input.toLocaleLowerCase()
      : input.toUpperCase();
  }
  // console.log(formatString("Hello")); // Output: "HELLO"
  // console.log(formatString("Hello", true)); // Output: "HELLO"
  // console.log(formatString("Hello", false)); // Output: "hello"

  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const div = [];
    items.filter((item) => {
      if (item.rating >= 4) {
        div.push({ title: item.title, rating: item.rating });
      }
    });
    return div;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  // console.log(filterByRating(books));
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const div = [...arrays];
    let item = [];
    for (const i of div) {
      item.push(...i);
    }
    return item;
  }
  // console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
  // console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

  // vehicle class
  class Vehicle {
    make: string;
    year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  // car class
  class Car extends Vehicle {
    model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  // console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
  // console.log(myCar.getModel()); // Output: "Model: Corolla"

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  // console.log(processValue("hello")); // Output: 5
  // console.log(processValue(10)); // Output: 20

  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    // console.log(products);

    if (products.length > 0) {
      let num = 0;
      for (let i of products) {
        if (num < i.price) {
          num = i.price;
        }
      }

      const product = products.find((product) => product.price === num);
      return product;
    } else {
      return null;
    }
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 125 },
    { name: "Bag", price: 50 },
  ];
  // console.log(getMostExpensiveProduct(products)); // Output: { name: "Bag", price: 50 }
  // console.log(getMostExpensiveProduct([])) // null

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  function getDayType(day: Day): string {
    return day >= 0 && day < 5 ? "WeekDay" : "Weekend";
  }
  // console.log(getDayType(Day.Monday)); // Output: "Weekday"
  // console.log(getDayType(Day.Sunday)); // Output: "Weekend"

  async function squareAsync(n: number): Promise<number> {
    return await new Promise((resolve, reject) => {
      if (n >= 0) {
        resolve(n * n);
      } else {
        reject("Negative number not allowed");
      }
    });
  }
  // squareAsync(4).then(console.log); // Output after 1s: 16
  // squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
}
