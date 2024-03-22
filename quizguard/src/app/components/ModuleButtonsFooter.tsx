import { Stack, Button } from "@mui/material"
import { FC } from "react"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";


interface Props {
    previousLink: string;
    previousText?: string;
    nextLink: string;
    nextText?: string;
}

export const ModuleButtonsFooter: FC<Props> = ({previousText = 'Previous', previousLink, nextText = "Next", nextLink}) => {
    const router = useRouter();
    return (
        <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
            <Button variant="outlined" style={{ color: "#f55a07", borderColor: "#f55a07"}} onClick={() => router.push(previousLink)}>
                <ArrowBack style={{ marginRight: 8 }}/>
                <strong>{previousText}</strong>
            </Button>
            <Button variant="outlined" style={{ color: "#54da39", borderColor: "#54da39"}} onClick={() => router.push(nextLink)}>
                <CheckCircleOutlineIcon style={{ marginRight: 8, maxHeight: 21 }}/>
                <strong>{nextText}</strong>
            </Button>
        </Stack>
    )
}