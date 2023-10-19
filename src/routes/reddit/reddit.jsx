import { Tabs } from "./Tabs/Tabs";
import "./reddit.scss";

const TMP_MENU = [
    { label: "Posts" },
    { label: "Wiki" },
    { label: "Qud Discord" },
    { label: "Kitfox Discord" },
    { label: "Patreon" },
];

export function Reddit() {
    return (
        <div className="Reddit">
            <Tabs menu={TMP_MENU} />
        </div>
    );
}
