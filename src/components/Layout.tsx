import '../styles/Layout.css'
import Articles from './Articles'
import Header from './Header'

export default function Layout(){
    return(
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Articles />
            </div>
        </div>
    )
}