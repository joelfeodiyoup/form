export interface SelectOption {
  value: string;
  viewValue: string;
}
export interface ConfigurationSelectOption {
  value: string;
  viewValue: string;
  validFor?: any[];
  hideFor?: any[];
}
export interface Item {
  type: string;
  description: string;
  replaced: string;
  amount: string;
}
export interface Person {
    Address: Address,
    CompanyName?: string,
    Email?: string,
    NameFor: string,
    NameSur: string,
    NameTitle: string,
    PhoneNo?: string,
    Type?: string
}
export interface Address {
    Country: '',
    County: '',
    Line1: '',
    Line2: '',
    Postcode: '',
    Town: ''
}