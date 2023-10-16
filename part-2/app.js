function App() {
    return (
        <div>
            <Tweet
                name="Kristina"
                username="Kris3"
                date={new Date().toDateString()}
                message="My First Tweet"
            />

            <Tweet
                name="Sanja"
                username="Sanja25"
                date={new Date().toDateString()}
                message="My First Tweet"
            />

            <Tweet
                name="Sara"
                username="Sara8"
                date={new Date().toDateString()}
                message="My First Tweet"
            />
        </div>);
}