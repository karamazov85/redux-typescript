import { useSelector, useDispatch } from 'react-redux'
import { fetchBeers } from '../state'

const BeerList: React.FC = () => {
    
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(fetchBeers()as any)
    }

    const { loading, beers, error } = useSelector((state: any) => state.beers)
    
    return (
        <div>
            <button onClick={onClick}>GET BEERS</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {!loading && !error && 
                beers.map((beer: string) => 
                <li key={Math.random()}>{beer}</li>)
            }
        </div>
    )
}

export default BeerList