import ThreeScene from './ThreeScene.jsx'
import {useState} from 'react'

import NewComponent from './NewComponent.jsx'
import NewComponentProjects from './NewComponentProjects.jsx'
import NewComponentContacts from './NewComponentContact.jsx'

function App() {
  const [Page,setPage]=useState(0)
  const [frenchORenglish,SETfrenchORenglish]=useState(1)

  if (Page==0){
    return (
      <>
        <div className="reveal-screen"></div>
        <div className="Scene3D"><ThreeScene/></div>
        <NewComponent setPage={setPage} SETfrenchORenglish={SETfrenchORenglish} frenchORenglish={frenchORenglish}/>
      </>
    )
  } else if (Page==1) {
    return (
      <>
        <div className="reveal-screen"></div>
        <div className="Scene3D"><ThreeScene/></div>
        <NewComponentProjects setPage={setPage} SETfrenchORenglish={SETfrenchORenglish} frenchORenglish={frenchORenglish}/>
      </>
    )
  } else {
    return (
      <>
        <div className="reveal-screen"></div>
        <div className="Scene3D"><ThreeScene/></div>
        <NewComponentContacts setPage={setPage} SETfrenchORenglish={SETfrenchORenglish} frenchORenglish={frenchORenglish}/>
      </>
    )
  }
}

export default App;