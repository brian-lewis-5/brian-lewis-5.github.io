class OwlComponent extends HTMLElement {
  constructor() {
    super();
    
    const element = document.createElement('h2');

    window.localStorage.setItem('str', 'yum str');
    window.localStorage.setItem('obj', JSON.stringify({'yum_key': 'yum_obj_prop'}));
    element.innerHTML = `
      str: ${window.localStorage.getItem('str')}
      <br/>
      obj: ${JSON.parse(window.localStorage.getItem('obj')).yum_key}
    `;
    
    this
      .attachShadow({mode: 'open'})
      .appendChild(element);
  }
}

customElements.define('owl-component', OwlComponent);
