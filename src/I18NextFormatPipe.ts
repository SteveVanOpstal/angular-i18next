import { Inject, Injectable, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { I18NEXT_SERVICE } from './I18NEXT_TOKENS';
import { ITranslationService } from './ITranslationService';

@Injectable()
@Pipe({
    name: 'i18nextFormat', pure: false
})
export class I18NextFormatPipe implements PipeTransform {

  constructor(
      @Inject(I18NEXT_SERVICE) private translateI18Next: ITranslationService
  ) {}

  public transform(value: string, options: Object | string): string {
     let opts: any = typeof(options) === 'string' ? { format: options } : options;
     return this.translateI18Next.format(value, opts.format, opts.lng);
   }
}
