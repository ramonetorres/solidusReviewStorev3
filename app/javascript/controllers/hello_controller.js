import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello from HelloController")
    this.element.textContent = "Hello World!"
  }
}
