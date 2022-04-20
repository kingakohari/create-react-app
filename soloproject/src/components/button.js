function Button () {

    function changeText() {
        const btn = document.querySelector("button");
        const text = btn.textContent

        if (text === 'Click me!'){
            btn.innerHTML = 'You clicked me!'
        } else if (text === 'You clicked me!'){
            btn.innerHTML = 'Stop clicking me!'
        } else if (text === 'Stop clicking me!'){
            setTimeout(() => {btn.innerHTML = 'Click me!'}, 3000)
        }

    }

    return (    
    <button onClick={changeText}>Click me!</button>
    )
}

export default Button