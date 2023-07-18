import { Customer } from './customer';

declare module './customer' {
  interface Customer {
    socialMediaName: string;
    updateSocialMediaName(name: string): void;
  }
}

const mySocialCustomer: Customer = new Customer('Jon Doe');
mySocialCustomer.socialMediaName = '@jondoe';

Customer.prototype.updateSocialMediaName = function (name: string) {
  this.socialMediaName = name;
}
