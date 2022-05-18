import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { MyCommunityLayout } from "../../components/layout";
import { useListCommunityDispatcher } from "../../redux/reducers/listCommunity/slice";

const MyCommunityContainer = () => {
    const { listCommunity: { loading }, doListCommunity } = useListCommunityDispatcher(); 

    const loadListCommunity = async (values) =>{
        
        try {
            const payload = {
                namaKomunitas: values.namaKomunitas,
            };
            await doListCommunity(payload);
        } catch (error){
            alert (error)
        }
        }
    return (
      <AuthProvider>
        <MyCommunityLayout>
            <section>
                <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                    <div className="flex justify-between">
                        <a href="./account">
                            <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </a>         
                        <div className="font-semibold text-2xl ">
                            <p>Komunitas Saya</p>
                        </div>
                        <div className="text-white">
                        <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </div>
                    </div>
                </div>                
            </section>
        </MyCommunityLayout>
      </AuthProvider>
    );
  };
export default MyCommunityContainer;
