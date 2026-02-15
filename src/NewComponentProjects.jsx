import {useState} from 'react'

function NewComponent(props){
    const { setPage } = props;
    const { SETfrenchORenglish } = props;
    const { frenchORenglish } = props ;

    const hover_sound = new Audio("/Portfolio/ressources/sons/onHover.wav")
    const click2_sound = new Audio("/Portfolio/ressources/sons/click2.wav")

    function PlayonHover(){
        hover_sound.play();
    }

    function setFrench(){
        SETfrenchORenglish(prev => 0)
    }

    function setEnglish(){
        SETfrenchORenglish(prev => 1)
    }

    function seeHome(){
        setPage(prev => 0)
        window.scrollTo(0, 0);
        click2_sound.play();
    }

    function seeContact(){
        setPage(prev => 2)
        window.scrollTo(0, 0);
        click2_sound.play();
    }

    return (
        <>
            <div align="right" className="language">
                <button onClick={setEnglish}>EN</button>
                <button onClick={setFrench}>FR</button>
            </div>
            <div className="main-bar">
                <button onMouseEnter={PlayonHover} onClick={seeHome}>{frenchORenglish?'Home':'Accueil'}</button>
                <button onMouseEnter={PlayonHover}>{frenchORenglish?'Projects':'Projets'}</button>
                <button onMouseEnter={PlayonHover} onClick={seeContact}>Contact</button>
            </div>
            <div className="simple-presentation-div">
                <h3>{frenchORenglish?"Some of my Projects":"Quelques de mes Projets"}</h3>
            </div>

            <div className="global-info-block">
                <div className="left-aligned-class">
                    <div className="tag-work-in-progress">
                        <h3>{frenchORenglish?'Released !':'Disponible !'}</h3>
                    </div>
                    <h2>{frenchORenglish?"PaperIO remix":"Remix du jeu 'paperio'"}</h2>
                </div>
                <div className="project-presentation">
                    <video src="ressources/videos/demoOfPaperIO.mp4" width="100%" height="500px" autoPlay muted loop preload="metadata"></video>
                    <h2>{frenchORenglish?"A simple remake made in Python on a Numworks":"Un simple Remix fait en Python sur une Numworks"}</h2>
                    <a href="https://my.numworks.com/python/playidaill/paperio" target="_blank">Installer</a>
                </div>
            </div>


            <div className="global-info-block">
                <div className="left-aligned-class">
                    <div className="tag-work-in-progress">
                        <h3>{frenchORenglish?'Released !':'Disponible !'}</h3>
                    </div>
                    <h2>{frenchORenglish?"MakeUI - A small university project":"MakeUI - Un petit projet universitaire"}</h2>
                </div>
                <div className="project-presentation">
                    <iframe src="https://htmlpreview.github.io/?https://raw.githubusercontent.com/IdNewaill/MakeUI/refs/heads/main/public/index.html" width="100%" height="500px"></iframe>
                    <h2>{frenchORenglish?"It's a small Website created as a first University Project, using Html, Css (And some Javascript but not my code)":"Il s'agît d'un faux site Commercial crée en tant que projet pour l'Université qui utilise Html, Css (Et un peu de Javascript mais ce n'est pas mon code)."}</h2>
                    <h1>{frenchORenglish?"This website was just created to play with Html and Css, that's why it contains a lot of 'Lorem Ipsum'":"Ce site a simplement été crée pour jouer avec Html et Css, c'est pour cela qu'il contient beaucoup de 'Lorem Ipsum'"}</h1>
                    <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/IdNewaill/MakeUI/refs/heads/main/public/index.html" target="_blank">Aller sur le site</a>
                </div>
            </div>

            <div className="global-info-block">
                <div className="left-aligned-class">
                    <div className="tag-work-in-progress">
                        <h3>{frenchORenglish?'Released !':'Disponible !'}</h3>
                    </div>
                    <h2>{frenchORenglish?"Forgotten Sea - Fake e-commerce website":"Forgotten Sea - Faux site e-commerce"}</h2>
                </div>
                <div className="project-presentation">
                    <img src="ressources/images/forgotten_sea.png" width="100%" height="500px" autoPlay muted loop preload="metadata"></img>
                    <a href="https://github.com/IdNewaill/ForgottenSea" target="_blank">Installer</a>
                </div>
            </div>

            <div className="simple-presentation-div" onClick={() => window.location.href = "https://github.com/IdNewaill"}>
                <img src="ressources/images/github_logo.png" width="10%"></img>
                <h3>{frenchORenglish?"Discover more on my Github":"Découvrez plus sur mon Github"} !</h3>
            </div>
        </>
    );
}

export default NewComponent;