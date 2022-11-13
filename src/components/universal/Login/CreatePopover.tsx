
import { BsPatchPlus, BsPatchPlusFill, BsPeopleFill, BsBookFill } from 'react-icons/bs';
import { IconButton } from '../../common/Button/IconButton';
import { Popover, PopoverItem } from '../../common/Popover';

export function CreatePopover() {
    return (
        <Popover
            toggle={<IconButton
                icon={BsPatchPlus}
                hoverIcon={BsPatchPlusFill}
            />}
        >
            <PopoverItem icon={BsBookFill}>
                Create a Strat
            </PopoverItem>
            <PopoverItem icon={BsPeopleFill}>
                Create a Team
            </PopoverItem>
        </Popover>
    );
}