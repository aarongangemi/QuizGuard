import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { ModuleContent } from "./page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TimelineConnector, TimelineDot, TimelineItem } from "@mui/lab";

interface Props {
    module: ModuleContent;
}

export const ModuleItemContainer: FC<Props> = ({ module }) => {
    const router = useRouter();
    return (
        <Paper elevation={3} style={{width: 750, height: 180, backgroundColor: '#dbd5d5b9', cursor: 'pointer'}} onClick={() => router.push(module.link)}>
            <Stack direction={'row'} spacing={2}>
                <Image src={module.image} alt={module.title} style={{width: 180, height: 180}} />
                <Stack direction={'column'} justifyContent={'center'} spacing={0.25}>
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                </Stack>
            </Stack>
        </Paper>
    )
}