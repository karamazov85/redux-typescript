import React, { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { Beer } from '../types-defs/beer-type-def'

const BeerList: React.FC = () => {
    
    const [query, setQuery] = useState('');

    // custom hook with bindActionCreators
    const { fetchBeers } = useActions()

    const onClick = () => {
        fetchBeers(query)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    // useTypedSelector replaces useSelector -- as it is typed
    const { loading, beers, error } = useTypedSelector((state) => state.beers)

    return (
        <div>
            <input type="search" value={query} onChange={onChange} placeholder="enter beer name"/>
            <button onClick={onClick}>GET BEERS</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {!loading && !error && 
                beers.map((beer: Beer) => 
                <ul key={Math.random()}>
                    <li>{beer.name}</li>
                    <li>{beer.tagline}</li>
                    <li>{beer.description}</li>
                </ul>
                )
            }
        </div>
    )
}

export default BeerList