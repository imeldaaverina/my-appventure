import AuthProvider from "../../providers/auth/AuthProvider";
import FollowerListLayout from "../../components/layout/FollowerListLayout";
import { Icon } from '@iconify/react';
import NavbarPengikut from "../../components/layout/elements/NavbarPengikut";

const FollowingListContainer = () => {
    return (
      <AuthProvider>
        <FollowerListLayout>
            <section>
                <div className="max-w-md mx-auto h-full px-2">
                    <div className="">
                        <a href="./account">
                            <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </a>         
                    </div>
                </div>
                <NavbarPengikut/>
            </section>
        </FollowerListLayout>
      </AuthProvider>
    );
  };
  export default FollowingListContainer;
  