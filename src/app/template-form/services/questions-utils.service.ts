import { Injectable } from '@angular/core';
import { ConfigurationSelectOption, SelectOption } from './interfaces';

@Injectable({
    providedIn: 'root',
})
export class QuestionsUtilsService {
    constructor() {}
    filter(property: string,
      configOptions: ConfigurationSelectOption[]): SelectOption[] {
      const filtered = configOptions.filter(r => {
        if (r.hideFor) {
          return r.hideFor.indexOf(property) < 0;
        } else if (r.validFor) {
          return r.validFor.indexOf(property) >= 0;
        }
      });
      return filtered;
    }
    toViewOptions(configurationOptions: ConfigurationSelectOption[]): SelectOption[] {
      return configurationOptions.map(r => {
        let option = { value: r.value, viewValue: r.viewValue };
        return option;
      })
    }
}