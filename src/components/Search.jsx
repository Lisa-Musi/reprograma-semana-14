import { useCallback, useEffect, useState } from "react";
import { Subtitle } from "./Subtitle";
import { Text } from "./Text";

const Search = () => {
    const [search, setSearch] = useState('');
    const [repos, setRepos] = useState([]);

    const handleSearchChange = useCallback((event) => {
        const value = event.target.value;
        setSearch(value);
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/Lisa-Musi/repos')
            .then(response => response.json())
            .then(response => response.map(({
                id,
                name,
                html_url,
                description
            }) => ({
                id,
                name,
                url: html_url,
                description
            })))
            .then(setRepos);
    }, []);

    const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(search));

    return (
        <>
            <input
                type='text'
                value={search}
                onChange={handleSearchChange}
                placeholder='Filtrar repos'
            />
            <div>
                {
                    filteredRepos.map(repo => (
                        <div key={repo.id} className='card'>
                            <a href={repo.url} target='_blank'>
                                <Subtitle text={repo.name} />
                            </a>
                            <Text text={repo.description} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export { Search };