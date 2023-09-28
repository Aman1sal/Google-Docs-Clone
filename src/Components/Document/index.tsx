import CreateDoc from '../CreateDoc'
import Topbar from '../Topbar'
import './index.scss'

const Document = ({photoURL}: TopbarProps) => {
  return (
    <div>
        <Topbar photoURL = {photoURL}/>
        <CreateDoc/>
    </div>
  )
}

export default Document