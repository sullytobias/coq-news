import "./Card.scss";

export function Card() {
    return (
        <div className="Card">
            <div className="Card__upvotes">12</div>
            <div className="Card__rightPanel">
                <div className="Card__posted">
                    Posted by u/AlaskanDude1985 15 hours ago
                </div>
                <h3 className="Card__title">
                    So how does one get the “What with the disembowelment and
                    all” achievement?
                </h3>
                <div className="Card__content">
                    Ive been wandering around the salt marshes near Joppa for a
                    while now and have yet to find the flattened remains; I get
                    its supposed to be random and all, but so is a lot of things
                    in this game.
                </div>
                <button className="Card__comments">7 Comments</button>
            </div>
        </div>
    );
}
