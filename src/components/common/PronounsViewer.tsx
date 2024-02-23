import { selectPronouns } from '../../features/pronouns';
import { useAppSelector } from '../../store';
import { Badge } from './Badge';
import styles from './PronounsViewer.module.scss';

export type PronounsViewerProps = {
    ids: number[];
    limit?: number;
}

export function PronounsViewer({
    ids,
    limit
}: PronounsViewerProps): JSX.Element {
    const pronounsList = useAppSelector(selectPronouns(ids, limit));

    return (
        <div className={styles.pronouns}>
            {pronounsList.map((pronouns) => (
                <Badge>
                    {pronouns.subjective.charAt(0).toUpperCase()}
                    {pronouns.subjective.slice(1)}
                </Badge>
            ))}
        </div>
    )
}