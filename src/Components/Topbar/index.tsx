import './index.scss'
import docsIcon from '../../assets/docsIcon.png'



const Topbar = ({photoURL}: TopbarProps) => {
  return (
    <div className='top-bar'>
        <div className="topbar-left">
        <img className='docs-icon' src={docsIcon} alt="" />
        <p className="top-title">Docs</p>
        </div>
        <img src={photoURL} alt="" className='top-image' />
    </div>
  )
}

export default Topbar