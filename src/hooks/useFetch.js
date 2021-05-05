import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async(url) => {
            try {
                let resp = await fetch(url);

                if (!resp.ok) {
                    // eslint-disable-next-line no-throw-literal
                    throw {
                        err: true,
                        status: resp.status,
                        statusText: !resp.statusText ? "Ocurrio un error" : resp.statusText,
                    };
                }
                let data = await resp.json();

                setIsPending( false );
                setData( data );
                setError({ error: false });

            } catch(err) {
                setIsPending( true );
                setError( err );
            }
        }
        getData( url );

    }, [url]);

    return { data, isPending, error };
}
