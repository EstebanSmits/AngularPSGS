import {Pipe,PipeTransform} from '@angular/core';

@Pipe({ name:'convertToSpaces'})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value:string, stringToReplace:string): string {
        return replaceString.transform(value,stringToReplace, ' ');
    }
}
module replaceString {
    export function transform(value:string, stringToReplace:string,replacingValue:string): string {
        return value.replace(stringToReplace,replacingValue);
    }
}