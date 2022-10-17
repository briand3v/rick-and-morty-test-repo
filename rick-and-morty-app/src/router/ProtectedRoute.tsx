import React from 'react';
import {
    Navigate,
    useLocation,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { userApi } from '../redux/api/userApi';

interface ProtectedRouteProps {
    children: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [cookies] = useCookies(['logged_in']);
    const location = useLocation();
    
    const from = ((location.state as any)?.from.pathname as string) || '/';

    console.log('------ from', from);

    const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
        skip: false,
        refetchOnMountOrArgChange: true,
    });

    const loading = isLoading || isFetching;

    const user = userApi.endpoints.getMe.useQueryState(null, {
        selectFromResult: (data) => data,
    });

    if (loading) {
        return <div>Loader ...</div>;
    }

    if (!user?.data ) {
        return <Navigate to='/signin' state={{ from: location }} replace />
    }

    return children
};

export default ProtectedRoute;