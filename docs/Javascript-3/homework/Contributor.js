'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Contributor {
  constructor(contributor) {
    this.contributor = contributor;
  }

  /**
   * Render the contributor info to the DOM.
   * @param {HTMLElement} container The container element in which to render the contributor.
   */
  render(container) {
    // TODO: replace the next line with your code.
    //Util.createAndAppend('pre', container, JSON.stringify(this.contributor, null, 2));
    const liElement = Util.createAndAppend('li', container);
    const imgElement = Util.createAndAppend('img', container, {
      src: this.contributor.avatar_url,
      width: 40,
      height: 40,
    });
    //   const imgAttributes = document.querySelector('img');
    // imgAttributes.setAttribute('width', 40);
    // imgAttributes.setAttribute('height', 40);
    liElement.appendChild(imgElement);
    liElement.appendChild(document.createTextNode(this.contributor.login));
    liElement.appendChild(document.createTextNode(this.contributor.contributions));
  }
}
