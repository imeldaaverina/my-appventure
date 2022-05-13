import AuthProvider from "../../providers/auth/AuthProvider";
import FollowingListLayout from "../../components/layout/FollowingListLayout";
import NavbarMengikuti from "../../components/layout/elements/NavbarMengikuti";
import { Icon } from '@iconify/react';
import useAccount from "../account/hooks/useAccount"

const FollowingListContainer = () => {
  const { profile } = useAccount();

    return (
      <AuthProvider>
        <FollowingListLayout>
        <section>
                <div className="max-w-md mx-auto h-full px-2">
                    <div className="flex justify-between">
                        <a href="./account">
                            <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </a>         
                        <div className="font-bold text-xl ">
                            {profile}
                        </div>
                        <div className="text-white">
                        <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </div>
                    </div>
                </div>
                <NavbarMengikuti/>
            </section>
        </FollowingListLayout>
      </AuthProvider>
    );
  };
  export default FollowingListContainer;
  