import RegisterCard from "../../components/RegisterCard/RegisterCard";
import { postData } from '../../data';
import { StyledRegistered } from './style'

const Registered = () => {




    return <h1>
        THis is the Registered Courses

        <StyledRegistered>
            {postData.map((eachPost, i) => {
                const { title, content, created_at } = eachPost;
                return (
                    <RegisterCard title={title} content={content} createdAt={created_at}
                        key={eachPost['id']}
                        onClickRegister={() => console.log(i)}
                    />

                )
            })}
        </StyledRegistered>


    </h1>

}

export default Registered;