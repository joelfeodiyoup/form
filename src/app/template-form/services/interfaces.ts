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
