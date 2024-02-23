import { Direction } from '../../constants/components';
import { Author } from '../../types/author';
import { Avatar } from '../common/Avatar';
import { Card } from '../common/Card';
import { PronounsViewer } from '../common/PronounsViewer';
import { Typography } from '../common/Typography';
import styles from './AuthorCard.module.scss';

interface AuthorCardProps {
    author: Author;
}

export function AuthorCard({
    author,
    ...extraProps
}: AuthorCardProps) {
    return (
        <Card
            className={styles.card}
            data-testid='author-card'
            {...extraProps}
        >
            <div className={styles.name}>
                <Typography as='h1'>
                    {author.name}
                </Typography>
                <PronounsViewer ids={author.pronouns}/>
            </div>
            <Avatar
                src={author.image}
                size={90}
            />
        </Card>
    );
}