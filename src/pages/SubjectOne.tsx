import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {Container, Typography} from "@mui/material";
import React from "react";
import {useStepFlow} from "../stackflow";

// @ts-ignore
import data from '../data/subject-1.js';

type ArticleParams = {
    title: string;
};
const SubjectOne: ActivityComponentType<ArticleParams> = ({ params }) => {
    const { stepPush, stepPop } = useStepFlow("Article");
    console.log(data);
    const onNextClick = () => {
        // `stepPush()`을 호출하면 params.title이 변경돼요.
        stepPush({
            title: "Next Title",
        });
    };
    
    const onPrevClick = () => {
        // `stepPop()`을 호출하면 이전 params.title로 돌아가요
        stepPop();
    };
    
    return (
        <AppScreen appBar={{ title: "제자양육 1과" }}>
            <Container>
            
            </Container>
            <Container>
                <Typography variant="h4" component="h1">
                    1. 나는 어디에서 와서 어디로 가는 인생일까요?
                </Typography>
                <Typography variant="subtitle2">
                    [이사야 43장 1 ~ 3절]
                    1 야곱아 너를 창조하신 여호와께서 지금 말씀하시느니라 이스라엘아 너를 지으신 이가 말씀하시느니라 너는 두려워하지 말라 내가 너를 지명하여 불렀나니 너는 내 것이라
                    2 내가 물 가운데로 지날 때에 내가 너와 함께 할 것이라 강을 건널 때에 물이 너를 침몰하지 못할 것이며 네가 불 가운데로 지날 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니
                    3 대저 나는 여호와 네 하나님이요 이스라엘의 거룩한 이요 네 구원자임이라 내가 애굽을 너의 속량물로 구스와 스바를 너를 대신하여 주었노라
                </Typography>
                <Typography>
                    유명한 승려들이 이 세상을 떠나며 남기는 한마디를 열반송이라고 합니다.
                    원효대사 이후에 불교의 최고승이라고 말하는 성철 스님도 마지막 죽을 때 열반송을 남겼습니다. 한자성어로 기록된 그 내용을 풀이하면 다음과 같습니다. "한평생남녀의무리를속여서하늘에가득한죄업이수미산보다더크구나.산채로무간 지옥에떨어지니내한이만갈래나되도다.태양이붉은빛을토하면서푸른산에걸렸구나." 참으로 충격적이고 안타까운 고백입니다.
                    성철스님은 생전에 수많은 사람들을 감동시키는 분이셨지만 정작 자신이 누구인지를 몰랐기에 겪는 비극이었습니다.
                </Typography>
                <Typography>
                    "나는 어디에서 와서 어디로 가는 인생일까요?"
                    소크라테스 이후 온 인류에게 계속되어온 질문이지만, 아직도 풀리지 않는 질문입니다. 그러나"나는 왜 이 땅에 태어나서 살다가 죽어야 하는가? 죽음으로 모든 것이 끝나는 것일까? 아니면 죽음 이후 어떤 세계가 또 있을까?"
                    등의 질문에 대해 분명한 해답을 알아야 합니다.
                    결국 "나는 누구인가?"를 물어볼 대상은 오직 하나님뿐입니다.
                </Typography>
                <Typography>
                    왜냐하면 그 분은 나를 창조하셨고, 나의 모든 과거와 현재와 미래까지 다 알고 계시기 때문입니다.
                </Typography>
                <h1>{params.title}</h1>
                <button onClick={onNextClick}>next</button>
                <button onClick={onPrevClick}>prev</button>
            </Container>
        </AppScreen>
    );
};

export default SubjectOne;
