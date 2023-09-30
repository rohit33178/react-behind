function customRender(element, container){
    // version 1
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML = element.children

    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)
    
    // container.appendChild(domElement) 

    // version 2
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children
    let props = element.props
    for (const prop in props) {
        console.log(prop)
        console.log(props)
        if(prop == 'children') continue
        domElement.setAttribute(prop, props[prop])
    }
    container.appendChild(domElement) 
    
}
const reactElement = {
    type: 'a',
    props: {
        href: "https://linkedin.com/in/rohit-9953933178", 
        target: "_blank", 
    }, 
    children: "click to visit my profile"
}

const rootContainer  = document.querySelector("#root");

customRender(reactElement, rootContainer)