import { useReadOnlyCachedState } from '../hooks/use-cached-state';
import styles from './Avatar.module.scss';

export type PronounsProps = {
    pronouns: string[];
}

export function Pronouns({
    pronouns: externalPronouns
}: PronounsProps): JSX.Element {
    const pronouns = useReadOnlyCachedState(() => {
        let formattedPronouns: string[];
        if (externalPronouns.length === 1) {
            formattedPronouns = externalPronouns[0].split('/');
        } else {
            formattedPronouns = externalPronouns.reduce((output, pronoun) => {
                output.push(pronoun.split('/')[0])
                return output;
            }, []);
        }

        return formattedPronouns.join(' / ');
    }, [externalPronouns]);

    return (
        <div className={styles.pronouns}>
            {pronouns}
        </div>
    )
}