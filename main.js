class KameCard extends HTMLElement{
    constructor(){
    super();
    
    const shadow = this.attachShadow({mode:"open"})
    
    //create elements
    const $divContainer = document.createElement('div');
    const $divHeader = document.createElement('div');
    const $divBody = document.createElement('div');
    const style = document.createElement('style')
    
    // create attributes
    $divContainer.setAttribute('class', 'container')
    $divHeader.setAttribute('class', 'container--header')
    $divBody.setAttribute('class', 'container--body')
    style.textContent=`
    .container{
    border: 1px solid rgb(62, 172, 187);
    border-radius: 5px;
    box-shadow: steelblue 1px 1px 1px 2px;
    height: 150px;
    width: 200px;
    padding: 5px;
    margin: 5px
    }
    .container--header{
    text-align: center;
    font-size: 1.5rem;
    }
    .container--body{
    font-size: 1.1rem;
    }
    `
    
    // get attributes
    const title = this.getAttribute('title')
    console.log('title: ', title);
    const text = this.getAttribute('text')
    
    // put text
    $divHeader.innerText = title
    $divBody.innerText = text
    
    //agregar al padre sus hijos
    $divContainer.appendChild($divHeader)
    $divContainer.appendChild($divBody)
    shadow.appendChild(style)
    shadow.appendChild($divContainer)

    }
}

customElements.define('kame-card', KameCard)