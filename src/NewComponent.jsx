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

    function seeProjects(){
        setPage(prev => 1);
        window.scrollTo(0, 0);
        click2_sound.play();
    }

    function seeContact(){
        setPage(prev => 2)
        window.scrollTo(0, 0);
        click2_sound.play();
    }

    return (
        
        <div>
            <div align="right" className="language">
                <button onClick={setEnglish}>EN</button>
                <button onClick={setFrench}>FR</button>
            </div>
            <div className="main-bar">
                <button onMouseEnter={PlayonHover}>{frenchORenglish?'Home':'Accueil'}</button>
                <button onMouseEnter={PlayonHover} onClick={seeProjects}>{frenchORenglish?'Projects':'Projets'}</button>
                <button onMouseEnter={PlayonHover} onClick={seeContact}>Contact</button>
            </div>

            <div className="simple-presentation-div">
                <h3>{frenchORenglish?"Hi ! I’m Grégoire !":"Salut ! Moi c'est Grégoire !"}</h3>
                <h3>{frenchORenglish?'A Developer.':"Je suis développeur."}</h3>
            </div>
            <div className="simple-presentation-intro">
                <p>
                {frenchORenglish?"I'm":"Je suis"} <span className="highlight-me-blue">{frenchORenglish?"passionate":"passionné"} </span> {frenchORenglish?"about Web,":"de Web"} <span className="highlight-me-red">{frenchORenglish?"AI":"IA"}</span>, <span className="highlight-me-yellow">3D</span>, <span className="highlight-me-green">Design</span>
                </p>
            </div>

            <div className="void-div"></div>
            
            <div className="global-info-block">
                <h2>{frenchORenglish?"It all start with Scratch !":"Tout à commencé avec Scratch !"}</h2>
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/N7YSpK3Tbx0" title="security breach scratch by Idaill" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>{frenchORenglish?"When I was in college, the":"Au collège, la découverte de"} <span className="highlight-me-yellow">scratch</span> {frenchORenglish?"discovery was the bigest thing that made my life change":"fut la naissance de cette"} <span className="highlight-me-blue">{frenchORenglish?"complitly":"passion"}</span>{frenchORenglish?" ":"pour l'informatique"}!</h3>
                <p>{frenchORenglish?"I spend hours making games, from 2D to 3D Games like it can be seen in this video from a scratch user.":"J'ai passé des heures à la création de divers jeux de la 2D jusqu'à la 3D comme on peut le voir dans cette vidéo d'un utilisateur de Scratch."}</p>
            </div>

            <div className="global-info-block">
                <h2>{frenchORenglish?"KNOWN LANGUAGES":"LANGAGES QUE JE CONNAIS"}</h2>
                <div className="global-image-box">
                <img src="ressources/images/css_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"}></img>
                <img src="ressources/images/java_logo.svg" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Java_(langage)"}></img>
                <img src="ressources/images/javafx_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/JavaFX"}></img>
                <img src="ressources/images/html_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"}></img>
                <img src="ressources/images/python_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Python_(langage)"}></img>
                <img src="ressources/images/kotlin_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Kotlin_(langage)"}></img>
                <img src="ressources/images/lua_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Lua"}></img>
                <img src="ressources/images/sql_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Structured_Query_Language"}></img>
                <img src="ressources/images/golang_logo.png" draggable="false" onClick={() => window.location.href = "https://fr.wikipedia.org/wiki/Go_(langage)"}></img>
                </div>
            </div>

            <div className="see-more" onClick={seeProjects}>
                <img src="ressources/images/starStart.svg" ></img>
                <h1>{frenchORenglish?"My Projects":"Mes projets"}</h1>
                <img src="ressources/images/starEnd.svg"></img>
            </div>
        </div>
    );
}

export default NewComponent;