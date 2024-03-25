import { Paper, Stack, Tooltip } from "@mui/material";
import { FC } from "react";
import { ModuleContent } from "../page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import TimelapseTwoToneIcon from '@mui/icons-material/TimelapseTwoTone';
import { ModuleData } from "./ModuleData";

interface Props {
    module: ModuleContent;
}

const isModuleCompleted = (module: ModuleContent) => {
    const moduleCompletion = sessionStorage.getItem(module.key)
    return moduleCompletion !== null
}

const isModuleDisabled = (module: ModuleContent) => {
    if(isModuleCompleted(module)) {
        return false;
    }
    if(module.order === 1) {
        return false;
    }
    const previousModule = ModuleData.find(x => x.order === module.order - 1);
    if(!previousModule) {
        return false;
    }
    return sessionStorage.getItem(previousModule?.key) === null
}

export const ModuleItemContainer: FC<Props> = ({ module }) => {
    const router = useRouter();

    const isCompleted = isModuleCompleted(module);
    const isDisabled = isModuleDisabled(module);

    const getIcon = () => {
        if(isCompleted) 
        {
            return (
                <Tooltip title={'Completed'} placement="top">
                    <CheckCircleOutlineIcon style={{width: 50, height: 50, borderRadius: '50%', color: '#54da39'}} />
                </Tooltip>
            )
        }
        if(!isCompleted && isDisabled) {
            return (
                <Tooltip title={"Incomplete"} placement="top">
                    <CancelIcon style={{width: 50, height: 50, borderRadius: '50%', color: '#9d9d9c' }} />
                </Tooltip>
            )
        }
        if(!isDisabled && !isCompleted) {
            return (
                <Tooltip title={"Incomplete"} placement="top">
                    <TimelapseTwoToneIcon style={{width: 50, height: 50, borderRadius: '50%', color: '#ffaa17' }} />
                </Tooltip>
            )
        
        }
    }

    return (
        <TimelineItem>
            <Stack direction={'row'} alignItems={'center'}>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                        {getIcon()}
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} 
                           style={{ opacity: isDisabled ? 0.5 : 1, width: 750, height: 180, backgroundColor: '#dbd5d5b9', cursor: isDisabled ? 'not-allowed' : 'pointer'}} 
                           onClick={() => !isDisabled ? router.push(module.link) : null}>
                        <Stack direction={'row'} spacing={2}>
                            <Image src={module.image} alt={module.title} style={{width: 180, height: 180}} />
                            <Stack direction={'column'} justifyContent={'center'} spacing={0.25}>
                                <h3>{module.title}</h3>
                                <p>{module.description}</p>
                            </Stack>
                        </Stack>
                    </Paper>
                </TimelineContent>
            </Stack>
        </TimelineItem>

    )
}