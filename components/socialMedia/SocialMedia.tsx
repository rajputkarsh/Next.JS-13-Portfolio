
import Link from "next/link";
import { List, ListItem } from "@mui/material";
import { Icon } from '@iconify/react';
import { STATIC_CONTENT } from "../../utils/constant";

function SocialMedia({color}: {color: string}){
    return (
        <List style={{display: "flex", justifyContent:"center"}}>
        {
            Object.values(STATIC_CONTENT.SOCIAL_MEDIA.ICONS).map(
                (socialMediaElement) => (
                    <ListItem key={`home-social-media-${socialMediaElement.type}`} style={{maxWidth: "max-content"}}>
                        <Link href={socialMediaElement.url}>
                            {
                                <Icon icon={socialMediaElement.icon} style={{fontSize:40, color:color}}/>
                            }
                        </Link>
                    </ListItem>
                )
            )
        }
        </List>        
    )
}

export default SocialMedia;