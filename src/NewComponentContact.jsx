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

    const [copier,MettreCopier]=useState(false)

    const click_sound = new Audio("/Portfolio/ressources/sons/click.wav")

    function fallbackCopy(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
    
        try {
            document.execCommand("copy");
            console.log("Fallback: Copied!");
        } catch (err) {
            console.error("Fallback: Copy failed", err);
        }
    
        document.body.removeChild(textarea);
    }

    function copyEmailIntoClipBoard(){
        try{
            navigator.clipboard.writeText("gregoire.delugre@free.fr");
        } catch {
            fallbackCopy("gregoire.delugre@free.fr");
        }
        
        click_sound.play();
        MettreCopier(prev => true)
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

    function seeProject(){
        setPage(prev => 1)
        window.scrollTo(0, 0);
        click2_sound.play();
    }

    return (
        <>
            <div align="right" class="language">
                <button onClick={setEnglish}>EN</button>
                <button onClick={setFrench}>FR</button>
            </div>
            <div className="main-bar">
                <button onMouseEnter={PlayonHover} onClick={seeHome}>{frenchORenglish?'Home':'Accueil'}</button>
                <button onMouseEnter={PlayonHover} onClick={seeProject}>{frenchORenglish?'Projects':'Projets'}</button>
                <button onMouseEnter={PlayonHover} >Contact</button>
            </div>
            <div class="simple-presentation-div">
                <h3><span class="highlight-me-yellow">{frenchORenglish?"Contact":"Contactez"}</span>{frenchORenglish?" me here":"-moi ici"}</h3>
            </div>
            <div class="contact-gmail">
                <img src="/Portfolio/ressources/images/gmail_logo.png" width="50%" height="100%" onClick={() => window.location.href = "mailto:gregoire.delugre@free.fr"}></img>
                <button class="contact-email" onClick={copyEmailIntoClipBoard}>{copier?(frenchORenglish?"It's copied !":"C'est copié !"):"gregoire.delugre@free.fr"}</button>
            </div>
        </>
    );
}

export default NewComponent;