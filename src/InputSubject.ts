import { Subject } from 'rxjs'
import { KeyCodes } from '.'
export default class InputSubject {
  keydownSubject: Subject<KeyCodes> = new Subject()
  constructor(document: Document) {
    document.addEventListener('keydown', event => {
      // Verify if event is handled
      if (Object.values(KeyCodes).includes(event.keyCode)) {
        this.keydownSubject.next(event.keyCode)
      }
    })
  }
}
