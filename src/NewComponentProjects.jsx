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
            <div align="right" class="language">
                <button onClick={setEnglish}>EN</button>
                <button onClick={setFrench}>FR</button>
            </div>
            <div className="main-bar">
                <button onMouseEnter={PlayonHover} onClick={seeHome}>{frenchORenglish?'Home':'Accueil'}</button>
                <button onMouseEnter={PlayonHover}>{frenchORenglish?'Projects':'Projets'}</button>
                <button onMouseEnter={PlayonHover} onClick={seeContact}>Contact</button>
            </div>
            <div class="simple-presentation-div">
                <h3>{frenchORenglish?"Some of my":"Quelques de mes"} <span class="highlight-me-purple">{frenchORenglish?"Projects":"Projets"}</span></h3>
            </div>
            <div class="global-info-block">
                <div class="left-aligned-class">
                    <div class="tag-work-in-progress">
                        <h3>{frenchORenglish?'Work in progress !':'En cours !'}</h3>
                    </div>
                    <h2>{frenchORenglish?"Lymen Studio - small LLC n":"Lymen Studio - petite SARL"}</h2>
                </div>
                <div class="project-presentation">
                    <iframe src="https://lymen-studio.fr/" width="100%" height="500px"></iframe>
                    <h2>{frenchORenglish?"It’s a Small LLC, made with friends selling differents services around developement and design.":"C'est une petite SARL, faite avec des amis proposant divers services tel que le développement et le design"}</h2>
                    <h1>{frenchORenglish?"For now it’s just a idea but you can check out the website ! (not fully made too)":"Pour l'instant, il ne s'agît que d'une idée mais vous pouvez jeter un coup d'oeil au site ! (Lui aussi en développement)"}</h1>
                </div>
            </div>

            <div class="global-info-block">
                <div class="left-aligned-class">
                    <div class="tag-work-in-progress">
                        <h3>{frenchORenglish?'Work in progress !':'En cours !'}</h3>
                    </div>
                    <h2>{frenchORenglish?"Forgotten Files - Horror Game":"Forgotten Files - Jeu d'horreur"}</h2>
                </div>
                <div class="project-presentation">
                    <img draggable="false" src="/Portfolio/ressources/images/ForgottenFilesImage.png" width="100%" height="100%"></img>
                    <h2>{frenchORenglish?"It’s an horror game in the Fives Nights At Freddy’s type.":"C'est un jeu d'horreur sur le thème de Fives Nights At Freddy's."}</h2>
                    <div class="normal-left-text">
                        <h1>{frenchORenglish?"The game is still in developement but I hired voice actors and 47 peoples have applied.":"Le jeu est toujours dans sa phase de développement mais j'ai recruter des voice-actors et 47 personnes ont postulés."}</h1>
                        <h1>{frenchORenglish?"I’ve also worked on it with somes friends, it make me learn to :":"J'y ai travailler avec des amis, cela m'a permit de :"}</h1>
                        <h1>○ {frenchORenglish?"Manage a":"Diriger une"} <span class="highlight-me-red">{frenchORenglish?"team":"équipe"}</span></h1>
                        <h1>○ <span class="highlight-me-yellow">{frenchORenglish?"Recruit":"Recruter"}</span></h1>
                        <h1>○ {frenchORenglish?"Be":"Être"} <span class="highlight-me-green">{frenchORenglish?"multitasking":"multi-tâches"}</span></h1>
                        <h1>{frenchORenglish?"And":"Et"} <span class="highlight-me-blue">{frenchORenglish?"more":"bien plus"}</span> !</h1>
                    </div>
                </div>
            </div>
            <div class="simple-presentation-div" onClick={() => window.location.href = "https://github.com/IdNewaill"}>
                <img src="/Portfolio/ressources/images/github_logo.png" width="10%"></img>
                <h3>{frenchORenglish?"Discover more on my Github":"Découvrez-en plus sur mon Github"} !</h3>
            </div>
        </>
    );
}

export default NewComponent;