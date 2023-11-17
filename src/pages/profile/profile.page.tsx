import { IUserContext, UserContext } from "contexts/user.context";
import { IUserProfile } from "models/user.model";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProfileByUsername } from "services/profile.service";

type ProfileParamsType = {
    username: string;
};

const ProfilePage = () => {
    const { currentUser } = useContext<IUserContext>(UserContext);
    const [profile, setUserProfile] = useState<IUserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { username } = useParams<ProfileParamsType>();

    useEffect(() => {

        async function getProfile() {
            const response = await GetProfileByUsername(username);

            if(!response.ok){
                console.log("User was not found!")
                //display not found page
            }else{
                const data = await response.json();
                setUserProfile(data.profile);
            }
            setIsLoading(false);
        }

        if(currentUser?.username === username){
            setUserProfile({
                username: currentUser.username,
                bio: currentUser.bio,
                image: currentUser.image,
                email: currentUser.email,
                following: false,
            })
            setIsLoading(false);
        }else {
            getProfile();
        }
        
    }, []);
    return (
        <>
            {
                !isLoading && profile &&
                <div className="profile-page">
                    <div className="user-info">
                        <div className="container">
                            <div className="row">
                            <div className="col-xs-12 col-md-10 offset-md-1">
                                <img src={profile.image} className="user-img" />
                                <h4>{username}</h4>
                                <p>
                                {profile.bio}
                                </p>
                                    <button className="btn btn-sm btn-outline-secondary action-btn" disabled={!currentUser}>
                                        <i className="ion-plus-round" />
                                        &nbsp; Follow {username}
                                    </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProfilePage;