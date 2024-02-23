import { Direction } from '../../constants/components';
import { Author } from '../../types/author';
import { Avatar } from '../common/Avatar';
import { Card } from '../common/Card';
import { Pronouns } from '../common/Pronouns';
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
            direction={Direction.VERTICAL}
            {...extraProps}
        >
            <div className={styles.name}>
                <Typography as='h1'>
                    {author.name}
                </Typography>
                <Pronouns pronouns={author.pronouns}/>
            </div>
            <Avatar src={author.image} />
        </Card>
    );
}