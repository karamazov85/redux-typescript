import { actionCreators } from '../state'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const useActions = () => {
    
    const dispatch = useDispatch()

    // bindActionreators() returns an object with all action creators that are in action-creators/index.ts
    // as keys. So in the .tsx you can just destructure the action you need from the object and 
    // it will be automatically dispatched.
    return bindActionCreators(actionCreators, dispatch);
}