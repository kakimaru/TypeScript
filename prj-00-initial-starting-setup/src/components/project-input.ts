import { Component } from "./base-component";
import { autoBind } from '../decorators/autobind-decorator.js';
import { projectState } from '../state/project-state.js';
import { Validatable, validate } from "../util/validation";


  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleInputEl: HTMLInputElement;
  
    constructor() {
      super("project-input", "app", true, "user-input");
      this.titleInputEl = this.element.querySelector(
        "#title"
      )! as HTMLInputElement;
      this.descriptionEl = this.element.querySelector(
        "#description"
      )! as HTMLInputElement;
      this.peopleInputEl = this.element.querySelector(
        "#people"
      )! as HTMLInputElement;
  
      this.configure();
    }
  
    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }
  
    renderContent(): void {}
  
    private getherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputEl.value;
      const enteredDescription = this.descriptionEl.value;
      const enteredPeople = this.peopleInputEl.value;
  
      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      };
      const descriptionValidatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };
      const peopleValidatable: Validatable = {
        value: enteredPeople,
        required: true,
        min: 1,
        max: 5,
      };
  
      if (
        !validate(titleValidatable) &&
        !validate(descriptionValidatable) &&
        !validate(peopleValidatable)
      ) {
        alert("Invalid input");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }
  
    private clearInputs() {
      this.titleInputEl.value = "";
      this.descriptionEl.value = "";
      this.peopleInputEl.value = "";
    }
  
    @autoBind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.getherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }
