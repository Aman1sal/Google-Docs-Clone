import Topbar from '../Topbar'
import './index.scss'

const Document = ({photoURL}: TopbarProps) => {
  return (
    <div>
        <Topbar photoURL = {photoURL}/>
    </div>
  )
}

export default Document