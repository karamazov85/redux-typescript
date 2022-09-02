import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../state'

// that's how we type the vanilla useSelector so that TS has an idea of our RootState types.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;