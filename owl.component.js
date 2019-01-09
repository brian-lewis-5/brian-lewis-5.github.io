class OwlComponent extends HTMLElement {
  constructor() {
    super();
    
    const element = document.createElement('h2')

    window.localStorage.setItem('sample_str', 'yum str');
    window.localStorage.setItem('sample_obj', JSON.stringify({'yum_key': 'yum egg'}));
    element.innerHTML = `
      sample_str: ${window.localStorage.getItem('sample_str')}
      <br/>
      sample_obj: ${JSON.parse(window.localStorage.getItem('sample_obj')).yum_key}
    `;
    
    this
      .attachShadow({mode: 'open'})
      .appendChild(element);
  }
}

customElements.define('owl-component', OwlComponent);
