import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from './useRedux';

/**
 *
 * @description - Groups commonly used system functions and data in a central location for
 *                easy access and update. Commonly used funtions should be included here
 *                so we don't have to import and create same funtions everywhere.
 */

const useSystemFunctions = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const pathname = usePathname();

  // states
  const tokenState = useAppSelector((state) => state.token);
  const socialState = useAppSelector((state) => state.social);

  return {
    navigate,
    pathname,
    dispatch,

    // states
    tokenState,
    socialState,
  };
};

export default useSystemFunctions;
