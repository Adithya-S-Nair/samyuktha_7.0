import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({ open, anchor, setDrawer }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    React.useEffect(() => {
        setState((prevState) => ({ ...prevState, [anchor]: open }));
    }, [open, anchor]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        if (!open) {
            setTimeout(() => {
                setDrawer(false);
            }, 150);
        }
    };

    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        style={{
                            borderRadius: '50px'
                        }}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <List>
                                {['EVENTS', 'ABOUT US', 'CONTACT US', 'SIGN IN'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                        </Box>
                    </Drawer>
                </div>
            </React.Fragment>
        </div>
    );
}