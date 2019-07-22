/*
    Problem: hacer un scroll suave al darle click a un boton
    donde lleve a una seccion automaticamente.

    1. cada boton debe escuchar el click
        1.1 detectar los botones
        1.3 asignar evento click a cada boton
        1.4 ejecutar la funcion de scroll al hacer click
    
    2. Funcion de scroll suave
        2.1 detectar la separacion entre el borde superior de la pagina y la seccion
        2.2 detectar el scroll que ya se hizo.
        2.3 detectar el tamaño del menu para restar al scroll
        y no se interpongan
        2.2 ejecutar la funcion de scroll suave donde
        se desplace a la seccion
*/


const getElements = menu => {
    const menuNav = document.getElementById(menu)
    const buttonsNav = menuNav.querySelectorAll('a[href^="#"]')
    const menuHeight = menuNav.getBoundingClientRect().height
    buttonsEventClick(buttonsNav, menuHeight)
}


const buttonsEventClick = (elements, menuHeight) => {
    elements.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            const attribute = e.target.getAttribute('href')
            const sectionPos = document.querySelector(attribute).offsetTop - menuHeight
            animateScroll(sectionPos)
        })
    })
}

const animateScroll = sectionPos => {
    window.scroll({
        top: sectionPos,
        left: 0,
        behavior: 'smooth'
    })
}

const runScroll = menu => {
    getElements(menu)
}

runScroll('menu')