import check from '../my-icons/check-mark.png'
import "../my-styles/header.css"
function Header () {
    return (
      <header className ="checklist-header">
        <div className="checklist-logo-container">
          <img src={check} alt="checklist logo" className="checklist-logo-img"/>
        </div>
        <div className="checklist-title-container">
        <h1 className="checklist-title">Checklist</h1>
        </div>
        <div className="checklist-subtitle-container">
        <h2 className="checklist-subtitle">By Angel Martinez</h2>
        </div>
      </header>
    );
  }
  
  export default Header