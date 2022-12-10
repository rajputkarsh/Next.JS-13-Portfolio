
import Link from "next/link";
import { List, ListItem } from "@mui/material";
import { Icon } from '@iconify/react';
import { CONTENT_PROPERTIES } from "../../utils/constant";

<List style={{display: "flex"}}>
{
    Object.values(CONTENT_PROPERTIES.SOCIAL_MEDIA_ICONS).map(
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