import { selectUser } from '../../features/user';
import { useAppSelector } from '../../store';
import { Avatar } from '../common/Avatar';
import { Button } from '../common/Button/Button';
import { IconButton } from '../common/Button/IconButton';
import { Card } from '../common/Card';
import { CardBody } from '../common/CardBody';
import { Content } from '../common/Content';
import { Input } from '../common/Input';
import { PronounsViewer } from '../common/PronounsViewer';
import { Typography } from '../common/Typography';
import styles from './ProfileCard.module.scss';
import {FaPencilAlt} from 'react-icons/fa';
import { Animations, Sizes } from '../../constants/components';
import { useState } from 'react';

export function ProfileCard() {
    const user = useAppSelector(selectUser);
    const [editing, setEditing] = useState(false);

    if (!user) return null;

    return (
        <Card className={styles.card} data-testid='author-card'>
            <IconButton
                animation={Animations.SWAP}
                className={styles.edit}
                icon={FaPencilAlt}
                size={Sizes.SMALL}
                onClick={() => setEditing(!editing)}
            />
            <CardBody>
                <div className={styles.header}>
                    <Avatar
                        src={user.image}
                        size={128}
                    />
                    <Content className={styles.details}>
                        {editing ? (
                            <Input
                                label='Name'
                                value={user.name}
                            />
                        ) : (
                            <>
                                <Typography
                                    as='h2'
                                    className={styles.name}
                                >
                                    {user.name}
                                </Typography>
                            </>
                        )}
                        <PronounsViewer ids={user.pronouns}/>
                    </Content>
                </div>
            </CardBody>
        </Card>
    );
}