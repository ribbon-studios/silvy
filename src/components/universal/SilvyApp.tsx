import { ReactNode, useEffect } from 'react';
import { fetchPronouns } from '../../features/pronouns';
import { fetchUser } from '../../features/user';
import { useAppDispatch } from '../../store';
import Layout from './Layout';

export type SilvyAppProps = {
    children: ReactNode;
};

export function SilvyApp({
    children
}: SilvyAppProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchPronouns());
    }, []);

    return (
        <Layout>
            {children}
        </Layout>
    );
}