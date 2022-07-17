import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'

interface Props {
    author: string,
    story_title: string,
    story_url: string
}

export default function Card({ author, story_title, story_url }: Props) {

    const openUrl = (props: any) => {
        window.open(props, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className='container-card'>
            <div className='left-card' onClick={() => openUrl(story_url)}>
                <h3 className='title-card'> 3 hours ago {author}</h3>
                <h2 className='description-card'>{story_title}</h2>
            </div>
            <div className='right-card'>
                <button className='button-card-fav'>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    )
}