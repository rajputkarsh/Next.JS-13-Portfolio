
import Link from "next/link";
import { List, ListItem } from "@mui/material";
import { Icon } from '@iconify/react';
import { STATIC_CONTENT } from "../../utils/constant";

<List style={{display: "flex"}}>
{
    Object.values(STATIC_CONTENT.SOCIAL_MEDIA_ICONS).map(
        (socialMediaElement) => (
            <ListItem key={`home-social-media-${socialMediaElement.type}`} style={{maxWidth: "max-content"}}>
                <Link href={socialMediaElement.url}>
                    {
                        <Icon icon={socialMediaElement.icon} style={{fontSize:50}}/>
                    }
                </Link>
            </ListItem>
        )
    )
}
</List>