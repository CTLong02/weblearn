import { useEffect } from 'react';
import { Nav } from '~/components/nav';

export default function () {
    useEffect(() => {
        fetch('api')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Nav active="help" />
        </>
    );
}
