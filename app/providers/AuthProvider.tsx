import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

import { IAuthData } from '@/services/auth/auth.helper'

interface IContext extends IAuthData {
	setData: Dispatch<SetStateAction<IAuthData>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [data, setData] = useState<IAuthData>({
		user: null,
		accessToken: ''
	})

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
