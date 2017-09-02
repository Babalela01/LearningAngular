import {ErrorHandler} from "@angular/core";

export class MyErrorHandler implements ErrorHandler{

  handleError(error: any): void {
    alert(error.message)
    console.log(error)
  }
}
