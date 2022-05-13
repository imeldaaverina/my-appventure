import AuthProvider from "../../providers/auth/AuthProvider";
import FollowerListLayout from "../../components/layout/FollowerListLayout";
import { Icon } from '@iconify/react';
import NavbarPengikut from "../../components/layout/elements/NavbarPengikut";
import useAccount from "../account/hooks/useAccount"

const FollowingListContainer = () => {
    const { profile } = useAccount();

    return (
      <AuthProvider>
        <FollowerListLayout>
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
                <NavbarPengikut/>
            </section>
        </FollowerListLayout>
      </AuthProvider>
    );
  };
export default FollowingListContainer;
  