import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {useFlow} from '../stackflow';
import {Button} from "@mui/material";

const Home: ActivityComponentType = () => {
    const { push } = useFlow();
    
    const onClick = () => {
        push("Article", {
            title: "Hello",
        });
    };
    
    return (
        <AppScreen appBar={{ title: "Cell App" }}>
            <div>
                <div> Home Page 입니다</div>
                <Button variant="outlined" onClick={onClick}>1과 하ㄴ기</Button>
            </div>
        </AppScreen>
    );
};

export default Home;
