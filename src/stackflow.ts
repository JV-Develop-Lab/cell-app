import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import {basicUIPlugin} from "@stackflow/plugin-basic-ui";
import Home from "./pages/Home";
import SubjectOne from "./pages/SubjectOne";

export const { Stack, useFlow, useStepFlow } = stackflow({
    transitionDuration: 350,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    activities: {
        MyActivity: Home,
        Article: SubjectOne
    },
    initialActivity: () => "MyActivity",
});
