import { Component} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  constructor() { }

  // classe do component
  // é necessário associar ao template
  name = new FormControl('')

  updateName() {
    this.name.setValue('Nancy')
  }

}
