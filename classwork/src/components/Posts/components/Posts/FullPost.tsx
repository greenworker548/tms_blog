import { useParams } from 'react-router-dom';

const FullPost = () => {
    const { postId } = useParams();
    return (
        <span>
            {postId}
        </span>
    )
}

export { FullPost };